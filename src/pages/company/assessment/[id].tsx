import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  HelpCircle,
  Timer,
  Users,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronRight,
  GripVertical,
  Award,
  Search,
  Eye,
  Play,
  FileText,
  Download,
} from "lucide-react";

interface Question {
  id: number;
  type: "Pilihan Ganda" | "Essay" | "Coding Challenge";
  question: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
}

interface Participant {
  id: number;
  name: string;
  email: string;
  avatar: string;
  score: number;
  totalScore: number;
  status: "Selesai" | "Sedang Mengerjakan" | "Belum Mulai";
  completedAt: string;
}

interface AssessmentData {
  title: string;
  position: string;
  duration: number;
  status: "Active" | "Draft";
}

interface QuestionFormState {
  type: Question["type"];
  question: string;
  options: string[];
  correctAnswer: string;
  points: string;
}

const initialQuestions: Question[] = [
  {
    id: 1,
    type: "Pilihan Ganda",
    question: "Apa kepanjangan dari DOM dalam konteks web development?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Output Mode",
      "Document Oriented Mapping",
    ],
    correctAnswer: "Document Object Model",
    points: 10,
  },
  {
    id: 2,
    type: "Pilihan Ganda",
    question: "Manakah yang bukan merupakan framework JavaScript?",
    options: ["React", "Angular", "Django", "Vue.js"],
    correctAnswer: "Django",
    points: 10,
  },
  {
    id: 3,
    type: "Pilihan Ganda",
    question: "Function yang digunakan untuk memilih element di DOM adalah?",
    options: [
      "document.getElement()",
      "document.querySelector()",
      "document.findElement()",
      "document.locate()",
    ],
    correctAnswer: "document.querySelector()",
    points: 10,
  },
  {
    id: 4,
    type: "Essay",
    question: "Jelaskan perbedaan antara useState dan useEffect dalam React!",
    points: 20,
  },
  {
    id: 5,
    type: "Coding Challenge",
    question: "Buatlah fungsi JavaScript untuk membalikkan sebuah string tanpa menggunakan method reverse()!",
    points: 30,
  },
];

