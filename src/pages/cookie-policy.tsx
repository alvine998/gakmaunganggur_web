import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Cookie,
  ChevronRight,
  Clock,
  Info,
  Check,
  X,
  Shield,
  Globe,
  Mail,
} from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CookiePreference {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
  required?: boolean;
}

const tableOfContents: TOCItem[] = [
  { id: "apa-itu-cookie", label: "Apa itu Cookie", icon: Info },
  { id: "cookie-yang-kami-gunakan", label: "Cookie yang Kami Gunakan", icon: Cookie },
  { id: "daftar-cookie", label: "Daftar Cookie", icon: Globe },
  { id: "mengelola-preferensi", label: "Mengelola Preferensi", icon: Shield },
  { id: "menghapus-cookie", label: "Menghapus Cookie", icon: X },
  { id: "cookie-pihak-ketiga", label: "Cookie Pihak Ketiga", icon: Globe },
  { id: "perubahan-kebijakan", label: "Perubahan Kebijakan", icon: Info },
  { id: "hubungi-kami", label: "Hubungi Kami", icon: Mail },
];

const cookieTypes = [
  {
    name: "Cookie Penting (Essential)",
    description: "Cookie yang diperlukan untuk fungsi dasar website. Tanpa cookie ini, layanan yang kamu minta tidak dapat disediakan.",
    color: "sky",
    items: ["Sesi login", "Keamanan CSRF", "Preferensi cookie"],
  },
  {
    name: "Cookie Fungsional",
    description: "Cookie yang memungkinkan website mengingat pilihan yang kamu buat untuk memberikan fitur yang lebih personal.",
    color: "green",
    items: ["Bahasa yang dipilih", "Lokasi preferensi", "Pengaturan tampilan"],
  },
  {
    name: "Cookie Analitik",
    description: "Cookie yang membantu kami memahami bagaimana pengunjung berinteraksi dengan website dengan mengumpulkan informasi secara anonim.",
    color: "sky",
    items: ["Halaman yang dikunjungi", "Lama kunjungan", "Sumber traffic"],
  },
  {
    name: "Cookie Pemasaran",
    description: "Cookie yang digunakan untuk melacak pengunjung across website. Tujuannya adalah menampilkan iklan yang relevan dan menarik bagi pengguna individu.",
    color: "green",
    items: ["Iklan yang ditampilkan", "Kampanye pemasaran", "Retargeting"],
  },
];

