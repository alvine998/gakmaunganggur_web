import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/cards/JobCard";
import FilterSidebar from "@/components/ui/FilterSidebar";
import Pagination from "@/components/ui/Pagination";
import { Search, MapPin, Grid3X3, List } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 25.000.000 - 35.000.000",
    type: "Full-time",
    category: "Technology",
    posted: "2 hari yang lalu",
    description: "Mengembangkan dan memelihara aplikasi web menggunakan React, Next.js, dan teknologi modern lainnya.",
    tags: ["React", "Next.js", "TypeScript"],
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
    category: "Technology",
    posted: "1 hari yang lalu",
    description: "Memimpin pengembangan produk digital dari konsep hingga peluncuran.",
    tags: ["Product Strategy", "Agile", "UX"],
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
    category: "Design",
    posted: "3 hari yang lalu",
    description: "Merancang pengalaman pengguna yang intuitif dan menarik untuk produk digital.",
    tags: ["Figma", "UI/UX", "Prototyping"],
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
    category: "Technology",
    posted: "5 jam yang lalu",
    description: "Menganalisis data kompleks untuk menghasilkan insights yang dapat ditindaklanjuti.",
    tags: ["Python", "Machine Learning", "SQL"],
    isHot: false,
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    company: "Tokopedia",
    logo: "https://logo.clearbit.com/tokopedia.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 10.000.000 - 18.000.000",
    type: "Full-time",
    category: "Marketing",
    posted: "2 hari yang lalu",
    description: "Mengelola strategi pemasaran digital termasuk SEO, SEM, dan media sosial.",
    tags: ["SEO", "Google Ads", "Social Media"],
    isHot: false,
  },
  {
    id: 6,
    title: "Financial Analyst",
    company: "Bank Mandiri",
    logo: "https://logo.clearbit.com/mandiri.co.id",
    location: "Jakarta, Indonesia",
    salary: "Rp 12.000.000 - 20.000.000",
    type: "Full-time",
    category: "Finance",
    posted: "4 hari yang lalu",
    description: "Melakukan analisis keuangan dan pelaporan untuk mendukung pengambilan keputusan bisnis.",
    tags: ["Financial Modeling", "Excel", "SQL"],
    isHot: false,
  },
  {
    id: 7,
    title: "Backend Developer",
    company: "Gojek",
    logo: "https://logo.clearbit.com/gojek.com",
    location: "Jakarta, Indonesia",
    salary: "Rp 22.000.000 - 32.000.000",
    type: "Full-time",
    category: "Technology",
    posted: "1 hari yang lalu",
    description: "Mengembangkan dan memelihara layanan backend yang scalable dan reliable.",
    tags: ["Go", "Microservices", "AWS"],
    isHot: true,
  },
  {
    id: 8,
    title: "Content Writer",
    company: "Detik.com",
    logo: "https://logo.clearbit.com/detik.com",
    location: "Remote",
    salary: "Rp 5.000.000 - 10.000.000",
    type: "Part-time",
    category: "Marketing",
    posted: "6 hari yang lalu",
    description: "Menulis konten berkualitas tinggi untuk berbagai platform digital.",
    tags: ["Copywriting", "SEO", "Content Strategy"],
    isHot: false,
  },
];

const filters = [
  {
    title: "Kategori",
    options: ["Semua Kategori", "Technology", "Marketing", "Finance", "Design", "Healthcare", "Education"],
    defaultChecked: [0],
  },
  {
    title: "Lokasi",
    options: ["Semua Lokasi", "Jakarta", "Surabaya", "Bandung", "Yogyakarta", "Remote"],
    defaultChecked: [0],
  },
  {
    title: "Tipe Pekerjaan",
    options: ["Semua Tipe", "Full-time", "Part-time", "Freelance", "Contract"],
    defaultChecked: [0],
  },
  {
    title: "Rentang Gaji",
    options: ["< Rp 5.000.000", "Rp 5.000.000 - 15.000.000", "Rp 15.000.000 - 30.000.000", "> Rp 30.000.000"],
  },
];

export default function Lowongan() {
  return (
    <>
      <Head>
        <title>Lowongan Kerja - KerjaAjaDulu.com</title>
        <meta name="description" content="Temukan lowongan kerja terbaik dari perusahaan ternama di Indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="lowongan" />

        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Lowongan Kerja</h1>
            <p className="text-gray-600">Temukan pekerjaan impianmu dari ribuan lowongan yang tersedia</p>
            
            {/* Search Bar */}
            <div className="mt-6 bg-white p-2 rounded-2xl shadow-lg border border-gray-100 max-w-4xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Cari pekerjaan, skill, atau perusahaan..."
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
                <button className="gradient-sky text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar filters={filters} />

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold text-gray-900">{jobs.length}</span> lowongan
                </p>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-sm text-gray-500">Urutkan:</span>
                    <select className="text-sm font-medium text-gray-700 bg-transparent border-none outline-none cursor-pointer">
                      <option>Terbaru</option>
                      <option>Terlama</option>
                      <option>Gaji Tertinggi</option>
                      <option>Gaji Terendah</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                    <button className="p-2 bg-sky-50 text-sky-600 rounded-md">
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <Link key={job.id} href={`/lowongan/${job.id}`}>
                    <JobCard job={job} />
                  </Link>
                ))}
              </div>

              <Pagination currentPage={1} totalPages={24} />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
