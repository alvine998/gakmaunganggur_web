import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  CreditCard,
  Zap,
  Building2,
  Star,
  TrendingUp,
  Users,
  FileText,
  BarChart3,
  Headphones,
  Code,
  Shield,
  ChevronDown,
} from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: string | null;
  annualPrice: string | null;
  features: PricingFeature[];
  cta: string;
  href: string;
  popular?: boolean;
  icon: typeof CreditCard;
}

interface ComparisonFeature {
  name: string;
  basic: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    description: "Cocok untuk perusahaan kecil yang baru memulai",
    monthlyPrice: "Gratis",
    annualPrice: "Gratis",
    icon: CreditCard,
    features: [
      { text: "5 lowongan per bulan", included: true },
      { text: "Profil perusahaan dasar", included: true },
      { text: "Pencarian kandidat standar", included: true },
      { text: "Support email", included: true },
      { text: "Listing prioritas", included: false },
      { text: "Analytics lanjutan", included: false },
      { text: "API akses", included: false },
      { text: "Dedicated support", included: false },
    ],
    cta: "Mulai Gratis",
    href: "/register",
  },
  {
    name: "Professional",
    description: "Untuk perusahaan yang ingin tumbuh lebih cepat",
    monthlyPrice: "Rp 999.000",
    annualPrice: "Rp 9.990.000",
    icon: Zap,
    features: [
      { text: "50 lowongan per bulan", included: true },
      { text: "Profil perusahaan premium", included: true },
      { text: "Pencarian kandidat lanjutan", included: true },
      { text: "Priority support 24/7", included: true },
      { text: "Listing prioritas", included: true },
      { text: "Analytics lanjutan", included: true },
      { text: "API akses", included: false },
      { text: "Dedicated support", included: false },
    ],
    cta: "Pilih Professional",
    href: "/register",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Solusi lengkap untuk perusahaan besar",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    icon: Building2,
    features: [
      { text: "Unlimited lowongan", included: true },
      { text: "Profil perusahaan custom", included: true },
      { text: "Pencarian kandidat premium", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Listing prioritas", included: true },
      { text: "Analytics & reporting", included: true },
      { text: "Full API akses", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: "Hubungi Sales",
    href: "/enterprise",
  },
];

const comparisonFeatures: ComparisonFeature[] = [
  { name: "Lowongan per bulan", basic: "5", professional: "50", enterprise: "Unlimited" },
  { name: "Profil perusahaan", basic: "Dasar", professional: "Premium", enterprise: "Custom" },
  { name: "Pencarian kandidat", basic: "Standar", professional: "Lanjutan", enterprise: "Premium" },
  { name: "Analytics", basic: false, professional: true, enterprise: true },
  { name: "Listing prioritas", basic: false, professional: true, enterprise: true },
  { name: "Support", basic: "Email", professional: "24/7 Priority", enterprise: "Dedicated" },
  { name: "API akses", basic: false, professional: false, enterprise: true },
  { name: "SLA guarantee", basic: false, professional: false, enterprise: true },
  { name: "Custom integrasi", basic: false, professional: false, enterprise: true },
];

const faqs: FAQ[] = [
  {
    question: "Apakah saya bisa upgrade plan kapan saja?",
    answer: "Ya, Anda bisa upgrade plan kapan saja. Perubahan akan berlaku pada siklus penagihan berikutnya.",
  },
  {
    question: "Apakah ada diskon untuk pembayaran tahunan?",
    answer: "Ya, Anda bisa hemat hingga 17% dengan memilih pembayaran tahunan dibandingkan bulanan.",
  },
  {
    question: "Bagaimana cara kerja free trial?",
    answer: "Free trial berlaku selama 14 hari tanpa perlu kartu kredit. Anda bisa mengakses semua fitur Professional.",
  },
  {
    question: "Apakah ada kontrak jangka panjang?",
    answer: "Tidak ada kontrak jangka panjang. Anda bisa membatalkan langganan kapan saja tanpa biaya tambahan.",
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer: "Kami menerima transfer bank, kartu kredit, virtual account, dan e-wallet seperti GoPay dan OVO.",
  },
];

export default function Harga() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Harga - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Pilih paket yang sesuai untuk kebutuhan rekrutmen perusahaan Anda"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar activePage="tentang" />

        <PageHero
          badge="Harga"
          badgeIcon={CreditCard}
          title="Pilih Paket"
          titleHighlight="Terbaik untuk Bisnismu"
          description="Solusi rekrutmen yang fleksibel untuk setiap ukuran perusahaan. Mulai dari gratis hingga enterprise."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Pricing Toggle & Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-xl p-1 flex items-center gap-1">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    !isAnnual
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    isAnnual
                      ? "bg-white text-gray-900 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Tahunan
                  <span className="ml-2 text-green-500 text-sm font-semibold">Hemat 17%</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={index}
                    className={`relative bg-white rounded-3xl p-8 border transition-all hover:shadow-lg ${
                      tier.popular
                        ? "border-sky-500 shadow-lg scale-105"
                        : "border-gray-100"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Populer
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                          tier.popular ? "bg-sky-100" : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${
                            tier.popular ? "text-sky-600" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-gray-500 text-sm">{tier.description}</p>
                    </div>

                    <div className="text-center mb-8">
                      <div className="text-4xl font-bold text-gray-900 mb-1">
                        {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </div>
                      {tier.monthlyPrice !== "Gratis" && tier.monthlyPrice !== "Custom" && (
                        <p className="text-gray-500 text-sm">
                          /{isAnnual ? "tahun" : "bulan"}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                              <X className="w-3 h-3 text-gray-400" />
                            </div>
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? "text-gray-700" : "text-gray-400"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tier.href}
                      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        tier.popular
                          ? "bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perbandingan Fitur
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Lihat perbandingan lengkap fitur dari setiap paket yang kami tawarkan
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Fitur</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">Basic</th>
                      <th className="text-center py-4 px-6 font-semibold text-sky-600">
                        Professional
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-50 ${
                          index % 2 === 0 ? "bg-gray-50/50" : ""
                        }`}
                      >
                        <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof feature.basic === "boolean" ? (
                            feature.basic ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.basic}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center bg-sky-50/50">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.professional}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fitur unggulan yang membantu perusahaan menemukan kandidat terbaik
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Kandidat Berkualitas",
                  description: "Akses ke database 50,000+ pencari kerja terverifikasi",
                  color: "bg-sky-100",
                  iconColor: "text-sky-600",
                },
                {
                  icon: TrendingUp,
                  title: "Analytics Lanjutan",
                  description: "Pantau performa lowongan dan optimasi rekrutmen",
                  color: "bg-green-100",
                  iconColor: "text-green-600",
                },
                {
                  icon: Headphones,
                  title: "Support 24/7",
                  description: "Tim support kami siap membantu kapan saja",
                  color: "bg-sky-100",
                  iconColor: "text-sky-600",
                },
                {
                  icon: Shield,
                  title: "Keamanan Data",
                  description: "Data perusahaan dan kandidat terjamin keamanannya",
                  color: "bg-green-100",
                  iconColor: "text-green-600",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all text-center"
                  >
                    <div
                      className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600">
                Belum menemukan jawaban? Hubungi tim support kami
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
                  Siap Memulai Rekrutmen?
                </h2>
                <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                  Bergabung dengan ribuan perusahaan yang telah menemukan kandidat terbaik bersama
                  kami
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/register"
                    className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Mulai Gratis Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/enterprise"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    Hubungi Sales
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
