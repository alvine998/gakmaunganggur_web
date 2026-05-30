import Head from "next/head";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  Settings,
  User,
  Bell,
  Shield,
  Upload,
  Edit,
  Plus,
  Trash2,
  Lock,
} from "lucide-react";

type TabKey = "profil" | "tim" | "notifikasi" | "keamanan";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Ahmad Hidayat", email: "ahmad@majubersama.com", role: "Admin", avatar: "AH" },
  { id: 2, name: "Rina Wulandari", email: "rina@majubersama.com", role: "HR Manager", avatar: "RW" },
  { id: 3, name: "Dodi Saputra", email: "dodi@majubersama.com", role: "Recruiter", avatar: "DS" },
];

export default function CompanySettings() {
  const [activeTab, setActiveTab] = useState<TabKey>("profil");
  const [notifEmail, setNotifEmail] = useState({
    newApplicant: true,
    lowonganStatus: true,
    chatMessage: true,
    weeklyReport: false,
    marketing: false,
  });
  const [twoFactor, setTwoFactor] = useState(false);

  const tabs: { key: TabKey; label: string; icon: typeof Settings }[] = [
    { key: "profil", label: "Profil", icon: User },
    { key: "tim", label: "Tim", icon: User },
    { key: "notifikasi", label: "Notifikasi", icon: Bell },
    { key: "keamanan", label: "Keamanan", icon: Shield },
  ];

  return (
    <>
      <Head>
        <title>Pengaturan Perusahaan - KerjaAjaDulu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="settings">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-6 h-6 text-sky-500" />
            Pengaturan Perusahaan
          </h1>
          <p className="text-gray-500 text-sm mt-1">Kelola profil, tim, dan pengaturan akun perusahaan</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-white text-sky-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Profil Tab */}
        {activeTab === "profil" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Profil Perusahaan</h2>

            {/* Logo Upload */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Logo Perusahaan</label>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-sky-100 border-2 border-dashed border-sky-300 flex items-center justify-center">
                  <span className="text-2xl font-bold text-sky-600">PT</span>
                </div>
                <div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-xl text-sm font-medium hover:bg-sky-100 transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload Logo
                  </button>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG max 2MB</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Perusahaan</label>
                <input
                  type="text"
                  defaultValue="PT Maju Bersama"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industri</label>
                <input
                  type="text"
                  defaultValue="Technology"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  defaultValue="https://majubersama.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Perusahaan</label>
                <textarea
                  defaultValue="PT Maju Bersama adalah perusahaan teknologi yang berfokus pada inovasi digital dan solusi bisnis modern."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                <input
                  type="text"
                  defaultValue="Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors">
                Simpan Perubahan
              </button>
            </div>
          </div>
        )}

        {/* Tim Tab */}
        {activeTab === "tim" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Anggota Tim</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors">
                <Plus className="w-4 h-4" />
                Undang Anggota
              </button>
            </div>

            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold text-sm">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">
                      {member.role}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notifikasi Tab */}
        {activeTab === "notifikasi" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Pengaturan Notifikasi</h2>

            <div className="space-y-4">
              {([
                { key: "newApplicant" as const, label: "Pemberitahuan pelamar baru", desc: "Dapatkan notifikasi saat ada kandidat baru melamar" },
                { key: "lowonganStatus" as const, label: "Status lowongan", desc: "Notifikasi saat lowongan dilihat atau dilamar" },
                { key: "chatMessage" as const, label: "Pesan chat", desc: "Notifikasi saat ada pesan baru dari kandidat" },
                { key: "weeklyReport" as const, label: "Laporan mingguan", desc: "Ringkasan aktivitas lowongan setiap minggu" },
                { key: "marketing" as const, label: "Email promosi", desc: "Info produk dan promosi terbaru dari KerjaAjaDulu" },
              ]).map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => setNotifEmail((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      notifEmail[item.key] ? "bg-sky-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        notifEmail[item.key] ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors">
                Simpan Perubahan
              </button>
            </div>
          </div>
        )}

        {/* Keamanan Tab */}
        {activeTab === "keamanan" && (
          <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-sky-500" />
                Ubah Kata Sandi
              </h2>

              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Saat Ini</label>
                  <input
                    type="password"
                    placeholder="Masukkan kata sandi saat ini"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Baru</label>
                  <input
                    type="password"
                    placeholder="Masukkan kata sandi baru"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Kata Sandi Baru</label>
                  <input
                    type="password"
                    placeholder="Ulangi kata sandi baru"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors">
                  Ubah Kata Sandi
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-sky-500" />
                    Autentikasi Dua Faktor (2FA)
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Tambahkan lapisan keamanan ekstra pada akun Anda
                  </p>
                </div>
                <button
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    twoFactor ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      twoFactor ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
              {twoFactor && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-sm text-green-700 font-medium">
                    Autentikasi dua faktor telah aktif. Akun Anda lebih terlindungi.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CompanyLayout>
    </>
  );
}
