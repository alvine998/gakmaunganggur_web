import Link from "next/link";
import {
  Search,
  MapPin,
  Briefcase,
  ChevronRight,
  Rocket,
  Zap,
} from "lucide-react";

const latestJobs = [
  { title: "Frontend Developer", company: "Google", color: "bg-red-100 text-red-600" },
  { title: "UI/UX Designer", company: "Apple", color: "bg-gray-100 text-gray-600" },
  { title: "Data Analyst", company: "Microsoft", color: "bg-blue-100 text-blue-600" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              Platform #1 Lowongan Kerja Indonesia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Wujudkan Karir{" "}
              <span className="text-transparent bg-clip-text gradient-hero">
                Impianmu
              </span>{" "}
              Bersama Kami
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Temukan peluang karir terbaik dari ribuan perusahaan ternama. 
              KerjaAjaDulu.com membantu kamu menghubungkan bakat dengan peluang.
            </p>
            
            {/* Search Box */}
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Cari pekerjaan atau skill..."
                    className="w-full py-3 outline-none text-gray-700"
                  />
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 border-t sm:border-t-0 sm:border-l border-gray-100">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Lokasi"
                    className="w-full py-3 outline-none text-gray-700"
                  />
                </div>
                <Link href="/lowongan" className="gradient-sky text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md">
                  Cari
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                10,000+ Lowongan Aktif
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                500+ Perusahaan
              </span>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lowongan Terbaru</h3>
                    <p className="text-sm text-gray-500">Diperbarui hari ini</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {latestJobs.map((job, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${job.color} font-bold`}>
                        {job.company[0]}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{job.title}</p>
                        <p className="text-xs text-gray-500">{job.company}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold animate-bounce flex items-center gap-2">
              <Zap className="w-4 h-4" />
              500+ Lowongan Baru!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-sky-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-sky-300 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-xs font-semibold">1,234</p>
                  <p className="text-xs text-gray-500">sedang aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
