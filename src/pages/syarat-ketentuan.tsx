import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import {
  Scale,
  ChevronRight,
  Clock,
  Mail,
  ArrowRight,
  FileText,
  UserCheck,
  Briefcase,
  Send,
  ShieldAlert,
  Ban,
  CreditCard,
  XCircle,
  AlertTriangle,
  Gavel,
  RefreshCw,
  Info,
} from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tableOfContents: TOCItem[] = [
  { id: "penerimaan", label: "Penerimaan Syarat & Ketentuan", icon: Scale },
  { id: "akun", label: "Akun Pengguna", icon: UserCheck },
  { id: "penggunaan", label: "Penggunaan Layanan", icon: FileText },
  { id: "lowongan", label: "Lowongan Kerja", icon: Briefcase },
  { id: "lamaran", label: "Lamaran Pekerjaan", icon: Send },
  { id: "hak-kewajiban", label: "Hak dan Kewajiban", icon: ShieldAlert },
  { id: "larangan", label: "Larangan Penggunaan", icon: Ban },
  { id: "hki", label: "Hak Kekayaan Intelektual", icon: FileText },
  { id: "pembayaran", label: "Pembayaran", icon: CreditCard },
  { id: "pembatalan", label: "Pembatalan & Pengembalian Dana", icon: XCircle },
  { id: "tanggung-jawab", label: "Batasan Tanggung Jawab", icon: AlertTriangle },
  { id: "ganti-rugi", label: "Ganti Rugi", icon: Gavel },
  { id: "hukum", label: "Hukum yang Berlaku", icon: Scale },
  { id: "perubahan", label: "Perubahan Syarat & Ketentuan", icon: RefreshCw },
  { id: "hubungi", label: "Hubungi Kami", icon: Mail },
];

