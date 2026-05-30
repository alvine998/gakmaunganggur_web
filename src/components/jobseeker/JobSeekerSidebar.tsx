import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  FileCheck,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface JobSeekerSidebarProps {
  activePage: string;
}

const navItems = [
  { href: "/jobseeker/dashboard", label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
  { href: "/jobseeker/jobs", label: "Lowongan Kerja", icon: Briefcase, key: "jobs" },
  { href: "/jobseeker/applications", label: "Lamaran", icon: FileCheck, key: "applications" },
  { href: "/jobseeker/inbox", label: "Pesan", icon: MessageSquare, key: "inbox" },
  { href: "/jobseeker/profile", label: "Profil", icon: User, key: "profile" },
  { href: "/jobseeker/settings", label: "Pengaturan", icon: Settings, key: "settings" },
  { href: "/jobseeker/support", label: "Dukungan", icon: HelpCircle, key: "support" },
];

export default function JobSeekerSidebar({ activePage }: JobSeekerSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sky-100">
        <Link href="/jobseeker/dashboard">
          <span className="text-xl font-bold text-sky-600 cursor-pointer">
            KerjaAjaDulu.com
          </span>
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
            AP
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Ahmad Pratama</p>
            <p className="text-xs text-gray-500">Job Seeker</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.key;
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sky-500 text-white"
                  : "text-gray-600 hover:bg-sky-50 hover:text-sky-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sky-100">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Keluar
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <Menu className="w-5 h-5 text-gray-700" />
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        {sidebarContent}
      </aside>
    </>
  );
}
