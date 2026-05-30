import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import Pagination from "@/components/ui/Pagination";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type JobStatus = "Aktif" | "Draft" | "Ditutup";

interface Job {
  id: number;
  position: string;
  category: string;
  location: string;
  applicants: number;
  status: JobStatus;
}

const mockJobs: Job[] = [
  {
    id: 1,
    position: "Frontend Developer",
    category: "Engineering",
    location: "Jakarta",
    applicants: 24,
    status: "Aktif",
  },
  {
    id: 2,
    position: "UI/UX Designer",
    category: "Design",
    location: "Remote",
    applicants: 18,
    status: "Aktif",
  },
  {
    id: 3,
    position: "Backend Engineer",
    category: "Engineering",
    location: "Surabaya",
    applicants: 0,
    status: "Draft",
  },
  {
    id: 4,
    position: "Marketing Manager",
    category: "Marketing",
    location: "Bandung",
    applicants: 32,
    status: "Aktif",
  },
  {
    id: 5,
    position: "Data Analyst",
    category: "Data",
    location: "Jakarta",
    applicants: 0,
    status: "Ditutup",
  },
  {
    id: 6,
    position: "Product Manager",
    category: "Product",
    location: "Yogyakarta",
    applicants: 11,
    status: "Draft",
  },
];

const statusConfig: Record<JobStatus, string> = {
  Aktif: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Ditutup: "bg-red-100 text-red-700",
};

const filterTabs = ["Semua", "Aktif", "Draft", "Ditutup"] as const;

export default function CompanyJobsPage() {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const itemsPerPage = 5;

  const filteredJobs = mockJobs.filter((job) => {
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
    console.log("Deleting job:", id);
    setShowDeleteModal(null);
  };

  return (
    <CompanyLayout activePage="jobs" title="Lowongan Kerja Saya">
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
          <button className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-colors shadow-md">
            <Plus className="w-5 h-5" />
            Tambah Lowongan Baru
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
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

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mt-4">
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
            <table className="w-full">
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
                        {job.location}
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
                          <button
                            className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                            title="Lihat"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
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
                    <td colSpan={6} className="px-6 py-16 text-center">
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
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Menampilkan {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, filteredJobs.length)}{" "}
                  dari {filteredJobs.length} lowongan
                </p>
                <div className="flex items-center gap-2">
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
  );
}
