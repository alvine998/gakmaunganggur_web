import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CompanyLayout from "@/components/company/CompanyLayout";
import {
  ArrowLeft,
  Save,
  X,
  Plus,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  FileText,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const categories = [
  "Engineering",
  "Design",
  "Marketing",
  "Product",
  "Data",
  "Finance",
  "HR",
  "Operations",
];

const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];

const salaryRanges = [
  "Rp 3.000.000 - 5.000.000",
  "Rp 5.000.000 - 10.000.000",
  "Rp 10.000.000 - 15.000.000",
  "Rp 15.000.000 - 25.000.000",
  "Rp 25.000.000 - 35.000.000",
  "Rp 35.000.000 - 50.000.000",
  "Negosiable",
];

export default function CreateJobPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    category: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: [""],
    benefits: [""],
    status: "Draft" as "Draft" | "Aktif",
  });

  const handleAddRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ""] });
  };

  const handleRemoveRequirement = (index: number) => {
    setFormData({
      ...formData,
      requirements: formData.requirements.filter((_, i) => i !== index),
    });
  };

  const handleRequirementChange = (index: number, value: string) => {
    const updated = [...formData.requirements];
    updated[index] = value;
    setFormData({ ...formData, requirements: updated });
  };

  const handleAddBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ""] });
  };

  const handleRemoveBenefit = (index: number) => {
    setFormData({
      ...formData,
      benefits: formData.benefits.filter((_, i) => i !== index),
    });
  };

  const handleBenefitChange = (index: number, value: string) => {
    const updated = [...formData.benefits];
    updated[index] = value;
    setFormData({ ...formData, benefits: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      router.push("/company/jobs");
    }, 2000);
  };

  if (showSuccess) {
    return (
      <>
        <Head>
          <title>Lowongan Berhasil Dibuat - KerjaAjaDulu.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CompanyLayout activePage="jobs">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Lowongan Berhasil Dibuat!
            </h1>
            <p className="text-gray-500 mb-8">
              Lowongan kerja Anda telah berhasil dibuat. Sedang mengarahkan ke daftar lowongan...
            </p>
            <Link
              href="/company/jobs"
              className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
            >
              <Briefcase className="w-5 h-5" />
              Lihat Semua Lowongan
            </Link>
          </div>
        </CompanyLayout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Buat Lowongan Baru - KerjaAjaDulu.com</title>
        <meta name="description" content="Buat lowongan kerja baru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyLayout activePage="jobs">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/company/jobs"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Lowongan
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Buat Lowongan Baru
            </h1>
            <p className="text-gray-500">
              Isi informasi lowongan kerja untuk menarik kandidat terbaik
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky-600" />
                  Informasi Dasar
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Judul Pekerjaan *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Contoh: Frontend Developer"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm appearance-none bg-white"
                      >
                        <option value="">Pilih kategori</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokasi *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Contoh: Jakarta, Indonesia"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipe Pekerjaan *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm appearance-none bg-white"
                      >
                        <option value="">Pilih tipe</option>
                        {jobTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gaji *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        required
                        value={formData.salary}
                        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm appearance-none bg-white"
                      >
                        <option value="">Pilih range gaji</option>
                        {salaryRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, status: "Draft" })}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                          formData.status === "Draft"
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                            : "border-gray-200 text-gray-600 hover:border-yellow-300"
                        }`}
                      >
                        Draft
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, status: "Aktif" })}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                          formData.status === "Aktif"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200 text-gray-600 hover:border-green-300"
                        }`}
                      >
                        Aktif
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  Deskripsi Pekerjaan
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Jelaskan detail pekerjaan, tanggung jawab, dan apa yang diharapkan..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">
                  Persyaratan
                </h2>

                <div className="space-y-3">
                  {formData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={req}
                        onChange={(e) => handleRequirementChange(index, e.target.value)}
                        placeholder={`Persyaratan ${index + 1}`}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                      />
                      {formData.requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveRequirement(index)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAddRequirement}
                  className="mt-4 flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Persyaratan
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">
                  Benefit
                </h2>

                <div className="space-y-3">
                  {formData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <input
                        type="text"
                        value={benefit}
                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                        placeholder={`Benefit ${index + 1}`}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                      />
                      {formData.benefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenefit(index)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAddBenefit}
                  className="mt-4 flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Benefit
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-4">
                <Link
                  href="/company/jobs"
                  className="px-6 py-3 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Batal
                </Link>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md"
                >
                  <Save className="w-5 h-5" />
                  Simpan Lowongan
                </button>
              </div>
            </div>
          </form>
        </div>
      </CompanyLayout>
    </>
  );
}
