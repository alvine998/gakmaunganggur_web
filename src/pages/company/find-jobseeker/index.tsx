import Head from "next/head";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  GraduationCap,
  ChevronDown,
  Users,
  Briefcase,
  Eye,
  Mail,
  X,
  Star,
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  experience: string;
  education: string;
  skills: string[];
  rating: number;
  availability: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Ahmad Rizky Pratama",
    role: "Senior Frontend Developer",
    avatar: "",
    location: "Jakarta, Indonesia",
    experience: "5 tahun",
    education: "S1 Teknik Informatika - UI",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    rating: 4.9,
    availability: "Tersedia",
  },
  {
    id: 2,
    name: "Sari Dewi Lestari",
    role: "Full Stack Developer",
    avatar: "",
    location: "Surabaya, Indonesia",
    experience: "4 tahun",
    education: "S1 Sistem Informasi - ITS",
    skills: ["Python", "Django", "React", "PostgreSQL"],
    rating: 4.8,
    availability: "Tersedia",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Backend Developer",
    avatar: "",
    location: "Bandung, Indonesia",
    experience: "6 tahun",
    education: "S1 Ilmu Komputer - ITB",
    skills: ["Node.js", "Go", "Docker", "Kubernetes"],
    rating: 4.7,
    availability: "Sibuk",
  },
  {
    id: 4,
    name: "Diana Putri Maharani",
    role: "UI/UX Designer & Developer",
    avatar: "",
    location: "Yogyakarta, Indonesia",
    experience: "3 tahun",
    education: "S1 DKV - UGM",
    skills: ["Figma", "React", "CSS", "Prototyping"],
    rating: 4.9,
    availability: "Tersedia",
  },
  {
    id: 5,
    name: "Muhammad Fadilah",
    role: "Mobile Developer",
    avatar: "",
    location: "Jakarta, Indonesia",
    experience: "4 tahun",
    education: "S1 Teknik Komputer - UNJ",
    skills: ["Flutter", "Dart", "Firebase", "React Native"],
    rating: 4.6,
    availability: "Tersedia",
  },
  {
    id: 6,
    name: "Rina Wulandari",
    role: "DevOps Engineer",
    avatar: "",
    location: "Remote",
    experience: "7 tahun",
    education: "S1 Teknik Informatika - UNPAD",
    skills: ["AWS", "Docker", "Terraform", "CI/CD"],
    rating: 4.8,
    availability: "Sibuk",
  },
];

const skillFilters = ["React", "JavaScript", "Python", "Node.js", "TypeScript", "Next.js", "Docker", "AWS"];
const experienceFilters = ["1-2 tahun", "3-5 tahun", "5-10 tahun", "10+ tahun"];
const educationFilters = ["S1", "S2", "S3"];

export default function FindJobseeker() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredCandidates = candidates.filter((c) => {
    const matchesKeyword =
      !searchKeyword ||
      c.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      c.role.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchKeyword.toLowerCase()));

    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((s) => c.skills.some((cs) => cs.toLowerCase() === s.toLowerCase()));

    return matchesKeyword && matchesSkills;
  });

  return (
    <>
      <Head>
        <title>Cari Kandidat - KerjaAjaDulu.com</title>
        <meta name="description" content="Temukan kandidat terbaik untuk perusahaan Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="find-jobseeker">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cari Kandidat</h1>
            <p className="text-gray-500">Temukan talenta berkualitas sesuai kebutuhan perusahaan Anda</p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Cari berdasarkan nama, role, atau skill..."
                  className="w-full py-2.5 outline-none text-gray-700"
                />
              </div>
              <button className="w-full sm:w-auto bg-sky-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md">
                Cari
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-64 lg:flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm lg:sticky lg:top-24">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-between p-5 border-b border-gray-100"
                >
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-sky-600" />
                    Filter Kandidat
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>

                {showFilters && (
                  <div className="p-5 space-y-6">
                    {/* Skills Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Skill</label>
                      <div className="flex flex-wrap gap-2">
                        {skillFilters.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              selectedSkills.includes(skill)
                                ? "bg-sky-500 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-sky-50 hover:text-sky-600"
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Experience Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Pengalaman</label>
                      <div className="space-y-2">
                        {experienceFilters.map((exp) => (
                          <label key={exp} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="experience"
                              checked={selectedExperience === exp}
                              onChange={() => setSelectedExperience(selectedExperience === exp ? "" : exp)}
                              className="w-4 h-4 text-sky-500 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-sm text-gray-600">{exp}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Education Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Pendidikan</label>
                      <div className="space-y-2">
                        {educationFilters.map((edu) => (
                          <label key={edu} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="education"
                              checked={selectedEducation === edu}
                              onChange={() => setSelectedEducation(selectedEducation === edu ? "" : edu)}
                              className="w-4 h-4 text-sky-500 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-sm text-gray-600">{edu}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedSkills([]);
                        setSelectedExperience("");
                        setSelectedEducation("");
                        setSearchKeyword("");
                      }}
                      className="w-full text-sky-600 hover:text-sky-700 text-sm font-medium py-2"
                    >
                      Reset Semua Filter
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Stats Bar */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total kandidat ditemukan</p>
                      <p className="text-xl font-bold text-gray-900">{filteredCandidates.length} kandidat</p>
                    </div>
                  </div>
                  <select className="w-full sm:w-auto text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl outline-none">
                    <option>Rating Tertinggi</option>
                    <option>Pengalaman Terbanyak</option>
                    <option>Terbaru</option>
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedSkills.length > 0 || selectedExperience || selectedEducation) && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Filter aktif:</span>
                  {selectedSkills.map((skill) => (
                    <span
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className="flex items-center gap-1 bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-sky-200"
                    >
                      {skill}
                      <X className="w-3 h-3" />
                    </span>
                  ))}
                  {selectedExperience && (
                    <span
                      onClick={() => setSelectedExperience("")}
                      className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-green-200"
                    >
                      {selectedExperience}
                      <X className="w-3 h-3" />
                    </span>
                  )}
                  {selectedEducation && (
                    <span
                      onClick={() => setSelectedEducation("")}
                      className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-amber-200"
                    >
                      {selectedEducation}
                      <X className="w-3 h-3" />
                    </span>
                  )}
                </div>
              )}

              {/* Candidate Cards */}
              <div className="space-y-4">
                {filteredCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-green-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {candidate.name.charAt(0)}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                            <p className="text-sky-600 font-medium text-sm">{candidate.role}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-lg">
                            <Star className="w-3.5 h-3.5 text-green-600 fill-green-600" />
                            <span className="text-sm font-semibold text-green-700">{candidate.rating}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {candidate.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            {candidate.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5" />
                            {candidate.education}
                          </span>
                          <span
                            className={`flex items-center gap-1 ${
                              candidate.availability === "Tersedia" ? "text-green-600" : "text-amber-600"
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5" />
                            {candidate.availability}
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {candidate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:items-center">
                          <button className="flex items-center justify-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-sky-600 transition-all shadow-sm">
                            <Eye className="w-4 h-4" />
                            Lihat Profil
                          </button>
                          <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-green-600 transition-all shadow-sm">
                            <Mail className="w-4 h-4" />
                            Undang Interview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCandidates.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada kandidat ditemukan</h3>
                  <p className="text-gray-500">Coba ubah filter pencarian Anda</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CompanyLayout>
    </>
  );
}
