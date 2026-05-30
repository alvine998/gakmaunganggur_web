import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import Pagination from "@/components/ui/Pagination";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  authorImage: string;
  featured?: boolean;
}

const categories = ["Semua", "Karir", "Tips", "Teknologi", "Bisnis", "Pendidikan"];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips Sukses Wawancara Kerja untuk Pemula",
    excerpt: "Pelajari tips dan trik terbaik untuk menghadapi wawancara kerja dengan percaya diri dan meningkatkan peluangmu diterima.",
    date: "28 Mei 2026",
    category: "Karir",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop",
    author: "Ahmad Fauzi",
    authorImage: "https://i.pravatar.cc/100?img=11",
    featured: true,
  },
  {
    id: 2,
    title: "Membangun Personal Branding di LinkedIn",
    excerpt: "Cara membangun profil LinkedIn yang menarik perhatian recruiter dan membuka peluang karir baru.",
    date: "25 Mei 2026",
    category: "Karir",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop",
    author: "Siti Nurhaliza",
    authorImage: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 3,
    title: "Tren Teknologi 2026: Skill yang Paling Dibutuhkan",
    excerpt: "Identifikasi skill teknologi terbaru yang paling dicari oleh perusahaan di tahun 2026.",
    date: "22 Mei 2026",
    category: "Teknologi",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    author: "Budi Santoso",
    authorImage: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 4,
    title: "Cara Menulis CV yang ATS-Friendly",
    excerpt: "Panduan lengkap menulis CV yang lolos sistem ATS dan menarik perhatian HRD.",
    date: "20 Mei 2026",
    category: "Tips",
    readTime: "8 menit",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop",
    author: "Diana Putri",
    authorImage: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 5,
    title: "Memulai Bisnis Startup dari Nol",
    excerpt: "Langkah-langkah praktis untuk memulai bisnis startup impianmu dari nol.",
    date: "18 Mei 2026",
    category: "Bisnis",
    readTime: "10 menit",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    author: "Ahmad Fauzi",
    authorImage: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 6,
    title: "Belajar Coding untuk Pemula: Panduan Lengkap",
    excerpt: "Mulai perjalananmu di dunia pemrograman dengan panduan langkah demi langkah.",
    date: "15 Mei 2026",
    category: "Pendidikan",
    readTime: "12 menit",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    author: "Budi Santoso",
    authorImage: "https://i.pravatar.cc/100?img=12",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPosts =
    activeCategory === "Semua"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      <Head>
        <title>Blog - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Baca artikel terbaru seputar karir, tips kerja, dan tren teknologi di KerjaAjaDulu.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="blog" />

        <PageHero
          badge="Blog"
          badgeIcon={BookOpen}
          title="Blog &"
          titleHighlight="Artikel"
          description="Temukan artikel terbaru seputar tips karir, tren teknologi, dan panduan untuk pengembangan diri."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Categories Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-sky-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && activeCategory === "Semua" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-sky-500" />
              <h2 className="text-xl font-bold text-gray-900">Artikel Unggulan</h2>
            </div>
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-sky-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {featuredPost.author}
                        </span>
                      </div>
                      <span className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .filter((post) => !(activeCategory === "Semua" && post.featured))
              .map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-sky-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tidak ada artikel
              </h3>
              <p className="text-gray-500">
                Belum ada artikel untuk kategori ini.
              </p>
            </div>
          )}

          <Pagination currentPage={1} totalPages={3} />
        </section>

        <Footer />
      </div>
    </>
  );
}
