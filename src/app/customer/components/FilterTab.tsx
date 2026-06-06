type FilterTabsProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterTabs({
  options,
  value,
  onChange,
}: FilterTabsProps) {
  return (
    <div className="flex items-center gap-2">
      {options.map((options) => (
        <button
          key={options}
          onClick={() => onChange(options)}
          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
            value === options
              ? "bg-accent text-gray-900 font-medium"
              : "bg-muted text-gray-400 hover:text-white"
          }`}
        >
          {options}
        </button>
      ))}
    </div>
  );
}
