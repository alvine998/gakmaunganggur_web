import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Timeline from "@/components/ui/Timeline";
import TeamGrid from "@/components/ui/TeamGrid";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Shield,
  Lightbulb,
  Zap,
  Rocket,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description: "Menghubungkan talenta terbaik dengan peluang karir yang tepat, menciptakan masa depan yang lebih baik untuk semua.",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    icon: Eye,
    title: "Visi Kami",
    description: "Menjadi platform lowongan kerja nomor satu di Indonesia yang dipercaya oleh jutaan pencari kerja dan perusahaan.",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Nilai Kami",
    description: "Integritas, inovasi, dan inklusivitas adalah pondasi dalam setiap langkah yang kami ambil.",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Terpercaya",
    description: "Semua perusahaan terverifikasi dan lowongan dijamin asli.",
  },
  {
    icon: Zap,
    title: "Cepat & Mudah",
    description: "Proses pencarian kerja yang efisien hanya dalam beberapa langkah.",
  },
  {
    icon: Users,
    title: "Komunitas Besar",
    description: "Bergabung dengan komunitas pencari kerja terbesar di Indonesia.",
  },
  {
    icon: Award,
    title: "Berkualitas",
    description: "Lowongan dari perusahaan ternama dengan gaji kompetitif.",
  },
  {
    icon: TrendingUp,
    title: "Berkembang",
    description: "Fitur terus ditingkatkan untuk pengalaman terbaik.",
  },
  {
    icon: Lightbulb,
    title: "Inovatif",
    description: "Teknologi AI untuk rekomendasi pekerjaan yang akurat.",
  },
];

const timelineData = [
  {
    year: "2020",
    title: "Pendirian",
    description: "KerjaAjaDulu.com didirikan dengan visi mengatasi pengangguran di Indonesia.",
  },
  {
    year: "2021",
    title: "Pertumbuhan Pesat",
    description: "Mencapai 100,000 pengguna aktif dan 500 mitra perusahaan.",
  },
  {
    year: "2022",
    title: "Ekspansi",
    description: "Membuka kantor di Surabaya dan Bandung untuk melayani lebih banyak kota.",
  },
  {
    year: "2023",
    title: "Inovasi AI",
    description: "Meluncurkan fitur AI-powered job matching untuk rekomendasi yang lebih akurat.",
  },
  {
    year: "2024",
    title: "Saat Ini",
    description: "Melayani 50,000+ pencari kerja dan 500+ perusahaan mitra.",
  },
];

const team = [
  {
    name: "Ahmad Fauzi",
    role: "CEO & Co-founder",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Siti Nurhaliza",
    role: "CTO & Co-founder",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Budi Santoso",
    role: "Head of Product",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Diana Putri",
    role: "Head of Marketing",
    image: "https://i.pravatar.cc/300?img=9",
  },
];

const stats = [
  { value: "50,000+", label: "Pengguna Aktif" },
  { value: "500+", label: "Perusahaan Mitra" },
  { value: "10,000+", label: "Lowongan Tersedia" },
  { value: "95%", label: "Tingkat Kepuasan" },
];

export default function TentangKami() {
  return (
    <>
      <Head>
        <title>Tentang Kami - KerjaAjaDulu.com</title>
        <meta name="description" content="Kenali lebih dekat KerjaAjaDulu.com, platform lowongan kerja terpercaya di Indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar activePage="tentang" />

        <PageHero
          badge="Tentang Kami"
          badgeIcon={Rocket}
          title="Kami Ada untuk"
          titleHighlight="Membantu Kamu"
          description="KerjaAjaDulu.com hadir untuk menjembatani antara pencari kerja berkualitas dengan perusahaan terbaik di Indonesia."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fondasi Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tiga pilar utama yang memandu setiap langkah perjalanan kami
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all text-center"
                  >
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Alasan mengapa ribuan pencari kerja dan perusahaan mempercayai KerjaAjaDulu.com
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all group"
                  >
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perjalanan Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Lihat bagaimana KerjaAjaDulu.com berkembang dari waktu ke waktu
              </p>
            </div>
            
            <Timeline items={timelineData} />
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tim Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Orang-orang hebat di balik KerjaAjaDulu.com
              </p>
            </div>
            
            <TeamGrid members={team} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Bergabung Bersama Kami
                </h2>
                <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                  Jadilah bagian dari perubahan positif di dunia kerja Indonesia
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/lowongan" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    Cari Lowongan
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/perusahaan" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                    Untuk Perusahaan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
