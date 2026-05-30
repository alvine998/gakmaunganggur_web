import { ChevronRight, ChevronLeft } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("...");
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
      >
        <ChevronLeft className="w-4 h-4" />
        Sebelumnya
      </button>
      
      {getPageNumbers().map((page, index) => (
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange?.(page)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              page === currentPage
                ? "bg-sky-500 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 border border-gray-200"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="text-gray-400">
            {page}
          </span>
        )
      ))}
      
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sky-600 hover:text-sky-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
      >
        Selanjutnya
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
