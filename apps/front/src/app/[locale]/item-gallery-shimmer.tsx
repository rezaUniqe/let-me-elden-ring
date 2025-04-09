import React from "react";
import { Skeleton } from "@workspace/ui/components/skeleton";

const ItemGalleryShimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(null)
        ?.map((_, index) => (
          <Skeleton
            key={index}
            className="rounded-lg w-full h-[480px] mx-auto"
          />
        ))}
    </div>
  );
};

export default ItemGalleryShimmer;
