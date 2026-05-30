import Link from "next/link";

type PublicNavPage = "beranda" | "lowongan" | "perusahaan" | "tentang" | "blog" | "privasi";

interface NavbarProps {
  activePage?: PublicNavPage;
}

export default function Navbar({ activePage = "beranda" }: NavbarProps) {
  const navLinks = [
    { href: "/", label: "Beranda", key: "beranda" },
    { href: "/lowongan", label: "Lowongan", key: "lowongan" },
    { href: "/perusahaan", label: "Perusahaan", key: "perusahaan" },
    { href: "/tentang-kami", label: "Tentang Kami", key: "tentang" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-xl">G</span>
              </div>
            </Link>
            <Link href="/">
              <span className="text-xl font-bold text-gray-900 cursor-pointer">KerjaAjaDulu.com</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
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
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sky-600 hover:text-sky-700 font-medium transition-colors">
              Masuk
            </Link>
            <Link href="/register" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
              Daftar Gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
