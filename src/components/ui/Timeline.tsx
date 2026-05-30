interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-green-500 transform -translate-x-1/2"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow transform -translate-x-1/2 z-10"></div>
            
            {/* Content */}
            <div
              className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <span className="text-sm font-bold text-sky-600 mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
