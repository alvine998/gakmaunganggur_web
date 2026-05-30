import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CompanyCard from "@/components/cards/CompanyCard";
import PageHero from "@/components/sections/PageHero";
import StatsBar from "@/components/sections/StatsBar";
import { Search, Building2, Users, Briefcase, Star } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    industry: "Technology",
    location: "Jakarta, Indonesia",
    employees: "5,000+",
    jobs: 12,
    rating: 4.8,
    description: "Perusahaan teknologi multinasional yang mengembangkan berbagai produk dan layanan digital inovatif.",
    benefits: ["Asuransi Kesehatan", "Remote Work", "Bonus Tahunan", "Pelatihan"],
    isVerified: true,
    featured: true,
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    industry: "Technology",
    location: "Surabaya, Indonesia",
    employees: "3,000+",
    jobs: 8,
    rating: 4.7,
    description: "Perusahaan teknologi terkemuka yang menyediakan perangkat lunak, layanan cloud, dan solusi produktivitas.",
    benefits: ["Asuransi Kesehatan", "Work Life Balance", "Stock Options", "Flexible Hours"],
    isVerified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    industry: "Technology",
    location: "Bandung, Indonesia",
    employees: "2,500+",
    jobs: 15,
    rating: 4.9,
    description: "Perusahaan inovasi teknologi yang merancang produk elektronik konsumer, perangkat lunak, dan layanan online.",
    benefits: ["Asuransi Premium", "Employee Discount", "Sabbatical Leave", "Wellness Program"],
    isVerified: true,
    featured: false,
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    industry: "E-commerce & Cloud",
    location: "Yogyakarta, Indonesia",
    employees: "4,000+",
    jobs: 20,
    rating: 4.5,
    description: "Perusahaan e-commerce dan cloud computing terbesar di dunia dengan layanan yang beragam.",
    benefits: ["Asuransi Kesehatan", "Tunjangan Pendidikan", "Career Development", "Transportasi"],
    isVerified: true,
    featured: true,
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    industry: "Social Media & Technology",
    location: "Jakarta, Indonesia",
    employees: "1,500+",
    jobs: 6,
    rating: 4.6,
    description: "Perusahaan teknologi yang membangun platform media sosial dan realitas virtual.",
    benefits: ["Asuransi Kesehatan", "Remote First", "Learning Stipend", "Generous PTO"],
    isVerified: true,
    featured: false,
  },
  {
    id: 6,
    name: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    industry: "Entertainment & Streaming",
    location: "Jakarta, Indonesia",
    employees: "800+",
    jobs: 4,
    rating: 4.7,
    description: "Layanan streaming hiburan global yang menawarkan berbagai konten film dan serial TV.",
    benefits: ["Unlimited PTO", "Asuransi Kesehatan", "Stock Options", "Wellness Allowance"],
    isVerified: true,
    featured: false,
  },
  {
    id: 7,
    name: "Gojek",
    logo: "https://logo.clearbit.com/gojek.com",
    industry: "Technology & Super App",
    location: "Jakarta, Indonesia",
    employees: "3,500+",
    jobs: 18,
    rating: 4.4,
    description: "Super app terbesar di Asia Tenggara yang menyediakan berbagai layanan on-demand.",
    benefits: ["Asuransi Kesehatan", "Flexible Working", "Learning Budget", "Team Building"],
    isVerified: true,
    featured: true,
  },
  {
    id: 8,
    name: "Tokopedia",
    logo: "https://logo.clearbit.com/tokopedia.com",
    industry: "E-commerce & Marketplace",
    location: "Jakarta, Indonesia",
    employees: "2,000+",
    jobs: 10,
    rating: 4.3,
    description: "Marketplace terbesar di Indonesia yang menghubungkan jutaan penjual dan pembeli.",
    benefits: ["Asuransi Kesehatan", "Career Path", "Health & Wellness", "Education Support"],
    isVerified: true,
    featured: false,
  },
  {
    id: 9,
    name: "Shopee",
    logo: "https://logo.clearbit.com/shopee.co.id",
    industry: "E-commerce & Marketplace",
    location: "Jakarta, Indonesia",
    employees: "2,200+",
    jobs: 14,
    rating: 4.2,
    description: "Platform e-commerce yang berkembang pesat di Asia Tenggara dengan fitur yang inovatif.",
    benefits: ["Asuransi Kesehatan", "Meal Allowance", "Transportation", "Annual Trip"],
    isVerified: true,
    featured: false,
  },
];

const industries = [
  "Semua Industri",
  "Technology",
  "E-commerce",
  "Finance",
  "Healthcare",
  "Education",
  "Entertainment",
];

const stats = [
  { icon: Building2, value: "500+", label: "Perusahaan", color: "text-sky-600", bg: "bg-sky-100" },
  { icon: Briefcase, value: "10,000+", label: "Lowongan Aktif", color: "text-green-600", bg: "bg-green-100" },
  { icon: Users, value: "50,000+", label: "Talenta Terdaftar", color: "text-sky-600", bg: "bg-sky-100" },
  { icon: Star, value: "4.8", label: "Rating Rata-rata", color: "text-green-600", bg: "bg-green-100" },
];

export default function Perusahaan() {
  return (
    <>
      <Head>
        <title>Perusahaan - KerjaAjaDulu.com</title>
        <meta name="description" content="Jelajahi perusahaan ternama yang membuka lowongan kerja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="perusahaan" />

        <PageHero
          title="Perusahaan Terbaik"
          titleHighlight="Menunggumu"
          description="Jelajahi perusahaan ternama yang sedang mencari talenta terbaik seperti kamu"
          className="bg-gradient-to-br from-sky-50 to-green-50"
        >
          <div className="mt-8 bg-white p-2 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Cari perusahaan..."
                  className="w-full py-3 outline-none text-gray-700"
                />
              </div>
              <button className="gradient-sky text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md">
                Cari
              </button>
            </div>
          </div>
        </PageHero>

        <StatsBar stats={stats} />

        {/* Filter Tabs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center gap-3">
            {industries.map((industry, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-sky-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 border border-gray-200"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Companies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perusahaan Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.filter(c => c.featured).map((company) => (
              <Link key={company.id} href={`/perusahaan/${company.id}`}>
                <CompanyCard company={company} variant="featured" />
              </Link>
            ))}
          </div>
        </section>

        {/* All Companies */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Semua Perusahaan</h2>
            <p className="text-gray-500">{companies.length} perusahaan</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Link key={company.id} href={`/perusahaan/${company.id}`}>
                <CompanyCard company={company} />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perusahaan Kamu?
              </h2>
              <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Pasang lowongan di KerjaAjaDulu.com dan temukan talenta terbaik untuk tim kamu
              </p>
              
              <Link href="/register" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                <Building2 className="w-5 h-5" />
                Pasang Lowongan Sekarang
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
