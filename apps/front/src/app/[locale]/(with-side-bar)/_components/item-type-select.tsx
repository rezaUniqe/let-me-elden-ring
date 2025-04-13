"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useWebTranslations } from "@/hooks/use-web-translations";
import Resources from "../../../../../@types/resources";

interface Props {
  className?: string;
  onSelect: (type: string) => void;
}

type ItemType = {
  value: string;
  textKey: keyof Resources["common"]["itemTypes"];
};

const items: Array<ItemType> = [
  {
    value: "items",
    textKey: "items",
  },
  {
    value: "armors",
    textKey: "armors",
  },
  {
    value: "shields",
    textKey: "shields",
  },
  {
    value: "weapons",
    textKey: "weapons",
  },
  {
    value: "talismans",
    textKey: "talismans",
  },
];

const ItemTypeSelect = ({ className, onSelect }: Props) => {
  const { t } = useWebTranslations(["common"]);
  return (
    <Select onValueChange={onSelect} defaultValue={items[0]?.value}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Item Type" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem
            key={item.textKey}
            value={item.value}
            className="capitalize"
          >
            {t(`common:itemTypes.${item.textKey}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ItemTypeSelect;
