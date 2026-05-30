import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import {
  ArrowLeft,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Send,
  CheckCircle2,
  X,
  Plus,
} from "lucide-react";

const job = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "Google",
  logo: "https://logo.clearbit.com/google.com",
  location: "Jakarta, Indonesia",
  salary: "Rp 25.000.000 - 35.000.000",
};

export default function LamarSekarang() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    education: "",
    portfolio: "",
    linkedin: "",
    expectedSalary: "",
    availableDate: "",
    coverLetter: "",
  });

  const [files, setFiles] = useState({
    cv: null as File | null,
    portfolio: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Head>
          <title>Lamaran Berhasil - KerjaAjaDulu.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen bg-gray-50">
          <Navbar />
          
          <div className="max-w-2xl mx-auto px-4 py-20 text-center">
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-100 shadow-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Lamaran Berhasil Dikirim!
              </h1>
              <p className="text-gray-600 mb-8">
                Lamaran Anda untuk posisi <span className="font-semibold">{job.title}</span> di <span className="font-semibold">{job.company}</span> telah berhasil dikirim. Tim HR akan menghubungi Anda dalam 1-3 hari kerja.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Detail Lamaran:</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Posisi:</span> {job.title}</p>
                  <p><span className="font-medium">Perusahaan:</span> {job.company}</p>
                  <p><span className="font-medium">Lokasi:</span> {job.location}</p>
                  <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Terkirim</span></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lowongan"
                  className="gradient-sky text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Cari Lowongan Lain
                </Link>
                <Link
                  href="/"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  Kembali ke Beranda
                </Link>
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
        <title>Lamar Sekarang - KerjaAjaDulu.com</title>
        <meta name="description" content="Lamar pekerjaan di KerjaAjaDulu.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              href={`/lowongan/${job.id}`}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Detail Lowongan
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lamar Pekerjaan</h1>
                <p className="text-gray-600">
                  {job.title} di {job.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-sky-600" />
                    Informasi Pribadi
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@contoh.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812 3456 7890"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lokasi
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Jakarta, Indonesia"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-sky-600" />
                    Pendidikan & Pengalaman
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pendidikan Terakhir
                      </label>
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Pilih pendidikan</option>
                        <option value="sma">SMA/SMK</option>
                        <option value="d3">Diploma (D3)</option>
                        <option value="s1">Sarjana (S1)</option>
                        <option value="s2">Magister (S2)</option>
                        <option value="s3">Doktoral (S3)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pengalaman Kerja
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Pilih pengalaman</option>
                        <option value="fresh">Fresh Graduate</option>
                        <option value="1-2">1-2 Tahun</option>
                        <option value="3-5">3-5 Tahun</option>
                        <option value="5-10">5-10 Tahun</option>
                        <option value="10+">10+ Tahun</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portofolio / Website
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://yourportfolio.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-sky-600" />
                    Dokumen
                  </h2>
                  
                  <div className="space-y-4">
                    {/* CV Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CV / Resume *
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-sky-400 transition-colors">
                        {files.cv ? (
                          <div className="flex items-center justify-center gap-3">
                            <FileText className="w-8 h-8 text-sky-600" />
                            <div className="text-left">
                              <p className="font-medium text-gray-900">{files.cv.name}</p>
                              <p className="text-sm text-gray-500">
                                {(files.cv.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFiles({ ...files, cv: null })}
                              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600 mb-1">
                              <span className="text-sky-600 font-medium">Klik untuk upload</span> atau drag and drop
                            </p>
                            <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setFiles({ ...files, cv: file });
                              }}
                            />
                          </label>
                        )}
                      </div>
                    </div>

                    {/* Portfolio Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portofolio (Opsional)
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-sky-400 transition-colors">
                        {files.portfolio ? (
                          <div className="flex items-center justify-center gap-3">
                            <FileText className="w-8 h-8 text-sky-600" />
                            <div className="text-left">
                              <p className="font-medium text-gray-900">{files.portfolio.name}</p>
                              <p className="text-sm text-gray-500">
                                {(files.portfolio.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFiles({ ...files, portfolio: null })}
                              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5 text-gray-400" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600 mb-1">
                              <span className="text-sky-600 font-medium">Klik untuk upload</span> atau drag and drop
                            </p>
                            <p className="text-sm text-gray-400">PDF, ZIP, RAR (Max 10MB)</p>
                            <input
                              type="file"
                              accept=".pdf,.zip,.rar"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) setFiles({ ...files, portfolio: file });
                              }}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-sky-600" />
                    Surat Lamaran
                  </h2>
                  
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tulis surat lamaran Anda di sini (opsional)..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
                  <h3 className="font-bold text-gray-900 mb-4">Ringkasan Lamaran</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Briefcase className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Posisi</p>
                        <p className="font-medium text-gray-900">{job.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Perusahaan</p>
                        <p className="font-medium text-gray-900">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Lokasi</p>
                        <p className="font-medium text-gray-900">{job.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Isi data pribadi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Upload CV/Resume</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Tulis surat lamaran</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-sky text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Lamaran
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Dengan mengirim lamaran, Anda menyetujui syarat & ketentuan kami
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    </>
  );
}
