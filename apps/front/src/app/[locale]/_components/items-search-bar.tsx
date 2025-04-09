// components/ItemsSearchBar.tsx
"use client";

import { Search } from "lucide-react";
import { Input } from "@workspace/ui/components/input";

interface ItemSearchBarProps {
  value: string;
  onValueChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

const ItemsSearchBar = ({
  value,
  onValueChange,
  placeholder = "Search items...",
  className = "",
}: ItemSearchBarProps) => {
  return (
    <div className={`relative flex flex-row items-center ${className}`}>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <Search className=" absolute right-4 h-4 w-4" />
      <span className="sr-only">Search</span>
    </div>
  );
};

export default ItemsSearchBar;
