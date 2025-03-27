import ItemCard from "@/components/item-card";
import {ArmorItem} from "@/model/api/item/armor-schema";
interface ArmorGalleryListProps {
    items: ArmorItem[]
}
const ArmorGalleryList = ({items}:ArmorGalleryListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items?.map((item) => (
                <ItemCard key={item.id}
                          image={item.image}
                          description={item.description}
                          title={item.name}
                          isFav={false}/>
            ))}
        </div>
    );
};

export default ArmorGalleryList;