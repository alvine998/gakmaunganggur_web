import Head from "next/head";
import { useState } from "react";
import JobSeekerLayout from "@/components/jobseeker/JobSeekerLayout";
import {
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  FileText,
  Upload,
  Plus,
  Trash2,
  X,
  Save,
  Camera,
} from "lucide-react";

type TabKey = "profil" | "pengalaman" | "pendidikan" | "keahlian" | "cv";

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface Skill {
  id: number;
  name: string;
}

const initialExperiences: Experience[] = [
  {
    id: 1,
    company: "PT Tech Indonesia",
    position: "Frontend Developer",
    startDate: "Jan 2022",
    endDate: "Sekarang",
    description: "Mengembangkan antarmuka pengguna menggunakan React dan TypeScript.",
  },
  {
    id: 2,
    company: "CV Digital Kreasi",
    position: "Junior Developer",
    startDate: "Mar 2020",
    endDate: "Des 2021",
    description: "Membangun website responsif dan mobile-friendly.",
  },
];

const initialEducations: Education[] = [
  {
    id: 1,
    institution: "Universitas Indonesia",
    degree: "S1",
    field: "Teknik Informatika",
    startDate: "2016",
    endDate: "2020",
  },
];

const initialSkills: Skill[] = [
  { id: 1, name: "React" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "Node.js" },
  { id: 4, name: "Tailwind CSS" },
  { id: 5, name: "Git" },
  { id: 6, name: "Next.js" },
];

