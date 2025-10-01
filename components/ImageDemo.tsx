export function ImageDemo() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="font-bold text-blue-900 mb-4">
        Image Implementation Guide
      </h3>
      
      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            1. With Real Sanity Images:
          </h4>
          <pre className="bg-white p-3 rounded text-xs overflow-x-auto">
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
          <h4 className="font-medium text-blue-800 mb-2">
            2. Current Demo Approach:
          </h4>
          <pre className="bg-white p-3 rounded text-xs overflow-x-auto">
{`// For testing without real images:
<div className="bg-gray-200 flex items-center justify-center">
  <p>Image Placeholder</p>
</div>`}
          </pre>
        </div>

        <div>
          <h4 className="font-medium text-blue-800 mb-2">
            3. To Add Real Images:
          </h4>
          <ul className="text-blue-700 space-y-1">
            <li>• Upload images in Sanity Studio</li>
            <li>• Reference them in your documents</li>
            <li>• Use urlFor() to generate URLs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}