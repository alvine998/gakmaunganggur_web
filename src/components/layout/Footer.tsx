import Link from "next/link";
import { Globe, Mail, Share2, ExternalLink, ChevronRight } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Globe },
  { name: "Twitter", icon: Share2 },
  { name: "LinkedIn", icon: ExternalLink },
  { name: "Instagram", icon: Mail },
];

const footerColumns = [
  {
    title: "Untuk Pencari Kerja",
    links: [
      { name: "Cari Lowongan", href: "/lowongan" },
      { name: "Perusahaan", href: "/perusahaan" },
      { name: "Tips Karir", href: "/tips-karir" },
      { name: "Resume Builder", href: "/resume-builder" },
    ],
  },
  {
    title: "Untuk Perusahaan",
    links: [
      { name: "Pasang Lowongan", href: "/pasang-lowongan" },
      { name: "Cari Kandidat", href: "/cari-kandidat" },
      { name: "Harga", href: "/harga" },
      { name: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Tentang Kami", href: "/tentang-kami" },
      { name: "Blog", href: "/blog" },
      { name: "Hubungi Kami", href: "/hubungi-kami" },
      { name: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/">
                <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center cursor-pointer">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
              </Link>
              <Link href="/">
                <span className="text-xl font-bold cursor-pointer">KerjaAjaDulu.com</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform lowongan kerja terpercaya yang menghubungkan pencari kerja dengan perusahaan ternama di Indonesia.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 KerjaAjaDulu.com. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
