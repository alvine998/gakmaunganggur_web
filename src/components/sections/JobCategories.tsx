import Link from "next/link";
import {
  Code,
  BarChart3,
  DollarSign,
  Palette,
  HeartPulse,
  BookOpen,
} from "lucide-react";

const jobCategories = [
  { id: 1, icon: Code, title: "Technology", count: 1250, color: "text-sky-600", bg: "bg-sky-100" },
  { id: 2, icon: BarChart3, title: "Marketing", count: 890, color: "text-green-600", bg: "bg-green-100" },
  { id: 3, icon: DollarSign, title: "Finance", count: 650, color: "text-sky-600", bg: "bg-sky-100" },
  { id: 4, icon: Palette, title: "Design", count: 420, color: "text-green-600", bg: "bg-green-100" },
  { id: 5, icon: HeartPulse, title: "Healthcare", count: 380, color: "text-sky-600", bg: "bg-sky-100" },
  { id: 6, icon: BookOpen, title: "Education", count: 310, color: "text-green-600", bg: "bg-green-100" },
];

export default function JobCategories() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi Kategori Pekerjaan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan pekerjaan sesuai minat dan keahlianmu dari berbagai kategori
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {jobCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href="/lowongan"
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-sky-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 ${category.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.count} lowongan</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