export default function SyaratKetentuan() {
  const [activeSection, setActiveSection] = useState("penerimaan");

  return (
    <>
      <Head>
        <title>Syarat & Ketentuan - KerjaAjaDulu.com</title>
        <meta
          name="description"
          content="Syarat dan ketentuan penggunaan platform KerjaAjaDulu.com. Bacalah dengan seksama sebelum menggunakan layanan kami."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar activePage="tentang" />

        <PageHero
          badge="Syarat & Ketentuan"
          badgeIcon={Scale}
          title="Syarat &"
          titleHighlight="Ketentuan"
          description="Syarat dan ketentuan ini mengatur penggunaan platform KerjaAjaDulu.com. Dengan menggunakan layanan kami, kamu setuju untuk mematuhi syarat dan ketentuan berikut."
          className="bg-gradient-to-br from-sky-50 to-green-50"
        />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Syarat & Ketentuan</span>
          </nav>
        </div>

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
                {/* Last Updated Notice */}
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 mb-10">
                  <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    Dokumen ini terakhir diperbarui pada <strong className="text-gray-900">28 Mei 2026</strong>.
                    Dengan menggunakan platform kami, kamu setuju untuk terikat oleh syarat dan ketentuan ini.
                  </p>
                </div>

                {/* 1. Penerimaan Syarat & Ketentuan */}
                <section id="penerimaan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-sky-500" />
                    1. Penerimaan Syarat & Ketentuan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Dengan mengakses atau menggunakan platform KerjaAjaDulu.com, kamu secara otomatis setuju untuk terikat oleh syarat dan ketentuan yang berlaku. Jika kamu tidak setuju dengan salah satu bagian dari syarat dan ketentuan ini, kamu tidak diperkenankan untuk menggunakan layanan kami.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Syarat dan ketentuan ini berlaku untuk semua pengguna platform, baik pencari kerja maupun perusahaan yang memasang lowongan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Penggunaan berkelanjutan setelah perubahan berarti kamu menerima syarat yang telah diperbarui.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 2. Akun Pengguna */}
                <section id="akun" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-sky-500" />
                    2. Akun Pengguna
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Untuk menggunakan layanan KamiAjaDulu.com, kamu harus membuat akun dengan informasi yang benar dan lengkap.
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Kewajiban Pendaftaran",
                          desc: "Kamu bertanggung jawab untuk menjaga kerahasiaan kredensial akun kamu dan memberitahu kami segera jika ada penggunaan tanpa izin.",
                        },
                        {
                          title: "Informasi Akurat",
                          desc: "Semua informasi yang kamu berikan saat pendaftaran harus akurat, terkini, dan lengkap. Informasi palsu dapat mengakibatkan penangguhan atau penghapusan akun.",
                        },
                        {
                          title: "Satu Akun per Pengguna",
                          desc: "Setiap pengguna hanya diperkenankan memiliki satu akun. Pembuatan akun ganda untuk tujuan apapun dilarang.",
                        },
                        {
                          title: "Tanggung Jawab Akun",
                          desc: "Kamu bertanggung jawab atas semua aktivitas yang terjadi di akun kamu, termasuk penggunaan oleh pihak ketiga.",
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

                {/* 3. Penggunaan Layanan */}
                <section id="penggunaan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-sky-500" />
                    3. Penggunaan Layanan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      KerjaAjaDulu.com menyediakan platform untuk menghubungkan pencari kerja dengan perusahaan. Berikut ketentuan penggunaan layanan:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Layanan ini ditujukan untuk pengguna berusia 18 tahun ke atas atau yang sudah menyelesaikan pendidikan formal.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kamu hanya boleh menggunakan layanan ini untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kamu dilarang menggunakan platform untuk aktivitas yang dapat merugikan pengguna lain atau merusak reputasi platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami berhak menangguhkan atau menghentikan akses kamu jika ditemukan pelanggaran terhadap syarat dan ketentuan ini.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 4. Lowongan Kerja */}
                <section id="lowongan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-sky-500" />
                    4. Lowongan Kerja
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Untuk perusahaan yang memasang lowongan kerja di platform kami:
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Keaslian Lowongan",
                          desc: "Semua lowongan yang dipasang harus asli dan bukan penipuan. Perusahaan bertanggung jawab penuh atas kebenaran informasi lowongan.",
                        },
                        {
                          title: "Kepatuhan Hukum",
                          desc: "Lowongan harus mematuhi peraturan ketenagakerjaan yang berlaku di Indonesia, termasuk standar gaji dan hak pekerja.",
                        },
                        {
                          title: "Non-Diskriminasi",
                          desc: "Lowongan tidak boleh mengandung unsur diskriminasi berdasarkan suku, agama, ras, gender, atau faktor lainnya.",
                        },
                        {
                          title: "Pembaruan dan Penarikan",
                          desc: "Perusahaan bertanggung jawab untuk memperbarui atau menarik lowongan yang sudah tidak tersedia.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold text-sm">
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

                {/* 5. Lamaran Pekerjaan */}
                <section id="lamaran" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Send className="w-6 h-6 text-sky-500" />
                    5. Lamaran Pekerjaan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Untuk pencari kerja yang mengirimkan lamaran melalui platform kami:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Informasi yang Benar:</strong> Semua informasi dalam lamaran harus akurat dan dapat diverifikasi. Pelamar bertanggung jawab atas kebenaran data yang disampaikan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Hak Perusahaan:</strong> Perusahaan berhak menolak lamaran tanpa memberikan alasan secara spesifik. Keputusan rekrutmen sepenuhnya menjadi wewenang perusahaan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Data Pelamar:</strong> Dengan mengirimkan lamaran, kamu memberikan izin kepada perusahaan untuk mengakses informasi profil kamu yang relevan untuk proses rekrutmen.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Komunikasi:</strong> Semua komunikasi terkait rekrutmen harus dilakukan melalui fitur yang tersedia di platform atau media resmi perusahaan.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 6. Hak dan Kewajiban */}
                <section id="hak-kewajiban" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <ShieldAlert className="w-6 h-6 text-sky-500" />
                    6. Hak dan Kewajiban
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Hak Pengguna</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0" />
                            Mendapatkan layanan sesuai dengan yang diiklankan
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0" />
                            Melindungi data pribadi sesuai kebijakan privasi
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0" />
                            Menghapus akun kapan saja dengan prosedur yang berlaku
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 flex-shrink-0" />
                            Mendapatkan dukungan pelanggan saat mengalami kendala
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Kewajiban Pengguna</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                            Menjaga kerahasiaan akun dan kata sandi
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                            Memberikan informasi yang benar dan akurat
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                            Tidak menyalahgunakan fitur platform
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                            Mematuhi hukum dan peraturan yang berlaku
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 7. Larangan Penggunaan */}
                <section id="larangan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Ban className="w-6 h-6 text-sky-500" />
                    7. Larangan Penggunaan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Dalam menggunakan platform KerjaAjaDulu.com, kamu dilarang untuk:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Membuat akun palsu atau menggunakan identitas orang lain",
                        "Mengirim spam, virus, atau konten berbahaya lainnya",
                        "Melakukan pencurian data atau peretasan terhadap sistem kami",
                        "Menggunakan bot atau script otomatis tanpa izin tertulis",
                        "Memperdagangkan atau menjual akun kepada pihak lain",
                        "Memposting konten yang melanggar hukum atau menyinggung kelompok tertentu",
                        "Mencoba mengakses area platform yang tidak diizinkan",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Pelanggaran terhadap ketentuan ini dapat mengakibatkan penangguhan atau penghapusan akun secara permanen tanpa pemberitahuan sebelumnya.
                    </p>
                  </div>
                </section>

                {/* 8. Hak Kekayaan Intelektual */}
                <section id="hki" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-sky-500" />
                    8. Hak Kekayaan Intelektual
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Seluruh konten yang tersedia di platform KerjaAjaDulu.com dilindungi oleh hak kekayaan intelektual:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Konten Platform:</strong> Logo, desain, teks, grafik, dan elemen visual lainnya adalah milik KerjaAjaDulu.com dan dilindungi undang-undang.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Konten Pengguna:</strong> Dengan memposting konten, kamu memberikan lisensi kepada kami untuk menampilkan dan mendistribusikan konten tersebut dalam rangka penyediaan layanan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          <strong className="text-gray-900">Larangan Duplikasi:</strong> Kamu tidak diperkenankan menyalin, memodifikasi, atau mendistribusikan konten dari platform kami tanpa izin tertulis.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 9. Pembayaran */}
                <section id="pembayaran" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-sky-500" />
                    9. Pembayaran (Fitur Premium)
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Beberapa fitur di KerjaAjaDulu.com memerlukan pembayaran untuk penggunaan fitur premium:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Harga dan detail fitur premium tercantum jelas di halaman Harga sebelum pembelian.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pembayaran dilakukan melalui metode yang tersedia (transfer bank, kartu kredit, e-wallet).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Semua harga yang tercantum sudah termasuk pajak yang berlaku kecuali disebutkan lain.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami berhak mengubah harga sewaktu-waktu dengan pemberitahuan yang wajar.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 10. Pembatalan dan Pengembalian Dana */}
                <section id="pembatalan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-sky-500" />
                    10. Pembatalan dan Pengembalian Dana
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Berikut ketentuan pembatalan dan pengembalian dana:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pembatalan dalam <strong className="text-gray-900">7 hari</strong> sejak pembelian berhak mendapatkan pengembalian dana penuh.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pembatalan setelah 7 hari tidak berhak mendapatkan pengembalian dana, kecuali ada kesalahan dari pihak kami.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pengembalian dana akan diproses dalam <strong className="text-gray-900">5-10 hari kerja</strong> melalui metode pembayaran yang sama.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami berhak menolak pengembalian dana jika ditemukan penyalahgunaan layanan.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 11. Batasan Tanggung Jawab */}
                <section id="tanggung-jawab" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-sky-500" />
                    11. Batasan Tanggung Jawab
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      KerjaAjaDulu.com menyediakan layanan &quot;sebagaimana adanya&quot; tanpa jaminan apapun:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami tidak menjamin bahwa platform akan selalu tersedia tanpa gangguan atau kesalahan teknis.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami tidak bertanggung jawab atas kehilangan data akibat gangguan teknis yang berada di luar kendali kami.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, atau konsekuensial dari penggunaan platform.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Tanggung jawab kami terbatas pada jumlah yang telah kamu bayarkan untuk layanan premium dalam 12 bulan terakhir.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 12. Ganti Rugi */}
                <section id="ganti-rugi" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Gavel className="w-6 h-6 text-sky-500" />
                    12. Ganti Rugi
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Dengan menggunakan platform kami, kamu setuju untuk memberikan ganti rugi kepada KerjaAjaDulu.com terhadap:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Klaim atau tuntutan dari pihak ketiga yang timbul dari penggunaan platform oleh kamu.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pelanggaran terhadap hak pihak lain yang dilakukan melalui konten yang kamu unggah atau distribusikan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Kerusakan atau kehilangan yang timbul dari pelanggaran syarat dan ketentuan ini.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 13. Hukum yang Berlaku */}
                <section id="hukum" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Scale className="w-6 h-6 text-sky-500" />
                    13. Hukum yang Berlaku
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Musyawarah dan mufakat sebagai upaya penyelesaian pertama.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Mediasi melalui lembaga alternatif penyelesaian sengketa (APS) jika musyawarah tidak berhasil.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Pengadilan Negeri Jakarta Selatan sebagai pengadilan yang berwenang jika mediasi gagal.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 14. Perubahan Syarat & Ketentuan */}
                <section id="perubahan" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-sky-500" />
                    14. Perubahan Syarat & Ketentuan
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Kami berhak memperbarui syarat dan ketentuan ini sewaktu-waktu. Perubahan akan:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Dipublikasikan di halaman ini dengan tanggal pembaruan yang jelas.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Dikirimkan melalui email untuk perubahan yang bersifat signifikan.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">
                          Berlaku segera setelah dipublikasikan kecuali disebutkan lain.
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Kami menyarankan untuk memeriksa halaman ini secara berkala untuk mengetahui pembaruan terbaru dari syarat dan ketentuan kami.
                    </p>
                  </div>
                </section>

                {/* 15. Hubungi Kami */}
                <section id="hubungi">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-sky-500" />
                    15. Hubungi Kami
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Jika kamu memiliki pertanyaan tentang syarat dan ketentuan ini atau membutuhkan bantuan terkait penggunaan platform, silakan hubungi kami:
                    </p>
                    <div className="bg-gradient-to-r from-sky-50 to-green-50 rounded-2xl p-6 border border-sky-100">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Email Dukungan
                          </h4>
                          <p className="text-sky-600">support@kerjaajadulu.com</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Email Legal
                          </h4>
                          <p className="text-sky-600">legal@kerjaajadulu.com</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Telepon
                          </h4>
                          <p className="text-sky-600">+62 21 1234 5678</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Jam Kerja
                          </h4>
                          <p className="text-gray-600 text-sm">
                            Senin - Jumat, 09:00 - 17:00 WIB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/hubungi-kami"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
                      >
                        Hubungi Tim Dukungan
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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
