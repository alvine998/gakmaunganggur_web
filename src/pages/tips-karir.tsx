import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  Briefcase,
  FileText,
  Users,
  Megaphone,
  DollarSign,
  Scale,
  Tag,
  Mail,
  TrendingUp,
  Star,
  Bookmark,
} from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  image: string;
}

interface Category {
  icon: React.ElementType;
  name: string;
  count: number;
  color: string;
  bg: string;
}

const featuredArticle = {
  title: "10 Tips Wawancara Kerja yang Wajib Kamu Ketahui di Tahun 2024",
  excerpt:
    "Persiapan yang matang adalah kunci sukses dalam wawancara kerja. Dari persiapan mental hingga teknik menjawab pertanyaan sulit, artikel ini akan membantu kamu menghadapi wawancara kerja dengan percaya diri dan meraih pekerjaan impianmu.",
  category: "Interview Tips",
  readTime: "8 menit",
  date: "25 Mei 2024",
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
};

const categories: Category[] = [
  { icon: Briefcase, name: "Interview Tips", count: 12, color: "text-sky-600", bg: "bg-sky-100" },
  { icon: FileText, name: "Resume Tips", count: 8, color: "text-green-600", bg: "bg-green-100" },
  { icon: Users, name: "Networking", count: 10, color: "text-sky-600", bg: "bg-sky-100" },
  { icon: Megaphone, name: "Personal Branding", count: 6, color: "text-green-600", bg: "bg-green-100" },
  { icon: DollarSign, name: "Salary Negotiation", count: 5, color: "text-sky-600", bg: "bg-sky-100" },
  { icon: Scale, name: "Work Life Balance", count: 7, color: "text-green-600", bg: "bg-green-100" },
];

