import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Briefcase,
  FileText,
  ListChecks,
  Gift,
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Plus,
  X,
  Eye,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Users,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

interface JobFormData {
  title: string;
  category: string;
  type: string;
  salaryMin: string;
  salaryMax: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  companyName: string;
  companyIndustry: string;
  companyWebsite: string;
  companyEmail: string;
  companyPhone: string;
  companyDescription: string;
}

const categories = [
  "Technology",
  "Marketing",
  "Finance",
  "Design",
  "Human Resources",
  "Sales",
  "Operations",
  "Education",
  "Healthcare",
];

const jobTypes = ["Full-time", "Part-time", "Freelance", "Contract", "Internship"];

const initialFormData: JobFormData = {
  title: "",
  category: "",
  type: "",
  salaryMin: "",
  salaryMax: "",
  location: "",
  description: "",
  requirements: [],
  benefits: [],
  companyName: "",
  companyIndustry: "",
  companyWebsite: "",
  companyEmail: "",
  companyPhone: "",
  companyDescription: "",
};

export default function PasangLowongan() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [newRequirement, setNewRequirement] = useState("");
  const [newBenefit, setNewBenefit] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { id: 1, label: "Detail Pekerjaan", icon: Briefcase },
    { id: 2, label: "Persyaratan", icon: ListChecks },
    { id: 3, label: "Benefit", icon: Gift },
    { id: 4, label: "Info Perusahaan", icon: Building2 },
  ];

  const updateFormData = (field: keyof JobFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()],
      }));
      setNewRequirement("");
    }
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setFormData((prev) => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()],
      }));
      setNewBenefit("");
    }
  };

  const removeBenefit = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Lowongan Berhasil Dipasang - KerjaAjaDulu.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen bg-gray-50">
          <Navbar />

          <div className="max-w-2xl mx-auto px-4 py-20 text-center">
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Lowongan Berhasil Dipasang!
              </h1>
              <p className="text-gray-600 mb-8">
                Lowongan <span className="font-semibold">{formData.title || "Senior Frontend Developer"}</span> telah berhasil dipasang. Kandidat yang sesuai akan segera melamar.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Ringkasan Lowongan:</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Posisi:</span> {formData.title || "Senior Frontend Developer"}</p>
                  <p><span className="font-medium">Kategori:</span> {formData.category || "Technology"}</p>
                  <p><span className="font-medium">Lokasi:</span> {formData.location || "Jakarta, Indonesia"}</p>
                  <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Aktif</span></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lowongan"
                  className="gradient-sky text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Lihat Lowongan Saya
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                    setCurrentStep(1);
                  }}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  Pasang Lowongan Baru
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Pasang Lowongan - KerjaAjaDulu.com</title>
        <meta name="description" content="Pasang lowongan kerja dan temukan kandidat terbaik untuk perusahaan Anda" />
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
                <Briefcase className="w-4 h-4" />
                Untuk Perusahaan
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Pasang Lowongan,{" "}
                <span className="text-transparent bg-clip-text gradient-hero">
                  Temukan Talenta Terbaik
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jangkau ribuan kandidat berkualitas dan temukan orang yang tepat untuk tim Anda
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Step Indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "gradient-hero text-white shadow-lg"
                            : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </div>
                      <span
                        className={`text-xs font-medium mt-2 hidden sm:block ${
                          isActive ? "text-sky-600" : isCompleted ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 sm:w-24 h-1 mx-2 rounded-full ${
                          currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 1: Job Details */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-600" />
                Detail Pekerjaan
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Pekerjaan *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData("title", e.target.value)}
                    placeholder="Contoh: Senior Frontend Developer"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => updateFormData("category", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Pilih kategori</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipe Pekerjaan *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => updateFormData("type", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Pilih tipe</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gaji Minimum (Rp)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.salaryMin}
                      onChange={(e) => updateFormData("salaryMin", e.target.value)}
                      placeholder="5.000.000"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gaji Maksimum (Rp)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.salaryMax}
                      onChange={(e) => updateFormData("salaryMax", e.target.value)}
                      placeholder="15.000.000"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateFormData("location", e.target.value)}
                      placeholder="Jakarta, Indonesia"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Pekerjaan *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData("description", e.target.value)}
                    placeholder="Jelaskan tanggung jawab, kualifikasi, dan detail pekerjaan lainnya..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Requirements */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-sky-600" />
                Persyaratan Kandidat
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newRequirement}
                    onChange={(e) => setNewRequirement(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addRequirement())}
                    placeholder="Tambahkan persyaratan (tekan Enter)"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="gradient-sky text-white px-5 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-md flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Tambah
                  </button>
                </div>

                {formData.requirements.length > 0 ? (
                  <div className="space-y-2 mt-4">
                    {formData.requirements.map((req, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-sky-50 px-4 py-3 rounded-xl border border-sky-100"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="p-1 hover:bg-sky-100 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <ListChecks className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Belum ada persyaratan ditambahkan</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Benefits */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-sky-600" />
                Benefit & Tunjangan
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newBenefit}
                    onChange={(e) => setNewBenefit(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addBenefit())}
                    placeholder="Tambahkan benefit (tekan Enter)"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={addBenefit}
                    className="gradient-sky text-white px-5 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-md flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Tambah
                  </button>
                </div>

                {formData.benefits.length > 0 ? (
                  <div className="space-y-2 mt-4">
                    {formData.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-green-50 px-4 py-3 rounded-xl border border-green-100"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeBenefit(index)}
                          className="p-1 hover:bg-green-100 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <Gift className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Belum ada benefit ditambahkan</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Company Info */}
          {currentStep === 4 && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-600" />
                Informasi Perusahaan
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Perusahaan *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateFormData("companyName", e.target.value)}
                    placeholder="PT. Teknologi Indonesia"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industri
                  </label>
                  <input
                    type="text"
                    value={formData.companyIndustry}
                    onChange={(e) => updateFormData("companyIndustry", e.target.value)}
                    placeholder="Technology, Finance, dll."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      value={formData.companyWebsite}
                      onChange={(e) => updateFormData("companyWebsite", e.target.value)}
                      placeholder="https://perusahaan.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Perusahaan
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.companyEmail}
                      onChange={(e) => updateFormData("companyEmail", e.target.value)}
                      placeholder="hr@perusahaan.com"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telepon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.companyPhone}
                      onChange={(e) => updateFormData("companyPhone", e.target.value)}
                      placeholder="+62 21 1234 5678"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tentang Perusahaan
                  </label>
                  <textarea
                    value={formData.companyDescription}
                    onChange={(e) => updateFormData("companyDescription", e.target.value)}
                    placeholder="Deskripsikan perusahaan Anda..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Preview Modal */}
          {showPreview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Preview Lowongan</h3>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {formData.title || "Senior Frontend Developer"}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {formData.companyName || "Perusahaan Anda"}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {formData.location || "Jakarta"}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {formData.type || "Full-time"}</span>
                    </div>
                  </div>

                  {(formData.salaryMin || formData.salaryMax) && (
                    <div className="bg-green-50 px-4 py-3 rounded-xl">
                      <span className="text-green-700 font-semibold">
                        Rp {formData.salaryMin || "5.000.000"} - Rp {formData.salaryMax || "15.000.000"} / bulan
                      </span>
                    </div>
                  )}

                  {formData.description && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Deskripsi</h5>
                      <p className="text-gray-600 whitespace-pre-line">{formData.description}</p>
                    </div>
                  )}

                  {formData.requirements.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Persyaratan</h5>
                      <ul className="space-y-1">
                        {formData.requirements.map((req, i) => (
                          <li key={i} className="text-gray-600 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {formData.benefits.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Benefit</h5>
                      <div className="flex flex-wrap gap-2">
                        {formData.benefits.map((benefit, i) => (
                          <span key={i} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-5 py-3 text-gray-600 hover:text-gray-900 font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Sebelumnya
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="flex items-center gap-2 px-5 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                <Eye className="w-5 h-5" />
                Preview
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                  className="gradient-sky text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center gap-2"
                >
                  Selanjutnya
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Pasang Lowongan
                </button>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-sky-500 to-green-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Butuh Bantuan?
              </h2>
              <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Tim kami siap membantu Anda dalam memasang lowongan yang menarik kandidat berkualitas
              </p>
              <Link
                href="/tentang-kami"
                className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
