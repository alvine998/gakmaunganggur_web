import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Shield,
  ChevronRight,
  Mail,
  Database,
  Eye,
  Cookie,
  UserCheck,
  FileText,
  Info,
} from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tableOfContents: TOCItem[] = [
  { id: "informasi", label: "Informasi yang Dikumpulkan", icon: Database },
  { id: "penggunaan", label: "Penggunaan Informasi", icon: Eye },
  { id: "perlindungan", label: "Perlindungan Data", icon: Shield },
  { id: "cookie", label: "Cookie", icon: Cookie },
  { id: "hak", label: "Hak Pengguna", icon: UserCheck },
  { id: "perubahan", label: "Perubahan Kebijakan", icon: FileText },
  { id: "hubungi", label: "Hubungi Kami", icon: Mail },
];

export default function KebijakanPrivasi() {
  const [activeSection, setActiveSection] = useState("informasi");

  return (
    <>
      <Head>
        <title>Kebijakan Privasi - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Kebijakan privasi KerjaAjaDulu.com - Pelajari bagaimana kami melindungi data pribadi kamu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="privasi" />

        <PageHero
          badge="Kebijakan Privasi"
          badgeIcon={Shield}
          title="Kebijakan"
          titleHighlight="Privasi"
          description="Kami sangat menghargai privasi kamu. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi kamu."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

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
                  <Info className="w-5 h-5 text-sky-600 mb-3" />
                  <p className="text-sm text-sky-800 leading-relaxed">
                    Terakhir diperbarui: <strong>28 Mei 2026</strong>
                  </p>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                {/* Informasi yang Dikumpulkan */}
                <section id="informasi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Database className="w-6 h-6 text-sky-500" />
                    Informasi yang Dikumpulkan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami mengumpulkan berbagai jenis informasi untuk memberikan layanan terbaik kepada pengguna kami:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat, dan foto profil yang kamu berikan saat mendaftar.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Informasi Profil:</strong> Pengalaman kerja, pendidikan, skill, dan preferensi karir yang kamu masukkan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Data Penggunaan:</strong> Informasi tentang bagaimana kamu menggunakan platform, termasuk lowongan yang dilihat dan dilamar.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Data Perangkat:</strong> Informasi perangkat, alamat IP, dan jenis browser untuk keamanan dan optimasi layanan.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Penggunaan Informasi */}
                <section id="penggunaan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-sky-500" />
                    Penggunaan Informasi
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Informasi yang kami kumpulkan digunakan untuk:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Menyediakan dan memelihara layanan KerjaAjaDulu.com
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Menghubungkan pencari kerja dengan perusahaan yang sesuai
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Mengirim notifikasi terkait lowongan dan pembaruan akun
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Meningkatkan pengalaman pengguna melalui rekomendasi yang relevan
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Melindungi keamanan dan mencegah penyalahgunaan platform
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Perlindungan Data */}
                <section id="perlindungan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-sky-500" />
                    Perlindungan Data
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami menerapkan langkah-langkah keamanan untuk melindungi data pribadi kamu:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Enkripsi SSL</h4>
                        <p className="text-sm text-gray-600">
                          Semua data ditransfer menggunakan enkripsi SSL 256-bit untuk keamanan maksimal.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Akses Terbatas</h4>
                        <p className="text-sm text-gray-600">
                          Hanya personel yang berwenang yang dapat mengakses data pribadi pengguna.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Server Aman</h4>
                        <p className="text-sm text-gray-600">
                          Data disimpan di server yang aman dengan perlindungan firewall ganda.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Audit Rutin</h4>
                        <p className="text-sm text-gray-600">
                          Kami melakukan audit keamanan secara berkala untuk memastikan perlindungan data.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookie */}
                <section id="cookie" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Cookie className="w-6 h-6 text-sky-500" />
                    Cookie
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami menggunakan cookie untuk meningkatkan pengalaman kamu:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Cookie Essential:</strong> Diperlukan untuk fungsi dasar website seperti login dan navigasi.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Cookie Preferensi:</strong> Mengingat pengaturan dan preferensi kamu.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Cookie Analitik:</strong> Membantu kami memahami penggunaan platform untuk peningkatan layanan.
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Kamu dapat mengelola cookie melalui pengaturan browser kamu.
                    </p>
                  </div>
                </section>

                {/* Hak Pengguna */}
                <section id="hak" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-sky-500" />
                    Hak Pengguna
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Sebagai pengguna, kamu memiliki hak:
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Hak Akses",
                          desc: "Mengakses semua data pribadi yang kami simpan tentang kamu.",
                        },
                        {
                          title: "Hak Koreksi",
                          desc: "Memperbarui atau mengoreksi data pribadi yang tidak akurat.",
                        },
                        {
                          title: "Hak Penghapusan",
                          desc: "Meminta penghapusan data pribadi dari sistem kami.",
                        },
                        {
                          title: "Hak Portabilitas",
                          desc: "Menerima data pribadi dalam format yang dapat dibaca mesin.",
                        },
                        {
                          title: "Hak Keberatan",
                          desc: "Menolak pemrosesan data pribadi untuk tujuan tertentu.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <span className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-sky-600 font-bold text-sm">
                              {index + 1}
                            </span>
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Perubahan Kebijakan */}
                <section id="perubahan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-sky-500" />
                    Perubahan Kebijakan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Dipublikasikan di halaman ini dengan tanggal pembaruan yang jelas
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Dikirimkan melalui email untuk perubahan signifikan
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Berlaku segera setelah dipublikasikan kecuali disebutkan lain
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Kami menyarankan untuk memeriksa halaman ini secara berkala untuk mengetahui pembaruan terbaru.
                    </p>
                  </div>
                </section>

                {/* Hubungi Kami */}
                <section id="hubungi">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-sky-500" />
                    Hubungi Kami
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Jika kamu memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak-hakmu, silakan hubungi kami:
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
