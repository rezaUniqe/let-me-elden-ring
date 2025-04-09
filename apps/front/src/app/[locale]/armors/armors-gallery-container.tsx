"use client";
import { useAllArmorQuery } from "@/hooks/queries/use-all-armor-query";
import ArmorGalleryList from "@/app/[locale]/_components/armor-gallery-list";

const ArmorsGalleryContainer = () => {
  const { data: { data: items } = { data: [] } } = useAllArmorQuery();

  return (
    <div className="container mx-auto py-8 px-4">
      <ArmorGalleryList items={items} />
    </div>
  );
};

export default ArmorsGalleryContainer;
