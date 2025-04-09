import ItemsGallery from "@/app/[locale]/items-gallery";
import { Suspense } from "react";
import ItemGalleryShimmer from "@/app/[locale]/item-gallery-shimmer";

export default function Page() {
  return (
    <div className="container mx-auto px-4 pb-8">
      <Suspense fallback={<ItemGalleryShimmer />}>
        <ItemsGallery />
      </Suspense>
    </div>
  );
}
