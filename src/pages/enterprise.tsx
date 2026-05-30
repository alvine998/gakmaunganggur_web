import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Building2,
  ArrowRight,
  Check,
  MessageSquare,
  BarChart3,
  Headphones,
  Code,
  Shield,
  Users,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Clock,
  Award,
  Send,
} from "lucide-react";

interface EnterpriseFeature {
  icon: typeof Building2;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

interface HowItWork {
  step: string;
  title: string;
  description: string;
  icon: typeof MessageSquare;
  color: string;
  iconColor: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const enterpriseFeatures: EnterpriseFeature[] = [
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Solusi rekrutmen yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Manajer akun khusus yang memahami bisnis Anda dan siap membantu kapan saja.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Integrasikan sistem rekrutmen Anda dengan platform kami melalui API lengkap.",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Dashboard analytics komprehensif untuk memantau dan optimasi proses rekrutmen.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Dukungan teknis prioritas 24/7 dengan response time kurang dari 1 jam.",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: Shield,
    title: "SLA Guarantee",
    description: "Jaminan layanan dengan SLA 99.9% uptime untuk operasi rekrutmen tanpa henti.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const howItWorks: HowItWork[] = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    description: "Tim kami akan memahami kebutuhan rekrutmen dan tantangan bisnis Anda.",
    icon: MessageSquare,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    step: "02",
    title: "Solusi Custom",
    description: "Kami merancang solusi enterprise yang sesuai dengan workflow rekrutmen Anda.",
    icon: Target,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    step: "03",
    title: "Implementasi",
    description: "Tim teknis kami membantu implementasi dan integrasi dengan sistem Anda.",
    icon: Zap,
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    step: "04",
    title: "Go Live & Support",
    description: "Peluncuran layanan dengan dukungan berkelanjutan dari dedicated account manager.",
    icon: TrendingUp,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rahmat Widodo",
    role: "HR Director",
    company: "TechCorp Indonesia",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Enterprise solution dari KerjaAjaDulu.com membantu kami mengurangi waktu rekrutmen hingga 60%. Dedicated account manager sangat membantu.",
  },
  {
    name: "Maya Sari",
    role: "Head of Talent Acquisition",
    company: "Global Finance Corp",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "API integration yang mulus memungkinkan kami mengotomatiskan proses screening kandidat. Analytics yang disediakan sangat insightful.",
  },
  {
    name: "Budi Hartono",
    role: "VP of Human Resources",
    company: "MegaRetail Group",
    image: "https://i.pravatar.cc/150?img=53",
    quote:
      "SLA guarantee memberikan ketenangan pikiran. Support team selalu responsif dan profesional dalam menangani setiap masalah.",
  },
];

export default function Enterprise() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Enterprise - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Solusi enterprise untuk perusahaan besar dengan fitur lengkap dan dedicated support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar activePage="tentang" />

        <PageHero
          badge="Enterprise"
          badgeIcon={Building2}
          title="Solusi Enterprise"
          titleHighlight="untuk Perusahaan Besar"
          description="Platform rekrutmen yang scalable dan fleksibel untuk mendukung pertumbuhan bisnis Anda."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "200+", label: "Enterprise Clients" },
                { value: "99.9%", label: "SLA Uptime" },
                { value: "< 1hr", label: "Response Time" },
                { value: "50+", label: "Integrations" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fitur Enterprise
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Solusi lengkap untuk memenuhi kebutuhan rekrutmen skala besar perusahaan Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div
                      className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bagaimana Cara Kerjanya?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proses implementasi yang cepat dan mudah untuk memulai solusi enterprise Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all h-full">
                      <div
                        className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <Icon className={`w-8 h-8 ${item.iconColor}`} />
                      </div>
                      <div className="text-sm font-bold text-sky-500 mb-2">Langkah {item.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hubungi Tim Enterprise Kami
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ceritakan kebutuhan rekrutmen Anda dan tim kami akan memberikan solusi terbaik
                  untuk perusahaan Anda.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Clock,
                      title: "Response dalam 24 jam",
                      description: "Tim kami akan menghubungi Anda dalam waktu 24 jam",
                    },
                    {
                      icon: Globe,
                      title: "Konsultasi gratis",
                      description: "Konsultasi tanpa biaya untuk memahami kebutuhan Anda",
                    },
                    {
                      icon: Award,
                      title: "Custom proposal",
                      description: "Proposal yang disesuaikan dengan budget dan kebutuhan",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-sky-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="nama@perusahaan.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Perusahaan *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="Nama perusahaan Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah Karyawan
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none bg-white"
                    >
                      <option value="">Pilih jumlah karyawan</option>
                      <option value="1-50">1 - 50 karyawan</option>
                      <option value="51-200">51 - 200 karyawan</option>
                      <option value="201-500">201 - 500 karyawan</option>
                      <option value="501-1000">501 - 1.000 karyawan</option>
                      <option value="1000+">1.000+ karyawan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none resize-none"
                      placeholder="Ceritakan kebutuhan rekrutmen Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Inquiry
                  </button>
                </form>
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
                Testimoni dari perusahaan enterprise yang telah menggunakan layanan kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      <p className="text-sky-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  Siap Transformasi Proses Rekrutmen?
                </h2>
                <p className="text-sky-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                  Bergabung dengan 200+ perusahaan enterprise yang telah mempercayai solusi kami
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-white text-sky-600 hover:bg-sky-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Mulai Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/harga"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Lihat Harga
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
