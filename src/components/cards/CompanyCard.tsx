import {
  MapPin,
  Users,
  Briefcase,
  MapPinned,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employees: string;
  jobs: number;
  rating: number;
  description: string;
  benefits: string[];
  isVerified: boolean;
  featured?: boolean;
}

interface CompanyCardProps {
  company: Company;
  variant?: "default" | "featured";
}

export default function CompanyCard({ company, variant = "default" }: CompanyCardProps) {
  if (variant === "featured") {
    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                {company.name}
              </h3>
              {company.isVerified && (
                <CheckCircle2 className="w-5 h-5 text-sky-500" />
              )}
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {company.industry}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">{company.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-4 line-clamp-2">{company.description}</p>
        
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPinned className="w-4 h-4" />
            {company.location}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {company.employees} karyawan
          </span>
          <span className="flex items-center gap-1 text-sky-600 font-medium">
            <Briefcase className="w-4 h-4" />
            {company.jobs} lowongan
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {company.benefits.slice(0, 4).map((benefit, i) => (
            <span key={i} className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs font-medium">
              {benefit}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
          <button className="text-sky-600 hover:text-sky-700 font-medium text-sm flex items-center gap-1 group/btn">
            Lihat Profil
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
          <img
            src={company.logo}
            alt={company.name}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
              {company.name}
            </h3>
            {company.isVerified && (
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
            )}
          </div>
          <p className="text-sm text-gray-500">{company.industry}</p>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {company.location}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          {company.employees}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {company.benefits.slice(0, 3).map((benefit, i) => (
          <span key={i} className="bg-sky-50 text-sky-600 px-2 py-1 rounded-md text-xs font-medium">
            {benefit}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sky-600 font-medium text-sm flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          {company.jobs} lowongan
        </span>
        <button className="bg-sky-50 text-sky-600 hover:bg-sky-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Lihat Lowongan
        </button>
      </div>
    </div>
  );
}
