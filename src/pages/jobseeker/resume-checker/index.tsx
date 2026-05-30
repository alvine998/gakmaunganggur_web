import { useState, useCallback } from "react";
import {
  Upload,
  FileText,
  Sparkles,
  Award,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  Trash2,
  Download,
  Lightbulb,
  Plus,
} from "lucide-react";
import JobSeekerLayout from "@/components/jobseeker/JobSeekerLayout";

interface AnalysisResult {
  overallScore: number;
  sections: {
    name: string;
    score: number;
    color: string;
  }[];
  strengths: string[];
  improvements: string[];
  recommendedSkills: string[];
}

const mockResult: AnalysisResult = {
  overallScore: 78,
  sections: [
    { name: "Format & Layout", score: 85, color: "bg-sky-500" },
    { name: "Keywords", score: 72, color: "bg-green-500" },
    { name: "Experience", score: 80, color: "bg-sky-500" },
    { name: "Education", score: 90, color: "bg-green-500" },
    { name: "Skills", score: 65, color: "bg-amber-500" },
  ],
  strengths: [
    "Format resume sudah rapi dan profesional",
    "Pengalaman kerja relevan dengan posisi yang dilamar",
    "Pendidikan sesuai dengan bidang keahlian",
    "Menggunakan kata kunci yang relevan untuk industri tech",
  ],
  improvements: [
    "Tambahkan lebih banyak metrics dan angka dalam pencapaian kerja",
    "Perjelas deskripsi proyek dengan framework STAR",
    "Tambahkan sertifikasi atau kursus terkait",
  ],
  recommendedSkills: [
    "TypeScript",
    "Next.js",
    "Docker",
    "CI/CD",
    "AWS / Cloud Services",
  ],
};

const tips = [
  {
    title: "Gunakan Format ATS-Friendly",
    description: "Hindari tabel, kolom, dan grafik yang rumit. Gunakan format yang mudah dibaca oleh sistem ATS.",
  },
  {
    title: "Quantify Your Achievements",
    description: "Gunakan angka dan metrik untuk membuktikan dampak kerja Anda. Contoh: 'Meningkatkan performa aplikasi 40%'.",
  },
  {
    title: "Tailor Your Resume",
    description: "Sesuaikan resume dengan deskripsi pekerjaan. Gunakan kata kunci yang sama dengan yang ada di job posting.",
  },
  {
    title: "Keep It Updated",
    description: "Perbarui resume Anda secara berkala dengan proyek terbaru, sertifikasi, dan skill baru yang dikuasai.",
  },
];

export default function ResumeChecker() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      analyzeResume();
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      analyzeResume();
    }
  }, []);

  const analyzeResume = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <JobSeekerLayout activePage="resume-checker" title="AI Resume Checker">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-2xl sm:text-3xl font-bold">AI Resume Checker</h1>
          </div>
          <p className="text-sky-100 max-w-2xl">
            Unggah resume kamu dan dapatkan analisis instan menggunakan kecerdasan buatan.
            Ketahui kekuatan dan area yang perlu diperbaiki.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          {!file ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-colors cursor-pointer ${
                isDragOver
                  ? "border-sky-500 bg-sky-50"
                  : "border-gray-300 hover:border-sky-400 hover:bg-gray-50"
              }`}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Seret & lepas resume kamu di sini
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  atau klik untuk memilih file
                </p>
                <div className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-sky-600 transition-colors">
                  <FileText className="w-4 h-4" />
                  Pilih File PDF
                </div>
                <p className="text-xs text-gray-400 mt-4">Maksimal 5MB, format PDF</p>
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {isAnalyzing && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-sky-200 border-t-sky-500 rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Menganalisis resume kamu...</p>
                  <p className="text-sm text-gray-400 mt-1">Ini biasanya memakan waktu beberapa detik</p>
                </div>
              )}

              {result && !isAnalyzing && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="10"
                            strokeDasharray={`${(result.overallScore / 100) * 326.7} 326.7`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-gray-900">{result.overallScore}</span>
                          <span className="text-xs text-gray-500">/ 100</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-2">Skor Keseluruhan</p>
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className="text-sm font-semibold text-gray-900">Skor Per Bagian</h3>
                      {result.sections.map((section) => (
                        <div key={section.name} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{section.name}</span>
                            <span className="font-medium text-gray-900">{section.score}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className={`${section.color} h-2 rounded-full transition-all`}
                              style={{ width: `${section.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-green-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-green-800">Kekuatan</h3>
                      </div>
                      <ul className="space-y-2">
                        {result.strengths.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 bg-amber-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                        <h3 className="font-semibold text-amber-800">Yang Perlu Diperbaiki</h3>
                      </div>
                      <ul className="space-y-2">
                        {result.improvements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
                            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-sky-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-sky-600" />
                      <h3 className="font-semibold text-sky-800">Skill yang Direkomendasikan</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {result.recommendedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-sky-200 rounded-full text-sm text-sky-700 font-medium"
                        >
                          <Plus className="w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-sky-600 transition-colors">
                      <Download className="w-4 h-4" />
                      Unduh Laporan
                    </button>
                    <button
                      onClick={handleRemoveFile}
                      className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Resume Baru
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-semibold text-gray-900">Tips Resume Terbaik</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </JobSeekerLayout>
  );
}


