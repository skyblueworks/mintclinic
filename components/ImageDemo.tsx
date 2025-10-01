export function ImageDemo() {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
      <h3 className="mb-4 font-bold text-blue-900">
        Image Implementation Guide
      </h3>

      <div className="space-y-4 text-sm">
        <div>
          <h4 className="mb-2 font-medium text-blue-800">
            1. With Real Sanity Images:
          </h4>
          <pre className="overflow-x-auto rounded bg-white p-3 text-xs">
            {`// When you have real image assets in Sanity:
import { urlFor } from "@/sanity/lib/image";

<Image
  src={urlFor(service.mainImage).width(800).height(400).url()}
  alt={service.title?.en}
  fill
  className="object-cover"
/>`}
          </pre>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-blue-800">
            2. Current Demo Approach:
          </h4>
          <pre className="overflow-x-auto rounded bg-white p-3 text-xs">
            {`// For testing without real images:
<div className="bg-gray-200 flex items-center justify-center">
  <p>Image Placeholder</p>
</div>`}
          </pre>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-blue-800">
            3. To Add Real Images:
          </h4>
          <ul className="space-y-1 text-blue-700">
            <li>• Upload images in Sanity Studio</li>
            <li>• Reference them in your documents</li>
            <li>• Use urlFor() to generate URLs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
