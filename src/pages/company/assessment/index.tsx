import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  FileText,
  Timer,
  HelpCircle,
  ChevronDown,
  X,
  ClipboardCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface Assessment {
  id: number;
  title: string;
  position: string;
  questions: number;
  duration: number;
  status: "Active" | "Draft";
  createdAt: string;
  participants: number;
}

const initialAssessments: Assessment[] = [
  {
    id: 1,
    title: "Frontend Developer Assessment",
    position: "Senior Frontend Developer",
    questions: 25,
    duration: 60,
    status: "Active",
    createdAt: "2024-01-15",
    participants: 45,
  },
  {
    id: 2,
    title: "Backend Engineer Test",
    position: "Backend Developer",
    questions: 30,
    duration: 90,
    status: "Active",
    createdAt: "2024-01-20",
    participants: 32,
  },
  {
    id: 3,
    title: "UI/UX Design Challenge",
    position: "UI/UX Designer",
    questions: 15,
    duration: 45,
    status: "Draft",
    createdAt: "2024-02-01",
    participants: 0,
  },
  {
    id: 4,
    title: "DevOps Knowledge Check",
    position: "DevOps Engineer",
    questions: 20,
    duration: 50,
    status: "Active",
    createdAt: "2024-02-10",
    participants: 18,
  },
];

const jobPositions = [
  "Senior Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Mobile Developer",
  "Data Analyst",
];

const questionTypes = [
  "Pilihan Ganda",
  "Essay",
  "Coding Challenge",
  "Kombinasi",
];

export default function AssessmentPage() {
  const [assessments, setAssessments] = useState(initialAssessments);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const [newAssessment, setNewAssessment] = useState({
    title: "",
    position: "",
    questions: "",
    duration: "",
    questionType: "",
  });

  const handleCreate = () => {
    const assessment: Assessment = {
      id: assessments.length + 1,
      title: newAssessment.title,
      position: newAssessment.position,
      questions: parseInt(newAssessment.questions) || 0,
      duration: parseInt(newAssessment.duration) || 0,
      status: "Draft",
      createdAt: new Date().toISOString().split("T")[0],
      participants: 0,
    };
    setAssessments([...assessments, assessment]);
    setShowModal(false);
    setNewAssessment({ title: "", position: "", questions: "", duration: "", questionType: "" });
  };

  const handleDelete = (id: number) => {
    setAssessments(assessments.filter((a) => a.id !== id));
    setShowDeleteModal(null);
  };

  return (
    <>
      <Head>
        <title>Assessment - KerjaAjaDulu.com</title>
        <meta name="description" content="Kelola assessment untuk kandidat Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="assessment">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment</h1>
              <p className="text-gray-500">Buat dan kelola assessment untuk mengukur kemampuan kandidat</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-sky-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
            >
              <Plus className="w-5 h-5" />
              Buat Assessment Baru
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{assessments.length}</p>
                  <p className="text-sm text-gray-500">Total Assessment</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {assessments.filter((a) => a.status === "Active").length}
                  </p>
                  <p className="text-sm text-gray-500">Aktif</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {assessments.filter((a) => a.status === "Draft").length}
                  </p>
                  <p className="text-sm text-gray-500">Draft</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {assessments.reduce((sum, a) => sum + a.questions, 0)}
                  </p>
                  <p className="text-sm text-gray-500">Total Soal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment List */}
          <div className="space-y-4">
            {assessments.map((assessment) => (
              <div
                key={assessment.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{assessment.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{assessment.position}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <HelpCircle className="w-4 h-4" />
                          {assessment.questions} soal
                        </span>
                        <span className="flex items-center gap-1">
                          <Timer className="w-4 h-4" />
                          {assessment.duration} menit
                        </span>
                        <span className="flex items-center gap-1">
                          <ClipboardCheck className="w-4 h-4" />
                          {assessment.participants} peserta
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Status Badge */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        assessment.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {assessment.status === "Active" ? "Aktif" : "Draft"}
                    </span>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/company/assessment/${assessment.id}`}
                        className="p-2.5 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
                        title="Lihat Detail"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`/company/assessment/${assessment.id}?edit=true`}
                        className="p-2.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => setShowDeleteModal(assessment.id)}
                        className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Assessment Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-lg w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Buat Assessment Baru</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Judul Assessment</label>
                  <input
                    type="text"
                    value={newAssessment.title}
                    onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })}
                    placeholder="Contoh: Frontend Developer Assessment"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Posisi Terkait</label>
                  <div className="relative">
                    <select
                      value={newAssessment.position}
                      onChange={(e) => setNewAssessment({ ...newAssessment, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm appearance-none bg-white"
                    >
                      <option value="">Pilih posisi</option>
                      {jobPositions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Duration & Questions */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Soal</label>
                    <input
                      type="number"
                      value={newAssessment.questions}
                      onChange={(e) => setNewAssessment({ ...newAssessment, questions: e.target.value })}
                      placeholder="25"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Durasi (menit)</label>
                    <input
                      type="number"
                      value={newAssessment.duration}
                      onChange={(e) => setNewAssessment({ ...newAssessment, duration: e.target.value })}
                      placeholder="60"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Question Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Soal</label>
                  <div className="grid grid-cols-2 gap-2">
                    {questionTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setNewAssessment({ ...newAssessment, questionType: type })}
                        className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                          newAssessment.questionType === type
                            ? "border-sky-500 bg-sky-50 text-sky-700"
                            : "border-gray-200 text-gray-600 hover:border-sky-300 hover:bg-sky-50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={handleCreate}
                  className="px-5 py-2.5 rounded-xl font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md text-sm"
                >
                  Buat Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Assessment?</h3>
                <p className="text-gray-500 mb-6">
                  Tindakan ini tidak dapat dibatalkan. Semua data assessment akan dihapus permanen.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteModal(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => handleDelete(showDeleteModal)}
                    className="flex-1 px-4 py-2.5 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 transition-all"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </CompanyLayout>
    </>
  );
}
