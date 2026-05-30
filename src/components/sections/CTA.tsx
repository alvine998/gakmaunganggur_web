import Link from "next/link";
import { Search, Briefcase } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Memulai Karir Impianmu?
            </h2>
            <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pencari kerja yang telah menemukan pekerjaan impian mereka
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Mulai Cari Kerja
              </Link>
              <Link href="/register" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Briefcase className="w-5 h-5" />
                Untuk Perusahaan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
