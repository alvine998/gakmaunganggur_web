import { useState } from "react";
import { Briefcase, CheckCircle2, Clock, XCircle, Eye, Search } from "lucide-react";
import JobSeekerLayout from "@/components/jobseeker/JobSeekerLayout";

const statsCards = [
  { label: "Total Lamaran", value: "6", icon: Briefcase, bg: "bg-sky-500" },
  { label: "Diterima", value: "2", icon: CheckCircle2, bg: "bg-green-500" },
  { label: "Dalam Review", value: "3", icon: Clock, bg: "bg-amber-500" },
  { label: "Ditolak", value: "1", icon: XCircle, bg: "bg-red-500" },
];

type FilterTab = "Semua" | "Diterima" | "Dalam Review" | "Ditolak";

const filterTabs: FilterTab[] = ["Semua", "Diterima", "Dalam Review", "Ditolak"];

interface Application {
  id: number;
  jobTitle: string;
  companyName: string;
  companyInitial: string;
  companyColor: string;
  appliedDate: string;
  status: "Diterima" | "Dalam Review" | "Ditolak";
}

const applications: Application[] = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "PT Tech Maju",
    companyInitial: "TM",
    companyColor: "bg-sky-500",
    appliedDate: "28 Mei 2026",
    status: "Diterima",
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    companyName: "CV Kreatif Solusi",
    companyInitial: "KS",
    companyColor: "bg-green-500",
    appliedDate: "27 Mei 2026",
    status: "Dalam Review",
  },
  {
    id: 3,
    jobTitle: "Backend Developer",
    companyName: "PT Digital Nusantara",
    companyInitial: "DN",
    companyColor: "bg-sky-500",
    appliedDate: "26 Mei 2026",
    status: "Diterima",
  },
  {
    id: 4,
    jobTitle: "Mobile App Developer",
    companyName: "PT Aplikasi Hebat",
    companyInitial: "AH",
    companyColor: "bg-green-500",
    appliedDate: "25 Mei 2026",
    status: "Dalam Review",
  },
  {
    id: 5,
    jobTitle: "Data Analyst",
    companyName: "PT Data Smart",
    companyInitial: "DS",
    companyColor: "bg-sky-500",
    appliedDate: "24 Mei 2026",
    status: "Ditolak",
  },
  {
    id: 6,
    jobTitle: "Full Stack Developer",
    companyName: "CV Web Solusi",
    companyInitial: "WS",
    companyColor: "bg-green-500",
    appliedDate: "23 Mei 2026",
    status: "Dalam Review",
  },
];

const statusStyles: Record<string, string> = {
  Diterima: "bg-green-100 text-green-700",
  "Dalam Review": "bg-amber-100 text-amber-700",
  Ditolak: "bg-red-100 text-red-700",
};

export default function ApplicationHistory() {
  const [activeTab, setActiveTab] = useState<FilterTab>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApplications = applications.filter((app) => {
    const matchesTab = activeTab === "Semua" || app.status === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <JobSeekerLayout activePage="history" title="Riwayat Lamaran">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Riwayat Lamaran</h1>
          <p className="text-gray-500 mt-1">Lacak semua lamaran kerja kamu di sini</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-sky-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari lamaran..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">Tidak ada lamaran ditemukan</p>
              </div>
            ) : (
              filteredApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-sky-200 transition-colors gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${app.companyColor} w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                      {app.companyInitial}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{app.jobTitle}</h3>
                      <p className="text-sm text-gray-500">{app.companyName}</p>
                      <p className="text-xs text-gray-400 mt-1">Dilamar: {app.appliedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-16 sm:ml-0">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[app.status]}`}>
                      {app.status}
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors">
                      <Eye className="w-4 h-4" />
                      Detail
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </JobSeekerLayout>
  );
}