const cookieList = [
  { name: "__session", type: "Penting", purpose: "Mempertahankan sesi pengguna yang aktif", duration: "Sesi" },
  { name: "csrf_token", type: "Penting", purpose: "Melindungi dari serangan CSRF", duration: "Sesi" },
  { name: "cookie_consent", type: "Penting", purpose: "Menyimpan preferensi cookie pengguna", duration: "1 tahun" },
  { name: "lang", type: "Fungsional", purpose: "Mengingat bahasa yang dipilih", duration: "1 tahun" },
  { name: "theme", type: "Fungsional", purpose: "Menyimpan preferensi tema tampilan", duration: "1 tahun" },
  { name: "_ga", type: "Analitik", purpose: "Membedakan pengunjung unik Google Analytics", duration: "2 tahun" },
  { name: "_gid", type: "Analitik", purpose: "Membedakan pengunjung unik", duration: "24 jam" },
  { name: "_gat", type: "Analitik", purpose: "Mengatur laju permintaan Google Analytics", duration: "1 menit" },
  { name: "_fbp", type: "Pemasaran", purpose: "Menyimpan ID pengiklanan Facebook", duration: "3 bulan" },
  { name: "_gcl_au", type: "Pemasaran", purpose: "Menyimpan konversi iklan Google", duration: "3 bulan" },
];

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState("apa-itu-cookie");
  const [preferences, setPreferences] = useState<CookiePreference[]>([
    {
      id: "essential",
      label: "Cookie Essential",
      description: "Cookie yang diperlukan untuk fungsi dasar website. Tidak dapat dimatikan.",
      enabled: true,
      required: true,
    },
    {
      id: "functional",
      label: "Cookie Fungsional",
      description: "Cookie yang memungkinkan website mengingat pilihan yang kamu buat.",
      enabled: false,
    },
    {
      id: "analytics",
      label: "Cookie Analitik",
      description: "Cookie yang membantu kami memahami bagaimana pengunjung berinteraksi dengan website.",
      enabled: false,
    },
    {
      id: "marketing",
      label: "Cookie Pemasaran",
      description: "Cookie yang digunakan untuk melacak pengunjung dan menampilkan iklan yang relevan.",
      enabled: false,
    },
  ]);
  const [saved, setSaved] = useState(false);

  const togglePreference = (id: string) => {
    setPreferences((prev) =>
      prev.map((pref) =>
        pref.id === id && !pref.required
          ? { ...pref, enabled: !pref.enabled }
          : pref
      )
    );
    setSaved(false);
  };

  const savePreferences = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Kebijakan Cookie - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Kebijakan cookie KerjaAjaDulu.com - Pelajari bagaimana kami menggunakan cookie untuk meningkatkan pengalaman kamu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <PageHero
          badge="Kebijakan Cookie"
          badgeIcon={Cookie}
          title="Kebijakan"
          titleHighlight="Cookie"
          description="Pelajari bagaimana kami menggunakan cookie untuk memberikan pengalaman terbaik saat kamu menggunakan KerjaAjaDulu.com."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sky-600 font-medium">Kebijakan Cookie</span>
          </nav>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar TOC */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Daftar Isi
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setActiveSection(item.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          activeSection === item.id
                            ? "bg-sky-50 text-sky-600 border border-sky-200"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-8 p-5 bg-sky-50 rounded-2xl border border-sky-100">
                  <Clock className="w-5 h-5 text-sky-600 mb-3" />
                  <p className="text-sm text-sky-800 leading-relaxed">
                    Terakhir diperbarui: <strong>28 Mei 2026</strong>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                {/* 1. Apa itu Cookie */}
                <section id="apa-itu-cookie" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Info className="w-6 h-6 text-sky-500" />
                    1. Apa itu Cookie
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Cookie adalah file kecil yang disimpan di perangkatmu (komputer, tablet, atau ponsel) saat kamu mengunjungi website. Cookie digunakan secara luas untuk membuat website bekerja, atau bekerja lebih efisien, serta memberikan informasi kepada pemilik website.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Cookie memungkinkan website mengingat tindakan dan preferensi kamu (seperti login, bahasa, ukuran font, dan pengaturan tampilan lainnya) selama periode waktu, sehingga kamu tidak perlu mengatur ulang setiap kali kamu kembali ke website atau menjelajahi dari satu halaman ke halaman lain.
                    </p>
                    <div className="bg-sky-50 rounded-xl p-5 border border-sky-100 mt-6">
                      <p className="text-sky-800 text-sm leading-relaxed">
                        <strong>Catatan:</strong> Cookie tidak menyimpan informasi pribadi sensitif seperti nomor kartu kredit atau kata sandi. Cookie hanya berisi data yang dikirim kembali ke server setiap kali browser meminta halaman dari server tersebut.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. Cookie yang Kami Gunakan */}
                <section id="cookie-yang-kami-gunakan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-sky-500" />
                    2. Cookie yang Kami Gunakan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Kami menggunakan beberapa jenis cookie untuk berbagai tujuan berikut:
                    </p>
                    <div className="space-y-6">
                      {cookieTypes.map((cookieType, index) => (
                        <div
                          key={index}
                          className={`rounded-2xl p-6 border ${
                            cookieType.color === "sky"
                              ? "bg-sky-50 border-sky-100"
                              : "bg-green-50 border-green-100"
                          }`}
                        >
                          <h4
                            className={`font-bold mb-2 ${
                              cookieType.color === "sky" ? "text-sky-900" : "text-green-900"
                            }`}
                          >
                            {cookieType.name}
                          </h4>
                          <p
                            className={`text-sm mb-4 ${
                              cookieType.color === "sky" ? "text-sky-800" : "text-green-800"
                            }`}
                          >
                            {cookieType.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {cookieType.items.map((item, i) => (
                              <span
                                key={i}
                                className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                                  cookieType.color === "sky"
                                    ? "bg-sky-100 text-sky-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 3. Daftar Cookie yang Digunakan */}
                <section id="daftar-cookie" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-sky-500" />
                    3. Daftar Cookie yang Digunakan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Berikut adalah daftar lengkap cookie yang kami gunakan di website ini:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left px-4 py-3 font-semibold text-gray-900 rounded-tl-xl">
                              Nama Cookie
                            </th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-900">
                              Tipe
                            </th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-900">
                              Tujuan
                            </th>
                            <th className="text-left px-4 py-3 font-semibold text-gray-900 rounded-tr-xl">
                              Durasi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cookieList.map((cookie, index) => (
                            <tr
                              key={index}
                              className={`border-b border-gray-100 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }`}
                            >
                              <td className="px-4 py-3 font-mono text-xs text-sky-600 font-medium">
                                {cookie.name}
                              </td>
                              <td className="px-4 py-3">
                                <span
                                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                    cookie.type === "Penting"
                                      ? "bg-sky-100 text-sky-700"
                                      : cookie.type === "Fungsional"
                                      ? "bg-green-100 text-green-700"
                                      : cookie.type === "Analitik"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-purple-100 text-purple-700"
                                  }`}
                                >
                                  {cookie.type}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {cookie.purpose}
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {cookie.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* 4. Mengelola Preferensi Cookie */}
                <section id="mengelola-preferensi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-sky-500" />
                    4. Mengelola Preferensi Cookie
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Kamu dapat mengelola preferensi cookie kapan saja menggunakan pengaturan di bawah ini:
                    </p>

                    <div className="space-y-4">
                      {preferences.map((pref) => (
                        <div
                          key={pref.id}
                          className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                            pref.enabled
                              ? "bg-sky-50 border-sky-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex-1 mr-4">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">
                                {pref.label}
                              </h4>
                              {pref.required && (
                                <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">
                                  Selalu Aktif
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">
                              {pref.description}
                            </p>
                          </div>
                          <button
                            onClick={() => togglePreference(pref.id)}
                            disabled={pref.required}
                            className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                              pref.enabled ? "bg-sky-500" : "bg-gray-300"
                            } ${pref.required ? "opacity-70 cursor-not-allowed" : ""}`}
                            aria-label={`Toggle ${pref.label}`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                                pref.enabled ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <button
                        onClick={savePreferences}
                        className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/25"
                      >
                        Simpan Preferensi
                      </button>
                      {saved && (
                        <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                          <Check className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            Preferensi berhasil disimpan!
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* 5. Menghapus Cookie */}
                <section id="menghapus-cookie" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <X className="w-6 h-6 text-sky-500" />
                    5. Menghapus Cookie
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kamu dapat menghapus atau memblokir cookie melalui pengaturan browser kamu. Namun, perlu diingat bahwa menghapus atau memblokir cookie dapat berdampak pada pengalaman pengguna kamu, dan beberapa bagian dari website kami mungkin tidak berfungsi sepenuhnya.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Berikut adalah langkah-langkah untuk menghapus cookie di browser populer:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                        <p className="text-sm text-gray-600">
                          Menu &gt; Settings &gt; Privacy and Security &gt; Clear Browsing Data &gt; Cookies and other site data
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                        <p className="text-sm text-gray-600">
                          Menu &gt; Settings &gt; Privacy & Security &gt; Cookies and Site Data &gt; Clear Data
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                        <p className="text-sm text-gray-600">
                          Safari &gt; Preferences &gt; Privacy &gt; Manage Website Data &gt; Remove All
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                        <p className="text-sm text-gray-600">
                          Menu &gt; Settings &gt; Privacy, Search, and Services &gt; Clear Browsing Data
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. Cookie Pihak Ketiga */}
                <section id="cookie-pihak-ketiga" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Globe className="w-6 h-6 text-sky-500" />
                    6. Cookie Pihak Ketiga
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Selain cookie yang kami tetapkan secara langsung, kami juga menggunakan cookie pihak ketiga untuk mengumpulkan informasi penggunaan website secara agregat dan anonim. Pihak ketiga yang kami gunakan meliputi:
                    </p>
                    <div className="space-y-4 mt-6">
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">GA</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                          <p className="text-sm text-gray-600">
                            Untuk menganalisis penggunaan website dan meningkatkan layanan kami.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">FB</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Facebook Pixel</h4>
                          <p className="text-sm text-gray-600">
                            Untuk mengukur efektivitas iklan dan memahami tindakan pengguna.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 font-bold text-sm">YT</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">YouTube</h4>
                          <p className="text-sm text-gray-600">
                            Untuk menampilkan video dan melacak interaksi pengguna dengan konten video.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-6">
                      Kami menyarankan kamu untuk memeriksa kebijakan privasi masing-masing pihak ketiga ini untuk informasi lebih lanjut tentang cookie yang mereka gunakan.
                    </p>
                  </div>
                </section>

                {/* 7. Perubahan Kebijakan Cookie */}
                <section id="perubahan-kebijakan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Info className="w-6 h-6 text-sky-500" />
                    7. Perubahan Kebijakan Cookie
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami dapat memperbarui Kebijakan Cookie ini dari waktu ke waktu untuk mencerminkan perubahan pada cookie yang kami gunakan atau untuk alasan operasional, hukum, atau peraturan lainnya.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan yang jelas. Kami menyarankan kamu untuk memeriksa halaman ini secara berkala untuk mengetahui informasi terbaru tentang cookie yang kami gunakan.
                    </p>
                    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 mt-6">
                      <p className="text-amber-800 text-sm leading-relaxed">
                        <strong>Penting:</strong> Jika ada perubahan signifikan pada cara kami menggunakan cookie, kami akan memberi tahu kamu melalui email atau melalui pemberitahuan di website kami sebelum perubahan tersebut berlaku.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 8. Hubungi Kami */}
                <section id="hubungi-kami">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-sky-500" />
                    8. Hubungi Kami
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Jika kamu memiliki pertanyaan tentang Kebijakan Cookie kami atau ingin menggunakan hak-hakmu terkait cookie, silakan hubungi kami:
                    </p>
                    <div className="bg-gradient-to-r from-sky-50 to-green-50 rounded-2xl p-6 border border-sky-100">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Email Privasi
                          </h4>
                          <p className="text-sky-600">privacy@kerjaajadulu.com</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Telepon
                          </h4>
                          <p className="text-sky-600">+62 21 1234 5678</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Alamat
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Jl. Sudirman No. 123, Jakarta Selatan
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Jam Kerja
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Senin - Jumat, 09:00 - 17:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
