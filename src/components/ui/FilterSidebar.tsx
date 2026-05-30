import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:w-72 lg:flex-shrink-0">
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex flex-1 items-center justify-between gap-3 text-left lg:pointer-events-none"
            aria-expanded={isOpen}
            aria-controls="job-filter-panel"
          >
            <span className="font-semibold text-gray-900 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filter
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform lg:hidden ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <button
            onClick={onReset}
            className="text-sm text-sky-600 hover:text-sky-700"
          >
            Reset
          </button>
        </div>

        <div
          id="job-filter-panel"
          className={`${isOpen ? "block" : "hidden"} mt-6 lg:block`}
        >
          {filters.map((filter, filterIndex) => (
            <div key={filterIndex} className={filterIndex < filters.length - 1 ? "mb-6" : ""}>
              <h4 className="text-sm font-medium text-gray-700 mb-3">{filter.title}</h4>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
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
    </div>
  );
}
