import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPinned,
  Banknote,
  Clock,
  Building2,
  Users,
  Briefcase,
  Heart,
  Share2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CalendarDays,
  Award,
  Shield,
  Zap,
  ExternalLink,
  Copy,
} from "lucide-react";

const job = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "Google",
  logo: "https://logo.clearbit.com/google.com",
  companyLogo: "https://logo.clearbit.com/google.com",
  location: "Jakarta, Indonesia",
  salary: "Rp 25.000.000 - 35.000.000",
  type: "Full-time",
  category: "Technology",
  posted: "2 hari yang lalu",
  description: `Kami mencari Senior Frontend Developer yang berpengalaman untuk bergabung dengan tim teknologi kami. Anda akan bertanggung jawab dalam mengembangkan dan memelihara aplikasi web yang digunakan oleh jutaan pengguna di seluruh dunia.

Sebagai Senior Frontend Developer, Anda akan bekerja sama dengan tim desain, product manager, dan backend developer untuk menciptakan pengalaman pengguna yang optimal dan inovatif.`,
  requirements: [
    "Pengalaman minimal 5 tahun dalam pengembangan frontend",
    "Menguasai React, Next.js, dan TypeScript",
    "Pengalaman dengan state management (Redux, Zustand, atau Context API)",
    "Memahami prinsip Responsive Design dan Accessibility",
    "Pengalaman dengan testing (Jest, React Testing Library)",
    "Kemampuan berkomunikasi yang baik dalam tim",
  ],
  responsibilities: [
    "Mengembangkan dan memelihara komponen UI yang dapat digunakan kembali",
    "Mengoptimalkan performa aplikasi web",
    "Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX",
    "Melakukan code review dan mentoring junior developer",
    "Menulis dokumentasi teknis yang jelas",
  ],
  benefits: [
    "Asuransi Kesehatan Premium",
    "Work From Home Hybrid",
    "Bonus Tahunan",
    "Pelatihan & Sertifikasi",
    "Stock Options",
    "Flexible Working Hours",
  ],
  tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  isHot: true,
  isUrgent: false,
  applicants: 128,
  views: 1250,
  expires: "30 Juni 2024",
  companyInfo: {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    industry: "Technology",
    employees: "5,000+",
    location: "Jakarta, Indonesia",
    description: "Perusahaan teknologi multinasional yang mengembangkan berbagai produk dan layanan digital inovatif.",
    founded: "1998",
    website: "https://google.com",
  },
};

const similarJobs = [
  {
    id: 2,
    title: "Frontend Developer",
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 18.000.000 - 28.000.000",
    type: "Full-time",
    posted: "1 hari yang lalu",
  },
  {
    id: 3,
    title: "React Developer",
    company: "Tokopedia",
    logo: "https://logo.clearbit.com/tokopedia.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 15.000.000 - 25.000.000",
    type: "Full-time",
    posted: "3 hari yang lalu",
  },
];

export default function DetailLowongan() {
  return (
    <>
      <Head>
        <title>{job.title} - KerjaAjaDulu.com</title>
        <meta name="description" content={`${job.title} di ${job.company} - KerjaAjaDulu.com`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="lowongan" />

        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-sky-600 transition-colors">Beranda</Link>
              <span>/</span>
              <Link href="/lowongan" className="hover:text-sky-600 transition-colors">Lowongan</Link>
              <span>/</span>
              <span className="text-gray-900">{job.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Job Details */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                      {job.isHot && (
                        <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-md text-xs font-medium flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Hot
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 flex items-center gap-1 mb-3">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </p>
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
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.posted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="bg-sky-50 text-sky-600 px-3 py-1 rounded-md text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Link href="/lamar" className="gradient-sky text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Lamar Sekarang
                    </Link>
                    <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 ml-auto">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.applicants} pelamar
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {job.views} dilihat
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Deskripsi Pekerjaan</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Persyaratan</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Tanggung Jawab</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <ArrowRight className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Benefit</h2>
                <div className="grid grid-cols-2 gap-3">
                  {job.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-green-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              {/* Job Summary */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Ringkasan Lowongan</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CalendarDays className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Tanggal Posting</p>
                      <p className="font-medium text-gray-900">{job.posted}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Batas Lamaran</p>
                      <p className="font-medium text-gray-900">{job.expires}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPinned className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Lokasi</p>
                      <p className="font-medium text-gray-900">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Banknote className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Gaji</p>
                      <p className="font-medium text-gray-900">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-gray-500">Tipe Pekerjaan</p>
                      <p className="font-medium text-gray-900">{job.type}</p>
                    </div>
                  </div>
                </div>

                <Link href="/lamar" className="w-full gradient-sky text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md mt-6 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Lamar Sekarang
                </Link>

                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all mt-3 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Simpan Lowongan
                </button>
              </div>

              {/* Company Info */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Tentang Perusahaan</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img
                      src={job.companyInfo.logo}
                      alt={job.companyInfo.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{job.companyInfo.name}</h4>
                      <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    </div>
                    <p className="text-sm text-gray-500">{job.companyInfo.industry}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{job.companyInfo.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{job.companyInfo.employees} karyawan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>Didirikan {job.companyInfo.founded}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <a href={job.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                      {job.companyInfo.website}
                    </a>
                  </div>
                </div>
                <Link
                  href={`/perusahaan/1`}
                  className="w-full bg-sky-50 text-sky-600 py-3 rounded-xl font-semibold hover:bg-sky-100 transition-all mt-4 flex items-center justify-center gap-2"
                >
                  Lihat Profil Perusahaan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Jobs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lowongan Serupa</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {similarJobs.map((similarJob) => (
              <Link
                key={similarJob.id}
                href={`/lowongan/${similarJob.id}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <img
                      src={similarJob.logo}
                      alt={similarJob.company}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {similarJob.title}
                    </h3>
                    <p className="text-gray-600">{similarJob.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPinned className="w-4 h-4" />
                        {similarJob.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Banknote className="w-4 h-4" />
                        {similarJob.salary}
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
                        {similarJob.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {similarJob.posted}
                  </span>
                  <span className="text-sky-600 font-medium text-sm flex items-center gap-1">
                    Lamar
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Send(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
