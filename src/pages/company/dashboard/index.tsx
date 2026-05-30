import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Briefcase, Users, CheckCircle, Eye, Plus, Search } from "lucide-react";
import CompanyLayout from "@/components/company/CompanyLayout";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const statsCards = [
  { label: "Total Lowongan", value: "12", icon: Briefcase, bg: "bg-sky-500" },
  { label: "Total Pelamar", value: "256", icon: Users, bg: "bg-green-500" },
  { label: "Lowongan Aktif", value: "8", icon: CheckCircle, bg: "bg-sky-500" },
  { label: "Dilihat Hari Ini", value: "1,234", icon: Eye, bg: "bg-green-500" },
];

const lineOptions = {
  chart: { id: "applicants-line" as const },
  xaxis: { categories: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"] },
  colors: ["#0ea5e9"],
};

const lineSeries = [{ name: "Pelamar", data: [30, 40, 35, 50, 49, 60, 70] }];

const donutOptions = {
  chart: { id: "status-donut" as const },
  labels: ["Diterima", "Dalam Review", "Ditolak"],
  colors: ["#22c55e", "#0ea5e9", "#ef4444"],
};

const donutSeries = [45, 120, 91];

interface Application {
  name: string;
  position: string;
  status: string;
  date: string;
}

const recentApplications: Application[] = [
  { name: "Andi Pratama", position: "Frontend Developer", status: "Diterima", date: "28 Mei 2026" },
  { name: "Siti Rahmawati", position: "UI/UX Designer", status: "Dalam Review", date: "27 Mei 2026" },
  { name: "Budi Santoso", position: "Backend Developer", status: "Ditolak", date: "27 Mei 2026" },
  { name: "Dewi Lestari", position: "Project Manager", status: "Diterima", date: "26 Mei 2026" },
  { name: "Rizki Firmansyah", position: "Data Analyst", status: "Dalam Review", date: "26 Mei 2026" },
];

const statusStyles: Record<string, string> = {
  Diterima: "bg-green-100 text-green-700",
  "Dalam Review": "bg-sky-100 text-sky-700",
  Ditolak: "bg-red-100 text-red-700",
};

export default function CompanyDashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - KerjaAjaDulu.com</title>
        <meta name="description" content="Dashboard perusahaan KerjaAjaDulu.com" />
      </Head>

      <CompanyLayout activePage="dashboard">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Selamat datang kembali, PT Maju Bersama</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
                  <div className={`${card.bg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pelamar Mingguan</h2>
              <Chart type="line" options={lineOptions} series={lineSeries} height={280} />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Lamaran</h2>
              <Chart type="donut" options={donutOptions} series={donutSeries} height={280} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Lamaran Terbaru</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-sm font-medium text-gray-500">Nama</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Posisi</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Status</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Tanggal</th>
                    <th className="pb-3 text-sm font-medium text-gray-500">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-4 text-sm font-medium text-gray-900">{app.name}</td>
                      <td className="py-4 text-sm text-gray-600">{app.position}</td>
                      <td className="py-4">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[app.status]}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-gray-500">{app.date}</td>
                      <td className="py-4">
                        <Link href="/company/pelamar" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                          Lihat
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/pasang-lowongan"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Pasang Lowongan Baru
            </Link>
            <Link
              href="/cari-kandidat"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Search className="w-5 h-5" />
              Cari Kandidat
            </Link>
          </div>
        </div>
      </CompanyLayout>
    </>
  );
}
