import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  Share2,
  Copy,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";

const mockJob = {
  id: 1,
  position: "Senior Frontend Developer",
  category: "Engineering",
  location: "Jakarta, Indonesia",
  type: "Full-time",
  salary: "Rp 20.000.000 - 30.000.000",
  description: `Kami mencari Senior Frontend Developer yang berpengalaman untuk bergabung dengan tim teknologi kami. Anda akan bertanggung jawab dalam mengembangkan dan memelihara aplikasi web yang digunakan oleh jutaan pengguna di seluruh dunia.

Sebagai Senior Frontend Developer, Anda akan bekerja sama dengan tim desain, product manager, dan backend developer untuk menciptakan pengalaman pengguna yang optimal dan inovatif.`,
  requirements: [
    "Pengalaman minimal 5 tahun dalam pengembangan frontend",
    "Menguasai React, Next.js, dan TypeScript",
    "Pengalaman dengan state management (Redux, Zustand)",
    "Memahami Responsive Design dan Accessibility",
    "Pengalaman dengan testing (Jest, React Testing Library)",
    "Kemampuan berkomunikasi yang baik dalam tim",
  ],
  benefits: [
    "Asuransi Kesehatan Premium",
    "Work From Home Hybrid",
    "Bonus Tahunan",
    "Pelatihan & Sertifikasi",
    "Stock Options",
    "Flexible Working Hours",
  ],
  status: "Aktif" as const,
  postedAt: "15 Januari 2024",
  applicants: 24,
  views: 1250,
  company: {
    name: "KerjaAjaDulu Corp",
    industry: "Technology",
    employees: "500+",
  },
};

export default function DetailJobPage() {
  const router = useRouter();
  const { id } = router.query;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    console.log("Deleting job:", id);
    router.push("/company/jobs");
  };

  return (
    <>
      <Head>
        <title>{mockJob.position} - KerjaAjaDulu.com</title>
        <meta name="description" content={`Detail lowongan ${mockJob.position}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="jobs">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/company/jobs"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Lowongan
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {mockJob.position}
                      </h1>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          mockJob.status === "Aktif"
                            ? "bg-green-100 text-green-700"
                            : mockJob.status === "Draft"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {mockJob.status}
                      </span>
                    </div>
                    <p className="text-gray-500 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {mockJob.company.name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {mockJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {mockJob.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {mockJob.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Diposting {mockJob.postedAt}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Deskripsi Pekerjaan
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {mockJob.description}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Persyaratan
                </h2>
                <ul className="space-y-3">
                  {mockJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Benefit
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {mockJob.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Aksi</h3>
                <div className="space-y-3">
                  <Link
                    href={`/company/jobs/${id}?edit=true`}
                    className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
                  >
                    <Edit className="w-5 h-5" />
                    Edit Lowongan
                  </Link>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                    Hapus Lowongan
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all text-sm"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Tersalin
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Salin Link
                        </>
                      )}
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all text-sm">
                      <Share2 className="w-4 h-4" />
                      Bagikan
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Statistik</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      Pelamar
                    </span>
                    <span className="font-bold text-gray-900">{mockJob.applicants}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Eye className="w-5 h-5" />
                      Dilihat
                    </span>
                    <span className="font-bold text-gray-900">{mockJob.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      Durasi Posting
                    </span>
                    <span className="font-bold text-gray-900">15 hari</span>
                  </div>
                </div>
              </div>

              {/* Preview Link */}
              <div className="bg-sky-50 rounded-2xl border border-sky-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Preview Lowongan</h3>
                    <p className="text-sm text-gray-500">Lihat seperti kandidat</p>
                  </div>
                </div>
                <Link
                  href={`/lowongan/${id}`}
                  className="w-full flex items-center justify-center gap-2 bg-white text-sky-600 py-3 rounded-xl font-semibold hover:bg-sky-100 transition-all border border-sky-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Buka Halaman Publik
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowDeleteModal(false)}
            />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Hapus Lowongan?
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Apakah Anda yakin ingin menghapus lowongan &quot;{mockJob.position}&quot;? 
                Semua data pelamar juga akan dihapus. Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleDelete}
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

function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