export default function JobSeekerProfile() {
  const [activeTab, setActiveTab] = useState<TabKey>("profil");
  const [experiences, setExperiences] = useState(initialExperiences);
  const [educations, setEducations] = useState(initialEducations);
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [editExperience, setEditExperience] = useState<Experience | null>(null);
  const [editEducation, setEditEducation] = useState<Education | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{ type: "experience" | "education"; id: number } | null>(null);
  const [cvFile, setCvFile] = useState<string | null>(null);

  const tabs: { key: TabKey; label: string; icon: typeof User }[] = [
    { key: "profil", label: "Profil Dasar", icon: User },
    { key: "pengalaman", label: "Pengalaman", icon: Briefcase },
    { key: "pendidikan", label: "Pendidikan", icon: GraduationCap },
    { key: "keahlian", label: "Keahlian", icon: Wrench },
    { key: "cv", label: "CV/Resume", icon: FileText },
  ];

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.find((s) => s.name.toLowerCase() === newSkill.trim().toLowerCase())) {
      setSkills([...skills, { id: skills.length + 1, name: newSkill.trim() }]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (id: number) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const handleDeleteItem = () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.type === "experience") {
      setExperiences(experiences.filter((e) => e.id !== deleteConfirm.id));
    } else {
      setEducations(educations.filter((e) => e.id !== deleteConfirm.id));
    }
    setDeleteConfirm(null);
  };

  const handleCvUpload = () => {
    setCvFile("Ahmad_Pratama_CV.pdf");
  };

  const handleCvRemove = () => {
    setCvFile(null);
  };

  return (
    <>
      <Head>
        <title>Pengaturan Profil - KerjaAjaDulu.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JobSeekerLayout activePage="profile">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <User className="w-6 h-6 text-sky-500" />
            Pengaturan Profil
          </h1>
          <p className="text-gray-500 text-sm mt-1">Kelola profil, pengalaman, dan resume Anda</p>
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

        {/* Profil Dasar Tab */}
        {activeTab === "profil" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Profil Dasar</h2>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Foto Profil</label>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl">
                    AP
                  </div>
                  <button className="absolute bottom-0 right-0 w-7 h-7 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-xl text-sm font-medium hover:bg-sky-100 transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload Foto
                  </button>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG max 2MB</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  defaultValue="Ahmad Pratama"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="ahmad.pratama@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                <input
                  type="tel"
                  defaultValue="081234567890"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                <input
                  type="text"
                  defaultValue="Jakarta Selatan, DKI Jakarta"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  defaultValue="Frontend Developer dengan pengalaman 3+ tahun dalam membangun aplikasi web modern menggunakan React dan TypeScript."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors">
                <Save className="w-4 h-4" />
                Simpan Perubahan
              </button>
            </div>
          </div>
        )}

        {/* Pengalaman Tab */}
        {activeTab === "pengalaman" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Pengalaman Kerja</h2>
                <p className="text-sm text-gray-500 mt-1">{experiences.length} pengalaman tercatat</p>
              </div>
              <button
                onClick={() => {
                  setEditExperience(null);
                  setShowExperienceModal(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Tambah Pengalaman
              </button>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{exp.position}</p>
                        <p className="text-sm text-sky-600 font-medium">{exp.company}</p>
                        <p className="text-xs text-gray-500 mt-1">{exp.startDate} - {exp.endDate}</p>
                        <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditExperience(exp);
                          setShowExperienceModal(true);
                        }}
                        className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm({ type: "experience", id: exp.id })}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pendidikan Tab */}
        {activeTab === "pendidikan" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Pendidikan</h2>
                <p className="text-sm text-gray-500 mt-1">{educations.length} pendidikan tercatat</p>
              </div>
              <button
                onClick={() => {
                  setEditEducation(null);
                  setShowEducationModal(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Tambah Pendidikan
              </button>
            </div>

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{edu.institution}</p>
                        <p className="text-sm text-green-600 font-medium">{edu.degree} - {edu.field}</p>
                        <p className="text-xs text-gray-500 mt-1">{edu.startDate} - {edu.endDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditEducation(edu);
                          setShowEducationModal(true);
                        }}
                        className="p-2 text-gray-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm({ type: "education", id: edu.id })}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Keahlian Tab */}
        {activeTab === "keahlian" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Keahlian</h2>

            <div className="mb-6">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                  placeholder="Tambahkan keahlian baru..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
                <button
                  onClick={handleAddSkill}
                  disabled={!newSkill.trim()}
                  className="flex items-center gap-2 px-5 py-3 bg-sky-500 text-white rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                  Tambah
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-200"
                >
                  {skill.name}
                  <button
                    onClick={() => handleRemoveSkill(skill.id)}
                    className="p-0.5 hover:bg-sky-200 rounded-full transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors">
                <Save className="w-4 h-4" />
                Simpan Perubahan
              </button>
            </div>
          </div>
        )}

        {/* CV/Resume Tab */}
        {activeTab === "cv" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">CV/Resume</h2>

            {cvFile ? (
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{cvFile}</p>
                      <p className="text-xs text-gray-500 mt-0.5">Diunggah hari ini</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-sky-50 text-sky-600 rounded-xl text-sm font-medium hover:bg-sky-100 transition-colors">
                      Preview
                    </button>
                    <button
                      onClick={handleCvRemove}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-sky-400 transition-colors">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-sky-500" />
                </div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Unggah CV/Resume Anda</p>
                <p className="text-xs text-gray-500 mb-4">PDF, DOC, atau DOCX max 5MB</p>
                <button
                  onClick={handleCvUpload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Pilih File
                </button>
              </div>
            )}
          </div>
        )}

        {/* Experience Modal */}
        {showExperienceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowExperienceModal(false)} />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">
                  {editExperience ? "Edit Pengalaman" : "Tambah Pengalaman"}
                </h3>
                <button
                  onClick={() => setShowExperienceModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Perusahaan</label>
                  <input
                    type="text"
                    defaultValue={editExperience?.company || ""}
                    placeholder="Masukkan nama perusahaan"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Posisi</label>
                  <input
                    type="text"
                    defaultValue={editExperience?.position || ""}
                    placeholder="Masukkan posisi"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
                    <input
                      type="text"
                      defaultValue={editExperience?.startDate || ""}
                      placeholder="Jan 2022"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
                    <input
                      type="text"
                      defaultValue={editExperience?.endDate || ""}
                      placeholder="Sekarang"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                  <textarea
                    defaultValue={editExperience?.description || ""}
                    placeholder="Ceritakan tanggung jawab Anda"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => setShowExperienceModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={() => setShowExperienceModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md text-sm"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Education Modal */}
        {showEducationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowEducationModal(false)} />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">
                  {editEducation ? "Edit Pendidikan" : "Tambah Pendidikan"}
                </h3>
                <button
                  onClick={() => setShowEducationModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institusi</label>
                  <input
                    type="text"
                    defaultValue={editEducation?.institution || ""}
                    placeholder="Masukkan nama institusi"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gelar</label>
                  <input
                    type="text"
                    defaultValue={editEducation?.degree || ""}
                    placeholder="S1, S2, dll."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jurusan</label>
                  <input
                    type="text"
                    defaultValue={editEducation?.field || ""}
                    placeholder="Masukkan jurusan"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tahun Mulai</label>
                    <input
                      type="text"
                      defaultValue={editEducation?.startDate || ""}
                      placeholder="2016"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tahun Selesai</label>
                    <input
                      type="text"
                      defaultValue={editEducation?.endDate || ""}
                      placeholder="2020"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100">
                <button
                  onClick={() => setShowEducationModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Batal
                </button>
                <button
                  onClick={() => setShowEducationModal(false)}
                  className="px-5 py-2.5 rounded-xl font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all shadow-md text-sm"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setDeleteConfirm(null)} />
            <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Trash2 className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Hapus Data?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                {deleteConfirm.type === "experience"
                  ? "Pengalaman kerja ini akan dihapus dari profil Anda."
                  : "Data pendidikan ini akan dihapus dari profil Anda."}
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleDeleteItem}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </JobSeekerLayout>
    </>
  );
}
