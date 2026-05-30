import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Filter,
  Eye,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp,
  Users,
  Building2,
  Award,
  X,
  CheckCircle2,
  Clock,
  ExternalLink,
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
  hourlyRate: string;
  availability: string;
  description: string;
  projectsCompleted: number;
  responseRate: string;
  memberSince: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Ahmad Rizky Pratama",
    role: "Senior Frontend Developer",
    avatar: "https://i.pravatar.cc/300?img=11",
    location: "Jakarta, Indonesia",
    experience: "5 tahun",
    education: "S1 Teknik Informatika - UI",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    rating: 4.9,
    hourlyRate: "Rp 200.000/jam",
    availability: "Tersedia",
    description: "Frontend developer berpengalaman dengan fokus pada performa dan user experience. Telah mengerjakan 50+ proyek untuk klien lokal dan internasional.",
    projectsCompleted: 52,
    responseRate: "98%",
    memberSince: "2021",
  },
  {
    id: 2,
    name: "Sari Dewi Lestari",
    role: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/300?img=5",
    location: "Surabaya, Indonesia",
    experience: "4 tahun",
    education: "S1 Sistem Informasi - ITS",
    skills: ["Python", "Django", "React", "PostgreSQL", "AWS"],
    rating: 4.8,
    hourlyRate: "Rp 180.000/jam",
    availability: "Tersedia",
    description: "Full stack developer yang mahir dalam membangun aplikasi web scalable. Pengalaman di e-commerce dan fintech.",
    projectsCompleted: 38,
    responseRate: "95%",
    memberSince: "2022",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/300?img=12",
    location: "Bandung, Indonesia",
    experience: "6 tahun",
    education: "S1 Ilmu Komputer - ITB",
    skills: ["Go", "Microservices", "Kubernetes", "Redis", "gRPC"],
    rating: 4.7,
    hourlyRate: "Rp 220.000/jam",
    availability: "Sibuk",
    description: "Backend engineer yang ahli dalam arsitektur microservices dan cloud infrastructure. Pengalaman di startup unicorn.",
    projectsCompleted: 45,
    responseRate: "92%",
    memberSince: "2020",
  },
  {
    id: 4,
    name: "Diana Putri Maharani",
    role: "UI/UX Designer & Developer",
    avatar: "https://i.pravatar.cc/300?img=9",
    location: "Yogyakarta, Indonesia",
    experience: "3 tahun",
    education: "S1 Desain Komunikasi Visual - UGM",
    skills: ["Figma", "React", "CSS", "Prototyping", "User Research"],
    rating: 4.9,
    hourlyRate: "Rp 150.000/jam",
    availability: "Tersedia",
    description: "Desainer yang bisa coding. Menggabungkan estetika visual dengan implementasi teknis yang bersih.",
    projectsCompleted: 30,
    responseRate: "97%",
    memberSince: "2022",
  },
  {
    id: 5,
    name: "Muhammad Fadilah",
    role: "Mobile Developer",
    avatar: "https://i.pravatar.cc/300?img=33",
    location: "Jakarta, Indonesia",
    experience: "4 tahun",
    education: "S1 Teknik Komputer - UNJ",
    skills: ["Flutter", "Dart", "Firebase", "React Native", "Swift"],
    rating: 4.6,
    hourlyRate: "Rp 170.000/jam",
    availability: "Tersedia",
    description: "Mobile developer cross-platform yang berpengalaman membangun aplikasi dengan jutaan pengguna.",
    projectsCompleted: 25,
    responseRate: "90%",
    memberSince: "2021",
  },
  {
    id: 6,
    name: "Rina Wulandari",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/300?img=23",
    location: "Remote",
    experience: "5 tahun",
    education: "S1 Teknik Informatika - UNPAD",
    skills: ["AWS", "Docker", "Terraform", "CI/CD", "Linux"],
    rating: 4.8,
    hourlyRate: "Rp 250.000/jam",
    availability: "Tersedia",
    description: "DevOps engineer yang handal dalam automasi infrastructure dan deployment pipeline untuk aplikasi enterprise.",
    projectsCompleted: 40,
    responseRate: "94%",
    memberSince: "2020",
  },
];

const filterOptions = {
  experience: ["Semua Pengalaman", "Fresh Graduate", "1-2 Tahun", "3-5 Tahun", "5-10 Tahun", "10+ Tahun"],
  education: ["Semua Pendidikan", "D3", "S1", "S2", "S3"],
  skills: ["React", "Next.js", "TypeScript", "Python", "Go", "Flutter", "AWS", "Docker", "Figma", "Node.js", "Django", "PostgreSQL"],
  availability: ["Semua", "Tersedia", "Sibuk"],
};

