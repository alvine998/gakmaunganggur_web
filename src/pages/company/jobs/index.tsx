import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
  Users,
  Clock,
} from "lucide-react";

type JobStatus = "Aktif" | "Draft" | "Ditutup";

interface Job {
  id: number;
  position: string;
  category: string;
  location: string;
  type: string;
  salary: string;
  applicants: number;
  status: JobStatus;
  postedAt: string;
}

const initialJobs: Job[] = [
  {
    id: 1,
    position: "Frontend Developer",
    category: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    salary: "Rp 15.000.000 - 25.000.000",
    applicants: 24,
    status: "Aktif",
    postedAt: "2024-01-15",
  },
  {
    id: 2,
    position: "UI/UX Designer",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "Rp 12.000.000 - 20.000.000",
    applicants: 18,
    status: "Aktif",
    postedAt: "2024-01-20",
  },
  {
    id: 3,
    position: "Backend Engineer",
    category: "Engineering",
    location: "Surabaya",
    type: "Full-time",
    salary: "Rp 18.000.000 - 28.000.000",
    applicants: 0,
    status: "Draft",
    postedAt: "2024-02-01",
  },
  {
    id: 4,
    position: "Marketing Manager",
    category: "Marketing",
    location: "Bandung",
    type: "Full-time",
    salary: "Rp 15.000.000 - 22.000.000",
    applicants: 32,
    status: "Aktif",
    postedAt: "2024-02-05",
  },
  {
    id: 5,
    position: "Data Analyst",
    category: "Data",
    location: "Jakarta",
    type: "Part-time",
    salary: "Rp 8.000.000 - 12.000.000",
    applicants: 15,
    status: "Ditutup",
    postedAt: "2024-01-10",
  },
  {
    id: 6,
    position: "Product Manager",
    category: "Product",
    location: "Yogyakarta",
    type: "Full-time",
    salary: "Rp 20.000.000 - 30.000.000",
    applicants: 11,
    status: "Draft",
    postedAt: "2024-02-10",
  },
];

const statusConfig: Record<JobStatus, string> = {
  Aktif: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Ditutup: "bg-red-100 text-red-700",
};

const filterTabs = ["Semua", "Aktif", "Draft", "Ditutup"] as const;

export default function CompanyJobsPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const itemsPerPage = 5;

  const filteredJobs = jobs.filter((job) => {
    const matchesTab = activeTab === "Semua" || job.status === activeTab;
    const matchesSearch =
      job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id: number) => {
    setShowDeleteModal(id);
  };

  const confirmDelete = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
    setShowDeleteModal(null);
  };

  return (
    <>
      <Head>
        <title>Lowongan Kerja Saya - KerjaAjaDulu.com</title>
        <meta name="description" content="Kelola lowongan kerja perusahaan Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="jobs">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Lowongan Kerja Saya
              </h1>
              <p className="text-gray-500 mt-1">
                Kelola lowongan kerja perusahaan Anda
              </p>
            </div>
            <Link
              href="/company/jobs/create"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-colors shadow-md"
            >
              <Plus className="w-5 h-5" />
              Tambah Lowongan Baru
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
                  <p className="text-sm text-gray-500">Total Lowongan</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="w-5 h-5 text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {jobs.filter((j) => j.status === "Aktif").length}
                  </p>
                  <p className="text-sm text-gray-500">Aktif</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {jobs.filter((j) => j.status === "Draft").length}
                  </p>
                  <p className="text-sm text-gray-500">Draft</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {jobs.reduce((sum, j) => sum + j.applicants, 0)}
                  </p>
                  <p className="text-sm text-gray-500">Total Pelamar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
            <div className="p-4 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cari posisi, kategori, atau lokasi..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-sky-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Posisi
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Kategori
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Lokasi
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Tipe
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Pelamar
                    </th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Status
                    </th>
                    <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-4">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {paginatedJobs.length > 0 ? (
                    paginatedJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">
                            {job.position}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-xs font-medium">
                            {job.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {job.type}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-900">
                            {job.applicants}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusConfig[job.status]}`}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/company/jobs/detail?id=${job.id}`}
                              className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                              title="Lihat Detail"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <Link
                              href={`/company/jobs/${job.id}`}
                              className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(job.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Hapus"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-16 text-center">
                        <div className="text-gray-400 mb-2">
                          <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        </div>
                        <p className="text-gray-500 font-medium">
                          Tidak ada lowongan ditemukan
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Coba ubah filter atau kata kunci pencarian
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-500">
                    Menampilkan {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, filteredJobs.length)}{" "}
                    dari {filteredJobs.length} lowongan
                  </p>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                            page === currentPage
                              ? "bg-sky-500 text-white shadow-md"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowDeleteModal(null)}
            />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hapus Lowongan
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Apakah Anda yakin ingin menghapus lowongan ini? Tindakan ini tidak
                dapat dibatalkan.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(null)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => confirmDelete(showDeleteModal)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </CompanyLayout>
    </>
  );
}
