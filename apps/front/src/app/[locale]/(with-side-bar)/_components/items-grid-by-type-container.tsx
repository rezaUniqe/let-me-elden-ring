import { ApiFilter } from "../../../../../@types/api-filter";
import ItemsDataContainer from "@/app/[locale]/(with-side-bar)/_components/items/items-data-container";
import ShieldsDataContainer from "@/app/[locale]/(with-side-bar)/_components/shields/shields-data-container";
import ArmorDataContainer from "@/app/[locale]/(with-side-bar)/_components/armors/armors-data-container";

interface Props extends ApiFilter {
  type: "shields" | "armors" | "items" | string;
}

const ItemsGridByTypeContainer = ({ type, ...props }: Props) => {
  switch (type) {
    case "shields":
      return <ShieldsDataContainer {...props} />;
    case "armors":
      return <ArmorDataContainer {...props} />;
    case "items":
    default:
      return <ItemsDataContainer {...props} />;
  }
};

export default ItemsGridByTypeContainer;
