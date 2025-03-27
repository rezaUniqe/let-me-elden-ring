import ItemsGallery from "@/app/[locale]/items-gallery";
import {Suspense} from "react";

export default function Page() {
  return (
      <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<div>Loading...</div>}>
              <ItemsGallery/>
          </Suspense>
      </div>
  );
}
