import { Briefcase, Users, TrendingUp, Star } from "lucide-react";

const stats = [
  { value: "10,000+", label: "Lowongan Kerja", icon: Briefcase },
  { value: "500+", label: "Perusahaan", icon: Users },
  { value: "50,000+", label: "Pencari Kerja", icon: TrendingUp },
  { value: "95%", label: "Tingkat Keberhasilan", icon: Star },
];

export default function Stats() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sky-100 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
