import Head from "next/head";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  HelpCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Send,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface Ticket {
  id: string;
  subject: string;
  category: string;
  status: "Dibuka" | "Dalam Proses" | "Selesai";
  date: string;
}

const faqs: FAQ[] = [
  {
    question: "Bagaimana cara memasang lowongan kerja?",
    answer:
      'Anda dapat memasang lowongan kerja melalui menu "Lowongan Kerja" di dashboard. Klik "Pasang Lowongan Baru" dan isi detail lengkap posisi yang dibutuhkan.',
  },
  {
    question: "Bagaimana cara menghubungi kandidat?",
    answer:
      'Gunakan fitur "Pesan" di dashboard untuk mengirim pesan langsung kepada kandidat yang sudah melamar atau yang menarik minat Anda.',
  },
  {
    question: "Apakah ada batasan jumlah lowongan yang bisa dipasang?",
    answer:
      "Bergantung pada paket langganan Anda. Paket gratis memungkinkan 3 lowongan aktif, paket Pro 25 lowongan, dan paket Enterprise tidak terbatas.",
  },
  {
    question: "Bagaimana cara mengubah paket langganan?",
    answer:
      'Buka menu "Pengaturan" lalu pilih tab "Langganan". Anda dapat meng-upgrade atau downgrade paket kapan saja.',
  },
  {
    question: "Bagaimana cara menghapus akun perusahaan?",
    answer:
      'Silakan hubungi tim dukungan kami melalui formulir di bawah atau email ke support@kerjaajadulu.com untuk permintaan penghapusan akun.',
  },
  {
    question: "Apakah data saya aman di KerjaAjaDulu?",
    answer:
      "Ya, kami menggunakan enkripsi SSL dan mengikuti standar keamanan data internasional. Data Anda tidak akan dibagikan kepada pihak ketiga tanpa izin.",
  },
];

const tickets: Ticket[] = [
  { id: "TKT-001", subject: "Tidak bisa upload logo", category: "Teknis", status: "Dalam Proses", date: "28 Mei 2026" },
  { id: "TKT-002", subject: "Pertanyaan paket Enterprise", category: "Penjualan", status: "Dibuka", date: "27 Mei 2026" },
  { id: "TKT-003", subject: "Bug halaman kandidat", category: "Teknis", status: "Selesai", date: "25 Mei 2026" },
  { id: "TKT-004", subject: "Permintaan fitur baru", category: "Umum", status: "Selesai", date: "22 Mei 2026" },
];

const statusColors: Record<Ticket["status"], string> = {
  Dibuka: "bg-yellow-100 text-yellow-700",
  "Dalam Proses": "bg-sky-100 text-sky-700",
  Selesai: "bg-green-100 text-green-700",
};

export default function CompanySupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ subject: "", category: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ subject: "", category: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Dukungan - KerjaAjaDulu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="support">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-sky-500" />
            Dukungan
          </h1>
          <p className="text-gray-500 text-sm mt-1">Bantuan dan dukungan untuk pengguna perusahaan</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Telepon</h3>
              <p className="text-xs text-gray-500 mt-1">Senin - Jumat, 09:00 - 17:00 WIB</p>
              <p className="text-sm font-semibold text-sky-600 mt-2">+62 21 1234 5678</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Email</h3>
              <p className="text-xs text-gray-500 mt-1">Respon dalam 24 jam</p>
              <p className="text-sm font-semibold text-green-600 mt-2">support@kerjaajadulu.com</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Live Chat</h3>
              <p className="text-xs text-gray-500 mt-1">Tersedia 24/7</p>
              <button className="mt-2 px-4 py-1.5 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors">
                Mulai Chat
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Pertanyaan Umum</h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Masukkan subjek pesan"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white"
                >
                  <option value="">Pilih kategori</option>
                  <option value="teknis">Teknis</option>
                  <option value="penjualan">Penjualan</option>
                  <option value="akun">Akun & Langganan</option>
                  <option value="umum">Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Jelaskan masalah atau pertanyaan Anda..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Ticket History */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Riwayat Tiket</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">ID</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Subjek</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Kategori</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Status</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider pb-3">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 text-sm font-medium text-sky-600">{ticket.id}</td>
                    <td className="py-4 text-sm text-gray-900">{ticket.subject}</td>
                    <td className="py-4 text-sm text-gray-500">{ticket.category}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{ticket.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CompanyLayout>
    </>
  );
}
