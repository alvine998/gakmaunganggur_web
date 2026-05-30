import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  User,
  Building2,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"jobseeker" | "company">("jobseeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const benefits = [
    "Akses ke ribuan lowongan kerja",
    "Simpan lowongan favorit",
    "Lamar pekerjaan dengan mudah",
    "Dapatkan notifikasi lowongan baru",
    "Buat profil profesional",
  ];

  return (
    <>
      <Head>
        <title>Daftar - KerjaAjaDulu.com</title>
        <meta name="description" content="Daftar akun baru di KerjaAjaDulu.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-green-50 flex flex-col">
        {/* Header */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">KerjaAjaDulu.com</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Benefits */}
            <div className="flex-1 hidden lg:block">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Bergabung dengan{" "}
                <span className="text-transparent bg-clip-text gradient-hero">
                  KerjaAjaDulu.com
                </span>
              </h2>
              <p className="text-gray-600 mb-8">
                Daftar sekarang dan mulai perjalanan karir impianmu
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Register Form */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                {/* Icon */}
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="w-8 h-8 text-sky-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Buat Akun Baru
                </h1>
                <p className="text-gray-500 text-center mb-6">
                  Pilih jenis akun yang ingin dibuat
                </p>

                {/* User Type Selector */}
                <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setUserType("jobseeker")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      userType === "jobseeker"
                        ? "bg-white text-sky-600 shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Pencari Kerja
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("company")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      userType === "company"
                        ? "bg-white text-sky-600 shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    Perusahaan
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {userType === "company" ? "Nama Perusahaan" : "Nama Lengkap"}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={userType === "company" ? "PT Contoh Indonesia" : "John Doe"}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@contoh.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Minimal 8 karakter"
                        className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Konfirmasi Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        placeholder="Ulangi password"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-sky-500 rounded border-gray-300 focus:ring-sky-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      Saya menyetujui{" "}
                      <a href="#" className="text-sky-600 hover:underline">Syarat & Ketentuan</a>{" "}
                      dan{" "}
                      <a href="#" className="text-sky-600 hover:underline">Kebijakan Privasi</a>
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full gradient-sky text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" />
                    Daftar {userType === "company" ? "sebagai Perusahaan" : "sebagai Pencari Kerja"}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-sm text-gray-400">atau</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social Register */}
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Daftar dengan Google
                </button>

                {/* Login Link */}
                <p className="text-center text-gray-500 mt-6">
                  Sudah punya akun?{" "}
                  <Link href="/login" className="text-sky-600 hover:text-sky-700 font-semibold">
                    Masuk
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