const articles: Article[] = [
  {
    id: 1,
    title: "Cara Membuat CV yang ATS-Friendly dan Lolos Screening",
    excerpt: "Pelajari tips dan trik untuk membuat CV yang dapat terbaca oleh sistem ATS dan meningkatkan peluang kamu dipanggil wawancara.",
    category: "Resume Tips",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "6 menit",
    date: "24 Mei 2024",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Membangun Personal Branding di LinkedIn untuk Pencari Kerja",
    excerpt: "Optimasi profil LinkedIn kamu untuk menarik perhatian recruiter dan meningkatkan peluang mendapatkan tawaran kerja.",
    category: "Personal Branding",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "5 menit",
    date: "23 Mei 2024",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Tips Networking Efektif untuk Fresh Graduate",
    excerpt: "Jaringan profesional yang kuat adalah kunci membuka peluang karir. Pelajari cara membangun dan memelihara jaringan profesional.",
    category: "Networking",
    categoryColor: "bg-sky-100 text-sky-700",
    readTime: "7 menit",
    date: "22 Mei 2024",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Strategi Negosiasi Gaji yang Sukses untuk Pemula",
    excerpt: "Jangan takut untuk negosiasi gaji! Pelajari strategi dan teknik yang efektif untuk mendapatkan gaji yang sesuai dengan kemampuanmu.",
    category: "Salary Negotiation",
    categoryColor: "bg-sky-100 text-sky-700",
    readTime: "6 menit",
    date: "21 Mei 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Menjaga Work-Life Balance di Era Remote Working",
    excerpt: "Temukan keseimbangan antara pekerjaan dan kehidupan pribadi yang sehat, terutama saat bekerja dari rumah.",
    category: "Work Life Balance",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "5 menit",
    date: "20 Mei 2024",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Menghadapi Pertasan Wawancara Kerja yang Sulit",
    excerpt: "Siapkan diri menghadapi pertanyaan wawancara yang paling menantang dengan jawaban yang terstruktur dan meyakinkan.",
    category: "Interview Tips",
    categoryColor: "bg-sky-100 text-sky-700",
    readTime: "7 menit",
    date: "19 Mei 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Cara Menulis Cover Letter yang Menarik Perhatian HRD",
    excerpt: "Cover letter yang baik bisa membuatmu menonjol dari kandidat lain. Pelajari cara menulisnya dengan efektif.",
    category: "Resume Tips",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "4 menit",
    date: "18 Mei 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Membangun Personal Branding Melalui Portofolio Online",
    excerpt: "Portofolio online yang profesional adalah aset berharga dalam mencari kerja. Pelajari cara membuat dan mengoptimasinya.",
    category: "Personal Branding",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "6 menit",
    date: "17 Mei 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
];

const stats = [
  { value: "100+", label: "Artikel Karir" },
  { value: "50K+", label: "Pembaca Bulanan" },
  { value: "25", label: "Kategori" },
  { value: "4.8", label: "Rating Rata-rata" },
];

export default function TipsKarir() {
  return (
    <>
      <Head>
        <title>Tips Karir - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Temukan tips karir terbaik untuk membangun karir impianmu. Dari tips wawancara, CV, networking, hingga work-life balance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Tips Karir
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tips Karir untuk{" "}
                <span className="text-sky-600">Kesuksesanmu</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Kumpulan tips dan panduan karir terbaik untuk membantu kamu
                membangun karir impianmu. Dari wawancara kerja hingga
                pengembangan profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari tips karir..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Artikel Unggulan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Baca artikel pilihan yang paling banyak dibaca oleh pencari kerja
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Unggulan
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold group"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kategori Tips Karir
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan tips karir berdasarkan kategori yang kamu butuhkan
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={index}
                    href="#"
                    className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div
                      className={`w-14 h-14 ${category.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-7 h-7 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{category.count} artikel</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Artikel Terbaru
                </h2>
                <p className="text-gray-600">
                  Baca artikel tips karir terbaru untuk memperluas wawasanmu
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg font-medium text-sm">
                  Semua
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
                  Terbaru
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg font-medium text-sm transition-colors">
                  Populer
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href="#"
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-lg flex items-center justify-center transition-colors">
                      <Bookmark className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor} mb-3`}
                    >
                      {article.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Lihat Semua Artikel
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Mail className="w-4 h-4" />
                    Newsletter
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Dapatkan Tips Karir Terbaru
                  </h2>
                  <p className="text-sky-100 text-lg">
                    Berlangganan newsletter kami dan dapatkan tips karir terbaru
                    langsung di inbox-mu setiap minggu.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="Masukkan email kamu"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                    <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      Berlangganan
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-4 text-center">
                    Kami menghargai privasimu. Unsubscribe kapan saja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Contributors */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Penulis
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Para ahli karir yang berkontribusi dalam artikel kami
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Rina Wijaya", role: "HR Manager", articles: 24, avatar: "https://i.pravatar.cc/150?img=1" },
                { name: "Dimas Pratama", role: "Career Coach", articles: 18, avatar: "https://i.pravatar.cc/150?img=3" },
                { name: "Anisa Rahma", role: "Recruiter", articles: 15, avatar: "https://i.pravatar.cc/150?img=5" },
                { name: "Fajar Nugroho", role: "Talent Acquisition", articles: 12, avatar: "https://i.pravatar.cc/150?img=8" },
              ].map((contributor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all text-center"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-900 mb-1">{contributor.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{contributor.role}</p>
                  <div className="flex items-center justify-center gap-1 text-sky-600">
                    <Star className="w-4 h-4 fill-sky-600" />
                    <span className="font-semibold text-sm">{contributor.articles} artikel</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Topik Populer
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Topik yang paling banyak dicari oleh pencari kerja
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {[
                "Wawancara Kerja",
                "CV ATS",
                "Remote Working",
                "Fresh Graduate",
                "Negosiasi Gaji",
                "LinkedIn",
                "Soft Skills",
                "Career Switch",
                "Freelancing",
                "Tech Industry",
                "Leadership",
                "Work-Life Balance",
              ].map((topic, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-white border border-gray-200 hover:border-sky-300 hover:bg-sky-50 text-gray-700 hover:text-sky-700 px-5 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Siap Memulai Karir Impianmu?
                </h2>
                <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                  Temukan lowongan kerja terbaik dan bangun karir impianmu
                  bersama KerjaAjaDulu.com
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/lowongan"
                    className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Cari Lowongan
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/register"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Daftar Gratis
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
