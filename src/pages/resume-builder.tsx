import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FileText,
  Check,
  Download,
  Palette,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Layout,
  Clock,
  Star,
  Quote,
  ChevronRight,
  LayoutTemplate,
  Layers,
  Pencil,
  Rocket,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Template {
  id: number;
  name: string;
  description: string;
  preview: string;
  color: string;
  popular?: boolean;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

const features: Feature[] = [
  {
    icon: LayoutTemplate,
    title: "ATS-Friendly Templates",
    description:
      "Template kami dirancang untuk lolos sistem Applicant Tracking System (ATS) yang digunakan oleh perusahaan besar.",
  },
  {
    icon: Pencil,
    title: "Mudah Digunakan",
    description:
      "Tidak perlu keahlian desain. Cukup isi informasi dan template akan otomatis terlihat profesional.",
  },
  {
    icon: Download,
    title: "Download PDF",
    description:
      "Unduh resume dalam format PDF yang siap dikirim ke perusahaan tujuanmu.",
  },
  {
    icon: Palette,
    title: "Desain Profesional",
    description:
      "Pilih dari berbagai template profesional yang dirancang oleh ahli desain dan HR.",
  },
];

const templates: Template[] = [
  {
    id: 1,
    name: "Professional",
    description: "Template klasik dan elegan untuk industri korporat dan bisnis.",
    preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    color: "from-sky-400 to-sky-600",
    popular: true,
  },
  {
    id: 2,
    name: "Modern",
    description: "Template modern dengan sentuhan warna untuk industri kreatif.",
    preview: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=500&fit=crop",
    color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    name: "Minimalist",
    description: "Template minimalis yang fokus pada konten tanpa elemen berlebih.",
    preview: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop",
    color: "from-sky-400 to-green-500",
  },
  {
    id: 4,
    name: "Creative",
    description: "Template kreatif untuk desainer, penulis, dan profesional seni.",
    preview: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=500&fit=crop",
    color: "from-pink-400 to-purple-500",
  },
];

const steps: Step[] = [
  {
    number: 1,
    title: "Pilih Template",
    description:
      "Pilih template yang sesuai dengan industri dan gaya kariermu dari koleksi template kami.",
    icon: Layout,
  },
  {
    number: 2,
    title: "Isi Informasi",
    description:
      "Masukkan informasi pribadi, pengalaman kerja, pendidikan, dan skills kamu.",
    icon: Pencil,
  },
  {
    number: 3,
    title: "Preview & Edit",
    description:
      "Lihat pratinjau resume kamu dan lakukan penyesuaian yang diperlukan.",
    icon: Layers,
  },
  {
    number: 4,
    title: "Download & Kirim",
    description:
      "Unduh resume dalam format PDF dan kirim ke perusahaan tujuanmu.",
    icon: Download,
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rizky Pratama",
    role: "Software Engineer di Tokopedia",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    content:
      "Resume Builder dari KerjaAjaDulu.com sangat membantu saya membuat CV yang profesional. Dalam waktu singkat, saya sudah punya CV yang siap dikirim ke perusahaan impian!",
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Marketing Manager di Shopee",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    content:
      "Template yang disediakan sangat beragam dan profesional. Saya berhasil mendapatkan panggilan wawancara setelah menggunakan CV dari platform ini.",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    role: "Data Analyst di Gojek",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    content:
      "Fitur ATS-friendly sangat membantu CV saya lolos screening awal. Sangat recommended untuk fresh graduate yang sedang mencari kerja!",
  },
];

const stats = [
  { value: "50K+", label: "Resume Dibuat" },
  { value: "15+", label: "Template Profesional" },
  { value: "95%", label: "Tingkat Kepuasan" },
  { value: "100%", label: "Gratis Digunakan" },
];

export default function ResumeBuilder() {
  return (
    <>
      <Head>
        <title>Resume Builder - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Buat resume profesional secara gratis dengan Resume Builder KerjaAjaDulu.com. Template ATS-friendly, mudah digunakan, dan siap download PDF."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Resume Builder
                </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Buat Resume{" "}
                  <span className="text-sky-600">Profesional</span>{" "}
                  dalam Hitungan Menit
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Buat resume yang menarik dan lolos ATS dengan mudah. Pilih
                  dari berbagai template profesional, isi informasi kamu, dan
                  download PDF-nya secara gratis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#"
                    className="bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Mulai Buat Resume
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#templates"
                    className="bg-white border-2 border-gray-200 hover:border-sky-300 text-gray-700 hover:text-sky-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Lihat Template
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    100% Gratis
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Tidak perlu kartu kredit
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Download PDF
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Resume Preview</h3>
                      <p className="text-gray-500 text-sm">Template Professional</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                    <div className="h-8 bg-sky-100 rounded mt-6"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-8 bg-green-100 rounded mt-6"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kenapa Memilih Resume Builder Kami?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fitur lengkap yang dirancang untuk membantu kamu membuat resume
                yang menarik dan profesional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all text-center group"
                  >
                    <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pilih Template Resume
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Template profesional yang dirancang untuk berbagai industri dan
                karir path
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`bg-white rounded-3xl overflow-hidden border-2 transition-all hover:shadow-xl group ${
                    template.popular
                      ? "border-sky-500 shadow-lg"
                      : "border-gray-100 hover:border-sky-200"
                  }`}
                >
                  {template.popular && (
                    <div className="bg-sky-500 text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      Paling Populer
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20`}
                    ></div>
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {template.description}
                    </p>
                    <Link
                      href="#"
                      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        template.popular
                          ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      Gunakan Template
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cara Menggunakan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Empat langkah sederhana untuk membuat resume profesional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-sky-200"></div>
                    )}
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                        <Icon className="w-10 h-10 text-sky-600" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Rocket className="w-4 h-4" />
                  Mulai Sekarang
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  Siap Membuat Resume Impianmu?
                </h2>
                <p className="text-sky-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                  Bergabung dengan ribuan pencari kerja yang sudah berhasil
                  membuat resume profesional bersama kami
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#"
                    className="bg-white text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Mulai Buat Resume
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/lowongan"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Cari Lowongan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Testimoni dari pengguna yang sudah merasakan manfaat Resume
                Builder kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-sky-200 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600">
                Jawaban atas pertanyaan yang sering ditanyakan
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Apakah Resume Builder ini benar-benar gratis?",
                  answer:
                    "Ya, Resume Builder kami sepenuhnya gratis. Kamu bisa menggunakan semua template dan fitur tanpa biaya apapun.",
                },
                {
                  question: "Apakah resume yang dibuat ATS-friendly?",
                  answer:
                    "Semua template kami dirancang khusus untuk lolos sistem ATS (Applicant Tracking System) yang digunakan oleh perusahaan besar.",
                },
                {
                  question: "Format apa yang tersedia untuk download?",
                  answer:
                    "Resume yang kamu buat bisa diunduh dalam format PDF yang merupakan format paling umum dan profesional untuk CV.",
                },
                {
                  question: "Bisakah saya mengedit resume setelah di-download?",
                  answer:
                    "Ya, kamu bisa menyimpan dan mengedit resume kapan saja. Perubahan akan otomatis tersimpan di akunmu.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-sky-200 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  Mulai Perjalanan Karirmu Sekarang
                </h2>
                <p className="text-sky-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                  Buat resume profesional dan temukan lowongan kerja impianmu
                  bersama KerjaAjaDulu.com
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#"
                    className="bg-white text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Buat Resume Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/lowongan"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Jelajahi Lowongan
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
