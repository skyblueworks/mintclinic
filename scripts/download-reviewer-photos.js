#!/usr/bin/env node

// Photos scraped through APIFY
// https://console.apify.com/actors/Xb8osYTtOjlsgI6k9/input
// compass/Google-Maps-Reviews-Scraper

const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");

// Read reviews.json
const reviewsPath = path.join(__dirname, "..", "assets", "reviews.json");
const reviews = JSON.parse(fs.readFileSync(reviewsPath, "utf8"));

// Create output directory
const outputDir = path.join(__dirname, "..", "public", "reviewer-photos");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate deterministic filename from URL
function getFilenameFromUrl(url) {
  if (!url || url.includes("default-user")) {
    return null; // Skip default user images
  }

  // Create a hash of the URL for deterministic filename
  const hash = crypto.createHash("md5").update(url).digest("hex");

  // Extract file extension if possible
  const urlWithoutParams = url.split("?")[0];
  const ext = path.extname(urlWithoutParams) || ".jpg";

  return `${hash}${ext}`;
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ Skipping ${filename} (already exists)`);
      resolve(filename);
      return;
    }

    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve(filename);
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}); // Delete the file async
        reject(err);
      });
  });
}

// Main function
async function downloadAllPhotos() {
  console.log("Starting reviewer photo download...\n");

  const photoMap = {};
  const downloadPromises = [];

  for (const review of reviews) {
    if (review.reviewerPhotoUrl) {
      const filename = getFilenameFromUrl(review.reviewerPhotoUrl);

      if (filename) {
        photoMap[review.reviewerPhotoUrl] = filename;
        downloadPromises.push(
          downloadImage(review.reviewerPhotoUrl, filename).catch((err) => {
            console.error(`✗ Failed to download ${filename}: ${err.message}`);
            return null;
          })
        );
      } else {
        console.log(`- Skipping default user image for ${review.name}`);
      }
    }
  }

  // Wait for all downloads
  await Promise.all(downloadPromises);

  // Create mapping file in assets (for imports) and public (for reference)
  const assetsMappingPath = path.join(
    __dirname,
    "..",
    "assets",
    "reviewer-photos",
    "url-to-filename.json"
  );
  const publicMappingPath = path.join(outputDir, "url-to-filename.json");

  // Ensure assets directory exists
  const assetsDir = path.dirname(assetsMappingPath);
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  fs.writeFileSync(assetsMappingPath, JSON.stringify(photoMap, null, 2));
  fs.writeFileSync(publicMappingPath, JSON.stringify(photoMap, null, 2));

  console.log(`\n✓ Downloaded ${Object.keys(photoMap).length} photos`);
  console.log(
    `✓ Created mapping files: ${assetsMappingPath} and ${publicMappingPath}`
  );
  console.log("\nDone!");
}

// Run the script
downloadAllPhotos().catch(console.error);
