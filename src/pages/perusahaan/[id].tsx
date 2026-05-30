import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/cards/JobCard";
import {
  MapPin,
  Users,
  Briefcase,
  Star,
  CheckCircle2,
  Globe,
  Phone,
  Mail,
  CalendarDays,
  Award,
  ExternalLink,
  Building2,
} from "lucide-react";

const company = {
  id: 1,
  name: "Google",
  logo: "https://logo.clearbit.com/google.com",
  industry: "Technology",
  location: "Jakarta, Indonesia",
  employees: "5,000+",
  rating: 4.8,
  description: `Google adalah perusahaan teknologi multinasional yang berpusat di Mountain View, California. Kami mengembangkan berbagai produk dan layanan digital inovatif yang digunakan oleh miliaran orang di seluruh dunia.

Sebagai pemimpin dalam teknologi pencarian, cloud computing, dan artificial intelligence, Google terus berinovasi untuk menghubungkan informasi dan membuatnya dapat diakses oleh semua orang.`,
  mission: "Mengorganisasi informasi di dunia dan membuatnya dapat diakses dan bermanfaat bagi semua orang.",
  founded: "1998",
  website: "https://google.com",
  phone: "+62 21 1234 5678",
  email: "hr@google.com",
  benefits: [
    "Asuransi Kesehatan Premium",
    "Work From Home Hybrid",
    "Bonus Tahunan",
    "Pelatihan & Sertifikasi",
    "Stock Options",
    "Flexible Working Hours",
    "Free Meals",
    "Gym & Wellness",
  ],
  culture: [
    "Inovasi tanpa batas",
    "Kerja tim yang kolaboratif",
    "Work-life balance",
    "Continuous learning",
  ],
  jobs: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      logo: "https://logo.clearbit.com/google.com",
      location: "Jakarta, Indonesia",
      salary: "Rp 25.000.000 - 35.000.000",
      type: "Full-time",
      posted: "2 hari yang lalu",
      description: "Mengembangkan aplikasi web menggunakan React dan Next.js.",
      tags: ["React", "Next.js", "TypeScript"],
      isHot: true,
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Google",
      logo: "https://logo.clearbit.com/google.com",
      location: "Jakarta, Indonesia",
      salary: "Rp 22.000.000 - 32.000.000",
      type: "Full-time",
      posted: "3 hari yang lalu",
      description: "Mengembangkan layanan backend yang scalable dan reliable.",
      tags: ["Go", "gRPC", "Cloud"],
      isHot: false,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Google",
      logo: "https://logo.clearbit.com/google.com",
      location: "Jakarta, Indonesia",
      salary: "Rp 20.000.000 - 30.000.000",
      type: "Full-time",
      posted: "1 minggu yang lalu",
      description: "Menganalisis data untuk menghasilkan insights bisnis.",
      tags: ["Python", "ML", "SQL"],
      isHot: false,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Google",
      logo: "https://logo.clearbit.com/google.com",
      location: "Jakarta, Indonesia",
      salary: "Rp 25.000.000 - 35.000.000",
      type: "Full-time",
      posted: "2 minggu yang lalu",
      description: "Memimpin pengembangan produk digital dari konsep hingga peluncuran.",
      tags: ["Product Strategy", "Agile", "Analytics"],
      isHot: false,
    },
  ],
};

export default function DetailPerusahaan() {
  return (
    <>
      <Head>
        <title>{company.name} - KerjaAjaDulu.com</title>
        <meta name="description" content={`Profil ${company.name} - KerjaAjaDulu.com`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="perusahaan" />

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-sky-600 transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/perusahaan" className="hover:text-sky-600 transition-colors">Perusahaan</Link>
              <span>/</span>
              <span className="text-gray-900">{company.name}</span>
            </div>
          </div>
        </div>

        {/* Company Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                  <CheckCircle2 className="w-6 h-6 text-sky-500" />
                </div>
                <p className="text-gray-600 flex items-center gap-1 mb-4">
                  <Building2 className="w-4 h-4" />
                  {company.industry}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {company.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {company.employees} karyawan
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {company.rating} rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {company.jobs.length} lowongan
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-50 text-sky-600 px-4 py-2 rounded-xl font-medium hover:bg-sky-100 transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Website
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Hubungi
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* About */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Tentang Perusahaan</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {company.description}
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Misi Kami</h2>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;{company.mission}&rdquo;
                </p>
              </div>

              {/* Culture */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Budaya Perusahaan</h2>
                <div className="grid grid-cols-2 gap-3">
                  {company.culture.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-sky-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jobs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Lowongan Tersedia ({company.jobs.length})
                </h2>
                <div className="space-y-4">
                  {company.jobs.map((job) => (
                    <Link key={job.id} href={`/lowongan/${job.id}`}>
                      <JobCard job={job} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              {/* Company Info */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Informasi Perusahaan</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Industri</p>
                      <p className="font-medium text-gray-900">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Lokasi</p>
                      <p className="font-medium text-gray-900">{company.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Jumlah Karyawan</p>
                      <p className="font-medium text-gray-900">{company.employees}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Didirikan</p>
                      <p className="font-medium text-gray-900">{company.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Website</p>
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 hover:underline">
                        {company.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Telepon</p>
                      <p className="font-medium text-gray-900">{company.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">{company.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Benefit & Fasilitas</h3>
                <div className="space-y-3">
                  {company.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
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