const popularFilters = [
  "React Developer",
  "Full Stack",
  "UI/UX Designer",
  "Backend Engineer",
  "Mobile Developer",
  "DevOps",
];

export default function CariKandidat() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("Semua Pengalaman");
  const [selectedEducation, setSelectedEducation] = useState("Semua Pendidikan");
  const [selectedAvailability, setSelectedAvailability] = useState("Semua");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewingCandidate, setViewingCandidate] = useState<Candidate | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesKeyword =
      !searchKeyword ||
      candidate.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      candidate.skills.some((s) => s.toLowerCase().includes(searchKeyword.toLowerCase()));

    const matchesLocation =
      !searchLocation ||
      candidate.location.toLowerCase().includes(searchLocation.toLowerCase());

    const matchesExperience =
      selectedExperience === "Semua Pengalaman" ||
      candidate.experience === selectedExperience;

    const matchesEducation =
      selectedEducation === "Semua Pendidikan" ||
      candidate.education.toLowerCase().includes(selectedEducation.toLowerCase());

    const matchesAvailability =
      selectedAvailability === "Semua" ||
      candidate.availability === selectedAvailability;

    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) =>
        candidate.skills.some((s) => s.toLowerCase() === skill.toLowerCase())
      );

    return matchesKeyword && matchesLocation && matchesExperience && matchesEducation && matchesAvailability && matchesSkills;
  });

  return (
    <>
      <Head>
        <title>Cari Kandidat - KerjaAjaDulu.com</title>
        <meta name="description" content="Temukan kandidat terbaik untuk perusahaan Anda di KerjaAjaDulu.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-green-50">
          <div className="absolute inset-0 gradient-hero opacity-10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                Untuk Perusahaan
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cari Kandidat{" "}
                <span className="text-transparent bg-clip-text gradient-hero">
                  Terbaik
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Temukan talenta berkualitas yang sesuai dengan kebutuhan perusahaan Anda
              </p>

              {/* Search Bar */}
              <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4">
                    <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="Cari berdasarkan nama, role, atau skill..."
                      className="w-full py-3 outline-none text-gray-700"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-3 px-4 border-t sm:border-t-0 sm:border-l border-gray-100">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      placeholder="Lokasi"
                      className="w-full py-3 outline-none text-gray-700"
                    />
                  </div>
                  <button className="gradient-sky text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md">
                    Cari
                  </button>
                </div>
              </div>

              {/* Popular Filters */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {popularFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSearchKeyword(filter)}
                    className="bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 transition-all"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">50,000+</p>
                  <p className="text-sm text-gray-500">Total Kandidat</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-500">Tersedia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-500">Perusahaan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">4.8</p>
                  <p className="text-sm text-gray-500">Rating Rata-rata</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-between p-5 border-b border-gray-100"
                >
                  <span className="font-semibold text-gray-900 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-sky-600" />
                    Filter Kandidat
                  </span>
                  {showFilters ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {showFilters && (
                  <div className="p-5 space-y-6">
                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Pengalaman
                      </label>
                      <div className="space-y-2">
                        {filterOptions.experience.map((exp) => (
                          <label
                            key={exp}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="experience"
                              checked={selectedExperience === exp}
                              onChange={() => setSelectedExperience(exp)}
                              className="w-4 h-4 text-sky-500 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-sm text-gray-600">{exp}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Pendidikan
                      </label>
                      <div className="space-y-2">
                        {filterOptions.education.map((edu) => (
                          <label
                            key={edu}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="education"
                              checked={selectedEducation === edu}
                              onChange={() => setSelectedEducation(edu)}
                              className="w-4 h-4 text-sky-500 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-sm text-gray-600">{edu}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Ketersediaan
                      </label>
                      <div className="space-y-2">
                        {filterOptions.availability.map((avail) => (
                          <label
                            key={avail}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="availability"
                              checked={selectedAvailability === avail}
                              onChange={() => setSelectedAvailability(avail)}
                              className="w-4 h-4 text-sky-500 border-gray-300 focus:ring-sky-500"
                            />
                            <span className="text-sm text-gray-600">{avail}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Skills
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.skills.map((skill) => (
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

                    {/* Clear Filters */}
                    <button
                      onClick={() => {
                        setSelectedExperience("Semua Pengalaman");
                        setSelectedEducation("Semua Pendidikan");
                        setSelectedAvailability("Semua");
                        setSelectedSkills([]);
                        setSearchKeyword("");
                        setSearchLocation("");
                      }}
                      className="w-full text-sky-600 hover:text-sky-700 text-sm font-medium py-2"
                    >
                      Reset Semua Filter
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Candidate Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold text-gray-900">{filteredCandidates.length}</span> kandidat
                </p>
                <select className="text-sm font-medium text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Rating Tertinggi</option>
                  <option>Pengalaman Terbanyak</option>
                  <option>Harga Terendah</option>
                  <option>Terbaru</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-card-hover transition-all group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
                        <img
                          src={candidate.avatar}
                          alt={candidate.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                              {candidate.name}
                            </h3>
                            <p className="text-sky-600 font-medium text-sm">{candidate.role}</p>
                          </div>
                          <button
                            onClick={() => toggleFavorite(candidate.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.includes(candidate.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-400 hover:text-red-400"
                              }`}
                            />
                          </button>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {candidate.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            {candidate.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rating & Availability */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-green-600 fill-green-600" />
                        <span className="text-sm font-semibold text-green-700">{candidate.rating}</span>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          candidate.availability === "Tersedia"
                            ? "bg-sky-100 text-sky-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        <Clock className="w-3 h-3 inline mr-1" />
                        {candidate.availability}
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {candidate.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 4 && (
                        <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-lg text-xs font-medium">
                          +{candidate.skills.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Education */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span>{candidate.education}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 bg-gray-50 rounded-xl p-3">
                      <div className="text-center">
                        <p className="text-sm font-bold text-gray-900">{candidate.projectsCompleted}</p>
                        <p className="text-xs text-gray-500">Proyek</p>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <p className="text-sm font-bold text-gray-900">{candidate.responseRate}</p>
                        <p className="text-xs text-gray-500">Response</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-gray-900">{candidate.memberSince}</p>
                        <p className="text-xs text-gray-500">Member</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setViewingCandidate(candidate)}
                        className="flex-1 gradient-sky text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Lihat Profil
                      </button>
                      <button className="p-2.5 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-all">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCandidates.length === 0 && (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tidak ada kandidat ditemukan
                  </h3>
                  <p className="text-gray-500">
                    Coba ubah filter pencarian Anda
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Profile Modal */}
        {viewingCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between rounded-t-3xl">
                <h3 className="text-xl font-bold text-gray-900">Profil Kandidat</h3>
                <button
                  onClick={() => setViewingCandidate(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gray-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={viewingCandidate.avatar}
                      alt={viewingCandidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{viewingCandidate.name}</h4>
                    <p className="text-sky-600 font-medium">{viewingCandidate.role}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {viewingCandidate.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {viewingCandidate.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Rating & Price */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 bg-green-50 px-4 py-2 rounded-xl">
                    <Star className="w-5 h-5 text-green-600 fill-green-600" />
                    <span className="font-bold text-green-700">{viewingCandidate.rating}</span>
                  </div>
                  <div className="bg-sky-50 px-4 py-2 rounded-xl">
                    <span className="text-sky-700 font-bold">{viewingCandidate.hourlyRate}</span>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl font-medium ${
                      viewingCandidate.availability === "Tersedia"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {viewingCandidate.availability}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Tentang</h5>
                  <p className="text-gray-600 leading-relaxed">{viewingCandidate.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {viewingCandidate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-sky-100 text-sky-700 px-4 py-2 rounded-xl text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Pendidikan</h5>
                  <div className="flex items-center gap-3 text-gray-600">
                    <GraduationCap className="w-5 h-5 text-gray-400" />
                    <span>{viewingCandidate.education}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 rounded-2xl p-5">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{viewingCandidate.projectsCompleted}</p>
                    <p className="text-sm text-gray-500">Proyek Selesai</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-2xl font-bold text-gray-900">{viewingCandidate.responseRate}</p>
                    <p className="text-sm text-gray-500">Tingkat Response</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{viewingCandidate.memberSince}</p>
                    <p className="text-sm text-gray-500">Member Sejak</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 gradient-sky text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Hubungi Kandidat
                  </button>
                  <button
                    onClick={() => toggleFavorite(viewingCandidate.id)}
                    className={`px-5 py-3 rounded-xl font-semibold border transition-all flex items-center gap-2 ${
                      favorites.includes(viewingCandidate.id)
                        ? "border-red-200 bg-red-50 text-red-600"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(viewingCandidate.id) ? "fill-red-500" : ""
                      }`}
                    />
                    {favorites.includes(viewingCandidate.id) ? "Tersimpan" : "Simpan"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ingin Merekrut Lebih Cepat?
              </h2>
              <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Dapatkan akses ke kandidat eksklusif dan fitur pencarian lanjutan dengan paket enterprise kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Upgrade ke Enterprise
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
