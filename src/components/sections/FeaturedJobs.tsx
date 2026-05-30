import Link from "next/link";
import {
  Heart,
  Clock,
  MapPinned,
  Banknote,
  ArrowRight,
  Zap,
} from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 25.000.000 - 35.000.000",
    type: "Full-time",
    posted: "2 days ago",
    isHot: true,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    location: "Surabaya, Indonesia",
    salary: "Rp 20.000.000 - 30.000.000",
    type: "Full-time",
    posted: "1 day ago",
    isHot: false,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    location: "Bandung, Indonesia",
    salary: "Rp 15.000.000 - 25.000.000",
    type: "Full-time",
    posted: "3 days ago",
    isHot: true,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    location: "Yogyakarta, Indonesia",
    salary: "Rp 18.000.000 - 28.000.000",
    type: "Full-time",
    posted: "5 hours ago",
    isHot: false,
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lowongan Terbaru
            </h2>
            <p className="text-gray-600">
              Kesempatan karir terbaik yang baru saja diposting
            </p>
          </div>
          <Link href="/lowongan" className="hidden md:flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
            Lihat Semua
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <Link key={job.id} href={`/lowongan/${job.id}`}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
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
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2">
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
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={(e) => e.preventDefault()}>
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
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
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {job.posted}
                  </span>
                  <button className="bg-sky-50 text-sky-600 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Lamar Sekarang
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link href="/lowongan" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md inline-flex items-center gap-2">
            Lihat Semua Lowongan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
