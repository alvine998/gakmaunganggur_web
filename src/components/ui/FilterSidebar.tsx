import { SlidersHorizontal } from "lucide-react";

interface FilterGroup {
  title: string;
  options: string[];
  defaultChecked?: number[];
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  onReset?: () => void;
}

export default function FilterSidebar({ filters, onReset }: FilterSidebarProps) {
  return (
    <div className="lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5" />
            Filter
          </h3>
          <button
            onClick={onReset}
            className="text-sm text-sky-600 hover:text-sky-700"
          >
            Reset
          </button>
        </div>

        {filters.map((filter, filterIndex) => (
          <div key={filterIndex} className={filterIndex < filters.length - 1 ? "mb-6" : ""}>
            <h4 className="text-sm font-medium text-gray-700 mb-3">{filter.title}</h4>
            <div className="space-y-2">
              {filter.options.map((option, optionIndex) => (
                <label
                  key={optionIndex}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    defaultChecked={filter.defaultChecked?.includes(optionIndex)}
                    className="w-4 h-4 text-sky-500 rounded border-gray-300 focus:ring-sky-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
