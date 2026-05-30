import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Bell,
  ChevronDown,
  User,
  Briefcase,
  Inbox,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type PublicNavPage = "beranda" | "lowongan" | "perusahaan" | "tentang" | "blog" | "hubungi" | "harga" | "enterprise" | "tips" | "resume" | string;

interface NavbarProps {
  activePage?: PublicNavPage;
  isLoggedIn?: boolean;
  user?: {
    name: string;
    email: string;
  };
}

export default function Navbar({
  activePage = "beranda",
  isLoggedIn = false,
  user,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationCount] = useState(3);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Beranda", key: "beranda" },
    { href: "/lowongan", label: "Lowongan", key: "lowongan" },
    { href: "/perusahaan", label: "Perusahaan", key: "perusahaan" },
    { href: "/tentang-kami", label: "Tentang Kami", key: "tentang" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href="/"
              aria-label="KerjaAjaDulu.com beranda"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-xl">G</span>
              </div>
            </Link>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <span className="text-lg sm:text-xl font-bold text-gray-900 cursor-pointer truncate block">
                KerjaAjaDulu.com
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`font-medium transition-colors ${
                  activePage === link.key
                    ? "text-sky-600 border-b-2 border-sky-600 pb-1"
                    : "text-gray-600 hover:text-sky-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  className="relative p-2 text-gray-600 hover:text-sky-600 transition-colors"
                  aria-label="Notifikasi"
                >
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {notificationCount}
                    </span>
                  )}
                </button>

                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 text-gray-700 hover:text-sky-600 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold text-sm">
                      {user?.name?.charAt(0) ?? "U"}
                    </div>
                    <span className="hidden lg:block text-sm font-medium">
                      {user?.name ?? "User"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                          {user?.name ?? "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email ?? "user@example.com"}
                        </p>
                      </div>

                      <Link
                        href="/jobseeker/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <User className="h-4 w-4 text-gray-400" />
                        Profil Saya
                      </Link>
                      <Link
                        href="/jobseeker/history"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        Riwayat Lamaran
                      </Link>
                      <Link
                        href="/jobseeker/inbox"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Inbox className="h-4 w-4 text-gray-400" />
                        Pesan Masuk
                      </Link>

                      <div className="my-1 border-t border-gray-100" />

                      <Link
                        href="/login"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Daftar Gratis
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="lg:hidden inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    activePage === link.key
                      ? "bg-sky-50 text-sky-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {isLoggedIn ? (
              <div className="mt-4">
                <div className="rounded-lg bg-gray-50 p-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold">
                      {user?.name?.charAt(0) ?? "U"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {user?.name ?? "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user?.email ?? "user@example.com"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-1">
                  <Link
                    href="/jobseeker/profile"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  >
                    <User className="h-4 w-4" />
                    Profil Saya
                  </Link>
                  <Link
                    href="/jobseeker/history"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  >
                    <Briefcase className="h-4 w-4" />
                    Riwayat Lamaran
                  </Link>
                  <Link
                    href="/jobseeker/inbox"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-sky-600"
                  >
                    <Inbox className="h-4 w-4" />
                    Pesan Masuk
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-lg border border-sky-100 px-4 py-2.5 font-medium text-sky-600"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 font-medium text-white shadow-md"
                >
                  Daftar Gratis
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
