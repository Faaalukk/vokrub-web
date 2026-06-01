"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-muted border border-border rounded-lg w-72">
      <Search size={15} className="text-gray-500 shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none w-full"
      />
    </div>
  );
}
