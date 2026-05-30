import {
  Heart,
  Clock,
  MapPinned,
  Banknote,
  Building2,
  ArrowRight,
  Zap,
} from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  description: string;
  tags: string[];
  isHot: boolean;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <img
            src={job.logo}
            alt={job.company}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-3 mb-2">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {job.title}
                </h3>
                {job.isHot && (
                  <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Hot
                  </span>
                )}
              </div>
              <p className="text-gray-600 flex items-center gap-1 min-w-0">
                <Building2 className="w-4 h-4" />
                {job.company}
              </p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{job.description}</p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPinned className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Banknote className="w-4 h-4" />
              {job.salary}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
              {job.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {job.tags.map((tag, i) => (
              <span key={i} className="bg-sky-50 text-sky-600 px-2 py-1 rounded-md text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mt-4 pt-4 border-t border-gray-100">
        <span className="flex items-center gap-1 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          {job.posted}
        </span>
        <button className="gradient-sky text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
          Lamar Sekarang
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
