import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Building,
  Globe,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@kerjaajadulu.com",
    description: "Kirim email untuk pertanyaan umum",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    icon: Phone,
    title: "Telepon",
    value: "+62 21 1234 5678",
    description: "Hubungi kami di hari kerja",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Jl. Sudirman No. 123, Jakarta",
    description: "Kantor pusat kami",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
];

const officeLocations = [
  {
    city: "Jakarta",
    address: "Jl. Sudirman No. 123, Jakarta Selatan",
    phone: "+62 21 1234 5678",
    email: "jakarta@kerjaajadulu.com",
    isMain: true,
  },
];

const faqData: FAQItem[] = [
  {
    question: "Bagaimana cara membuat akun di KerjaAjaDulu.com?",
    answer:
      'Klik tombol "Daftar" di halaman utama, lalu lengkapi formulir pendaftaran dengan data diri kamu. Setelah itu, verifikasi email dan akun kamu siap digunakan.',
  },
  {
    question: "Apakah layanan KerjaAjaDulu.com gratis?",
    answer:
      "Ya, untuk pencari kerja, semua fitur utama seperti pencarian lowongan, melamar pekerjaan, dan membuat profil dapat digunakan secara gratis.",
  },
  {
    question: "Bagaimana cara melamar pekerjaan?",
    answer:
      'Pilih lowongan yang kamu minati, lalu klik "Lamar Sekarang". Upload CV dan surat lamaran kamu, lalu ikuti instruksi selanjutnya.',
  },
  {
    question: "Berapa lama proses verifikasi akun perusahaan?",
    answer:
      "Proses verifikasi akun perusahaan biasanya memakan waktu 1-3 hari kerja. Kami akan mengirimkan notifikasi setelah akun kamu terverifikasi.",
  },
  {
    question: "Bagaimana cara menghubungi tim support?",
    answer:
      "Kamu bisa menghubungi kami melalui email di info@kerjaajadulu.com, telepon di +62 21 1234 5678, atau mengisi formulir kontak di halaman ini.",
  },
];

export default function HubungiKami() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Hubungi Kami - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Hubungi tim KerjaAjaDulu.com untuk pertanyaan, saran, atau bantuan terkait layanan kami."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <PageHero
          badge="Hubungi Kami"
          badgeIcon={MessageCircle}
          title="Kami Siap"
          titleHighlight="Membantu"
          description="Punya pertanyaan atau butuh bantuan? Jangan ragu untuk menghubungi tim kami."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Contact Info Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sky-600 font-semibold mb-1">{item.value}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan kami akan membalas secepatnya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="Masukkan email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="Masukkan subjek"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
                    placeholder="Tulis pesan kamu..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600 mb-8">
                Temukan jawaban untuk pertanyaan yang sering ditanyakan.
              </p>

              <div className="space-y-3">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFAQ(openFAQ === index ? null : index)
                      }
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lokasi Kantor Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kunjungi kantor kami untuk pertemuan langsung atau konsultasi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-2xl p-6 border-2 transition-all ${
                    office.isMain
                      ? "border-sky-500 shadow-lg"
                      : "border-transparent hover:border-gray-200"
                  }`}
                >
                  {office.isMain && (
                    <span className="inline-block bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Kantor Pusat
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        office.isMain ? "bg-sky-100" : "bg-gray-200"
                      }`}
                    >
                      <Building
                        className={`w-5 h-5 ${
                          office.isMain ? "text-sky-600" : "text-gray-500"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {office.city}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        Senin - Jumat, 09:00 - 17:00
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-80 bg-gradient-to-br from-sky-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-sky-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">
                    Peta Lokasi Kantor Kami
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Jakarta, Surabaya, Bandung
                  </p>
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