const participants: Participant[] = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    email: "ahmad@email.com",
    avatar: "AF",
    score: 75,
    totalScore: 100,
    status: "Selesai",
    completedAt: "2024-02-15 14:30",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    email: "siti@email.com",
    avatar: "SN",
    score: 85,
    totalScore: 100,
    status: "Selesai",
    completedAt: "2024-02-15 13:45",
  },
  {
    id: 3,
    name: "Budi Santoso",
    email: "budi@email.com",
    avatar: "BS",
    score: 60,
    totalScore: 100,
    status: "Selesai",
    completedAt: "2024-02-15 15:20",
  },
  {
    id: 4,
    name: "Diana Putri",
    email: "diana@email.com",
    avatar: "DP",
    score: 0,
    totalScore: 100,
    status: "Sedang Mengerjakan",
    completedAt: "",
  },
  {
    id: 5,
    name: "Rizky Pratama",
    email: "rizky@email.com",
    avatar: "RP",
    score: 0,
    totalScore: 100,
    status: "Belum Mulai",
    completedAt: "",
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

// Draggable Question Component
interface DraggableQuestionProps {
  question: Question;
  index: number;
  moveQuestion: (dragIndex: number, hoverIndex: number) => void;
  onEdit: (question: Question) => void;
  onDelete: (id: number) => void;
}

function DraggableQuestion({
  question,
  index,
  moveQuestion,
  onEdit,
  onDelete,
}: DraggableQuestionProps) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "QUESTION",
    item: () => ({ id: question.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "QUESTION",
    hover: (item: { id: number; index: number }) => {
      if (item.index !== index) {
        moveQuestion(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => {
        drag(drop(node));
      }}
      className={`bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-gray-300 cursor-move" />
          <span className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-sm">
            {index + 1}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-sky-50 text-sky-600">
              {question.type}
            </span>
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
              {question.points} poin
            </span>
          </div>
          <p className="text-gray-900 font-medium mb-3">{question.question}</p>

          {question.options && (
            <div className="space-y-2 ml-4">
              {question.options.map((option, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-sm ${
                    option === question.correctAnswer
                      ? "text-green-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {option === question.correctAnswer ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                  )}
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(question)}
            className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(question.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DetailAssessment() {
  const router = useRouter();
  const { id } = router.query;

  const [activeTab, setActiveTab] = useState<"questions" | "participants">("questions");
  const [questions, setQuestions] = useState(initialQuestions);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);
  const [showEditAssessmentModal, setShowEditAssessmentModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewCurrentQuestion, setPreviewCurrentQuestion] = useState(0);
  const [previewAnswers, setPreviewAnswers] = useState<Record<number, string>>({});
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    title: "Frontend Developer Assessment",
    position: "Senior Frontend Developer",
    duration: 60,
    status: "Active",
  });
  const [newQuestion, setNewQuestion] = useState<QuestionFormState>({
    type: "Pilihan Ganda",
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    points: "",
  });

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const moveQuestion = useCallback((dragIndex: number, hoverIndex: number) => {
    setQuestions((prev) => {
      const updated = [...prev];
      const [dragged] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, dragged);
      return updated;
    });
  }, []);

  const handleAddQuestion = () => {
    const question: Question = {
      id: Math.max(...questions.map((q) => q.id), 0) + 1,
      type: newQuestion.type,
      question: newQuestion.question,
      options: newQuestion.type === "Pilihan Ganda" ? newQuestion.options : undefined,
      correctAnswer: newQuestion.type === "Pilihan Ganda" ? newQuestion.correctAnswer : undefined,
      points: parseInt(newQuestion.points) || 10,
    };
    setQuestions([...questions, question]);
    setShowAddModal(false);
    resetQuestionForm();
  };

  const handleEditQuestion = () => {
    if (showEditModal === null) return;
    setQuestions(
      questions.map((q) =>
        q.id === showEditModal
          ? {
              ...q,
              type: newQuestion.type,
              question: newQuestion.question,
              options: newQuestion.type === "Pilihan Ganda" ? newQuestion.options : undefined,
              correctAnswer: newQuestion.type === "Pilihan Ganda" ? newQuestion.correctAnswer : undefined,
              points: parseInt(newQuestion.points) || q.points,
            }
          : q
      )
    );
    setShowEditModal(null);
  };

  const handleDeleteQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
    setShowDeleteModal(null);
  };

  const handleSaveAssessment = () => {
    setShowEditAssessmentModal(false);
  };

  const openEditModal = (question: Question) => {
    setNewQuestion({
      type: question.type,
      question: question.question,
      options: question.options || ["", "", "", ""],
      correctAnswer: question.correctAnswer || "",
      points: question.points.toString(),
    });
    setShowEditModal(question.id);
  };

  const resetQuestionForm = () => {
    setNewQuestion({
      type: "Pilihan Ganda",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      points: "",
    });
  };

  return (
    <>
      <Head>
        <title>Detail Assessment - KerjaAjaDulu.com</title>
        <meta name="description" content="Detail dan kelola assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="assessment">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/company/assessment"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Assessment
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {assessmentData.title}
                </h1>
                <p className="text-gray-500">{assessmentData.position}</p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    assessmentData.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {assessmentData.status === "Active" ? "Aktif" : "Draft"}
                </span>
                <button
                  onClick={() => {
                    setPreviewCurrentQuestion(0);
                    setPreviewAnswers({});
                    setShowPreviewModal(true);
                  }}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => setShowEditAssessmentModal(true)}
                  className="flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
                >
                  <Edit className="w-4 h-4" />
                  Edit Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{questions.length}</p>
                  <p className="text-sm text-gray-500">Total Soal</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalPoints}</p>
                  <p className="text-sm text-gray-500">Total Poin</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Timer className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{assessmentData.duration}</p>
                  <p className="text-sm text-gray-500">Durasi (menit)</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{participants.length}</p>
                  <p className="text-sm text-gray-500">Peserta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("questions")}
              className={`px-5 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "questions"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Soal ({questions.length})
              </span>
            </button>
            <button
              onClick={() => setActiveTab("participants")}
              className={`px-5 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "participants"
                  ? "border-sky-500 text-sky-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Peserta ({participants.length})
              </span>
            </button>
          </div>

          {/* Questions Tab */}
          {activeTab === "questions" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 flex items-center gap-2">
                  <GripVertical className="w-4 h-4" />
                  Seret untuk mengubah urutan soal
                </p>
                <button
                  onClick={() => {
                    resetQuestionForm();
                    setShowAddModal(true);
                  }}
                  className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Soal
                </button>
              </div>

              <DndProvider backend={HTML5Backend}>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <DraggableQuestion
                      key={question.id}
                      question={question}
                      index={index}
                      moveQuestion={moveQuestion}
                      onEdit={openEditModal}
                      onDelete={(id) => setShowDeleteModal(id)}
                    />
                  ))}
                </div>
              </DndProvider>
            </div>
          )}

          {/* Participants Tab */}
          {activeTab === "participants" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Cari peserta..."
                      className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 w-64"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    {participants.filter((p) => p.status === "Selesai").length} Selesai
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Clock className="w-4 h-4" />
                    {participants.filter((p) => p.status === "Sedang Mengerjakan").length} Sedang Mengerjakan
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Peserta</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Skor</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Selesai Pada</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {participants.map((participant) => (
                      <tr key={participant.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-semibold text-sm">
                              {participant.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{participant.name}</p>
                              <p className="text-sm text-gray-500">{participant.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  participant.score >= 80
                                    ? "bg-green-500"
                                    : participant.score >= 60
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                                }`}
                                style={{ width: `${participant.score}%` }}
                              />
                            </div>
                            <span className="font-semibold text-gray-900">
                              {participant.score}/{participant.totalScore}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              participant.status === "Selesai"
                                ? "bg-green-100 text-green-700"
                                : participant.status === "Sedang Mengerjakan"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {participant.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {participant.completedAt || "-"}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelectedParticipant(participant)}
                            className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Edit Assessment Modal */}
        {showEditAssessmentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-lg w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Edit Assessment</h3>
                <button
                  onClick={() => setShowEditAssessmentModal(false)}
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
                    value={assessmentData.title}
                    onChange={(e) => setAssessmentData({ ...assessmentData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Posisi Terkait</label>
                  <div className="relative">
                    <select
                      value={assessmentData.position}
                      onChange={(e) => setAssessmentData({ ...assessmentData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm appearance-none bg-white"
                    >
                      {jobPositions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durasi (menit)</label>
                  <input
                    type="number"
                    value={assessmentData.duration}
                    onChange={(e) =>
                      setAssessmentData({ ...assessmentData, duration: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setAssessmentData({ ...assessmentData, status: "Active" })}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                        assessmentData.status === "Active"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200 text-gray-600 hover:border-green-300"
                      }`}
                    >
                      Aktif
                    </button>
                    <button
                      onClick={() => setAssessmentData({ ...assessmentData, status: "Draft" })}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                        assessmentData.status === "Draft"
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-gray-200 text-gray-600 hover:border-amber-300"
                      }`}
                    >
                      Draft
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => setShowEditAssessmentModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={handleSaveAssessment}
                  className="px-5 py-2.5 rounded-xl font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md text-sm flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Question Modal */}
        {(showAddModal || showEditModal !== null) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {showEditModal !== null ? "Edit Soal" : "Tambah Soal Baru"}
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(null);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                {/* Question Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Soal</label>
                  <div className="relative">
                    <select
                      value={newQuestion.type}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, type: e.target.value as Question["type"] })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm appearance-none bg-white"
                    >
                      <option value="Pilihan Ganda">Pilihan Ganda</option>
                      <option value="Essay">Essay</option>
                      <option value="Coding Challenge">Coding Challenge</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pertanyaan</label>
                  <textarea
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                    placeholder="Tuliskan pertanyaan di sini..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                  />
                </div>

                {/* Options (for multiple choice) */}
                {newQuestion.type === "Pilihan Ganda" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Opsi Jawaban</label>
                    <div className="space-y-3">
                      {newQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={newQuestion.correctAnswer === option && option !== ""}
                            onChange={() => setNewQuestion({ ...newQuestion, correctAnswer: option })}
                            className="w-4 h-4 text-sky-500 focus:ring-sky-500"
                          />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => {
                              const updated = [...newQuestion.options];
                              updated[index] = e.target.value;
                              setNewQuestion({ ...newQuestion, options: updated });
                            }}
                            placeholder={`Opsi ${index + 1}`}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Pilih radio button untuk menandai jawaban benar</p>
                  </div>
                )}

                {/* Points */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Poin</label>
                  <input
                    type="number"
                    value={newQuestion.points}
                    onChange={(e) => setNewQuestion({ ...newQuestion, points: e.target.value })}
                    placeholder="10"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={showEditModal !== null ? handleEditQuestion : handleAddQuestion}
                  className="px-5 py-2.5 rounded-xl font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md text-sm flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {showEditModal !== null ? "Simpan Perubahan" : "Tambah Soal"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hapus Soal?</h3>
                <p className="text-gray-500 mb-6">
                  Tindakan ini tidak dapat dibatalkan. Soal akan dihapus permanen dari assessment ini.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteModal(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => handleDeleteQuestion(showDeleteModal)}
                    className="flex-1 px-4 py-2.5 rounded-xl font-medium text-white bg-red-500 hover:bg-red-600 transition-all"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Preview Assessment Modal */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Preview Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Preview Assessment</h3>
                    <p className="text-sm text-gray-500">Tampilan seperti yang dilihat kandidat</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Preview Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Assessment Info */}
                <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-2xl p-6 text-white mb-6">
                  <h2 className="text-2xl font-bold mb-2">{assessmentData.title}</h2>
                  <p className="text-sky-100 mb-4">{assessmentData.position}</p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" />
                      {questions.length} Soal
                    </span>
                    <span className="flex items-center gap-1">
                      <Timer className="w-4 h-4" />
                      {assessmentData.duration} Menit
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {totalPoints} Poin
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      Soal {previewCurrentQuestion + 1} dari {questions.length}
                    </span>
                    <span className="text-sky-600 font-medium">
                      {Math.round(((previewCurrentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-sky-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((previewCurrentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                {questions[previewCurrentQuestion] && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-sm">
                        {previewCurrentQuestion + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-sky-50 text-sky-600">
                        {questions[previewCurrentQuestion].type}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                        {questions[previewCurrentQuestion].points} poin
                      </span>
                    </div>

                    <p className="text-gray-900 font-medium text-lg mb-6">
                      {questions[previewCurrentQuestion].question}
                    </p>

                    {/* Options for Multiple Choice */}
                    {questions[previewCurrentQuestion].type === "Pilihan Ganda" &&
                      questions[previewCurrentQuestion].options && (
                        <div className="space-y-3">
                          {questions[previewCurrentQuestion].options!.map((option, i) => (
                            <label
                              key={i}
                              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                previewAnswers[questions[previewCurrentQuestion].id] === option
                                  ? "border-sky-500 bg-sky-50"
                                  : "border-gray-200 hover:border-sky-300 hover:bg-gray-50"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  previewAnswers[questions[previewCurrentQuestion].id] === option
                                    ? "border-sky-500 bg-sky-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {previewAnswers[questions[previewCurrentQuestion].id] === option && (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                      )}

                    {/* Essay Input */}
                    {questions[previewCurrentQuestion].type === "Essay" && (
                      <textarea
                        placeholder="Tuliskan jawaban Anda di sini..."
                        rows={5}
                        value={previewAnswers[questions[previewCurrentQuestion].id] || ""}
                        onChange={(e) =>
                          setPreviewAnswers({
                            ...previewAnswers,
                            [questions[previewCurrentQuestion].id]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                      />
                    )}

                    {/* Coding Challenge Input */}
                    {questions[previewCurrentQuestion].type === "Coding Challenge" && (
                      <div>
                        <div className="bg-gray-900 rounded-xl p-4 mb-3">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <textarea
                            placeholder="// Tuliskan kode Anda di sini..."
                            rows={8}
                            value={previewAnswers[questions[previewCurrentQuestion].id] || ""}
                            onChange={(e) =>
                              setPreviewAnswers({
                                ...previewAnswers,
                                [questions[previewCurrentQuestion].id]: e.target.value,
                              })
                            }
                            className="w-full bg-transparent text-green-400 font-mono text-sm outline-none resize-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Question Navigation */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPreviewCurrentQuestion(i)}
                      className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                        i === previewCurrentQuestion
                          ? "bg-sky-500 text-white shadow-md"
                          : previewAnswers[questions[i].id]
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-100 bg-gray-50">
                <button
                  onClick={() => setPreviewCurrentQuestion(Math.max(0, previewCurrentQuestion - 1))}
                  disabled={previewCurrentQuestion === 0}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Sebelumnya
                </button>

                {previewCurrentQuestion === questions.length - 1 ? (
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Selesai Preview
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setPreviewCurrentQuestion(Math.min(questions.length - 1, previewCurrentQuestion + 1))
                    }
                    className="flex items-center gap-2 bg-sky-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Participant Detail Modal */}
        {selectedParticipant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-xl">
                      {selectedParticipant.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedParticipant.name}</h3>
                      <p className="text-gray-500">{selectedParticipant.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedParticipant(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Score Summary */}
              <div className="p-6 border-b border-gray-100">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      {selectedParticipant.score}
                      <span className="text-lg text-gray-400">/{selectedParticipant.totalScore}</span>
                    </p>
                    <p className="text-sm text-gray-500">Total Skor</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className={`text-3xl font-bold mb-1 ${
                      selectedParticipant.score >= 80
                        ? "text-green-600"
                        : selectedParticipant.score >= 60
                        ? "text-amber-600"
                        : "text-red-600"
                    }`}>
                      {selectedParticipant.score}%
                    </p>
                    <p className="text-sm text-gray-500">Persentase</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedParticipant.status === "Selesai"
                        ? "bg-green-100 text-green-700"
                        : selectedParticipant.status === "Sedang Mengerjakan"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {selectedParticipant.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-2">Status</p>
                  </div>
                </div>
              </div>

              {/* Assessment Info */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Informasi Assessment</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Judul Assessment</p>
                      <p className="font-medium text-gray-900">{assessmentData.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Soal</p>
                      <p className="font-medium text-gray-900">{questions.length} soal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Timer className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Durasi</p>
                      <p className="font-medium text-gray-900">{assessmentData.duration} menit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Selesai Pada</p>
                      <p className="font-medium text-gray-900">
                        {selectedParticipant.completedAt || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Rincian Jawaban</h4>
                <div className="space-y-3">
                  {questions.map((question, index) => {
                    const isCorrect = selectedParticipant.score >= 70 && index < 3;
                    const isPartial = selectedParticipant.score >= 50 && index === 3;
                    return (
                      <div
                        key={question.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isCorrect
                            ? "bg-green-100 text-green-600"
                            : isPartial
                            ? "bg-amber-100 text-amber-600"
                            : "bg-red-100 text-red-600"
                        }`}>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : isPartial ? (
                            <Clock className="w-4 h-4" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 line-clamp-1">
                            Soal {index + 1}: {question.question}
                          </p>
                          <p className="text-xs text-gray-500">{question.type} • {question.points} poin</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-semibold ${
                            isCorrect ? "text-green-600" : isPartial ? "text-amber-600" : "text-red-600"
                          }`}>
                            {isCorrect ? question.points : isPartial ? Math.round(question.points / 2) : 0}
                          </p>
                          <p className="text-xs text-gray-400">/{question.points}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 flex items-center justify-between">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
                  <Download className="w-4 h-4" />
                  Export Hasil
                </button>
                <div className="flex gap-3">
                  {selectedParticipant.status === "Selesai" && (
                    <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                      Undang Wawancara
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedParticipant(null)}
                    className="px-5 py-2.5 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Tutup
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
