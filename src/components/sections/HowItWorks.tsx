import Link from "next/link";
import {
  ChevronRight,
  UserPlus,
  SearchCode,
  PartyPopper,
} from "lucide-react";

const howItWorks = [
  {
    step: "01",
    title: "Buat Akun",
    description: "Daftar secara gratis dan lengkapi profil kamu dengan informasi terbaru",
    icon: UserPlus,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    href: "/register",
  },
  {
    step: "02",
    title: "Cari Lowongan",
    description: "Jelajahi ribuan lowongan kerja dari perusahaan ternama di Indonesia",
    icon: SearchCode,
    color: "bg-green-100",
    iconColor: "text-green-600",
    href: "/lowongan",
  },
  {
    step: "03",
    title: "Lamar & Diterima",
    description: "Kirim lamaranmu dan mulai karir impianmu di perusahaan idaman",
    icon: PartyPopper,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
    href: "/lowongan",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Cara Kerjanya?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proses pencarian kerja yang mudah dan efektif hanya dalam 3 langkah
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.href} className="relative">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all h-full cursor-pointer">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  <div className="text-sm font-bold text-sky-500 mb-2">Langkah {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
