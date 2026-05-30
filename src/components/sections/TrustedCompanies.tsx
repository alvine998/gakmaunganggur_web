import Link from "next/link";

const companies = [
  { id: 1, name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { id: 2, name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { id: 3, name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { id: 4, name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { id: 5, name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { id: 6, name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/perusahaan" className="block text-center text-gray-500 mb-8 hover:text-gray-700 transition-colors">
          Dipercaya oleh perusahaan ternama
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {companies.map((company) => (
            <Link key={company.id} href={`/perusahaan/${company.id}`} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <span className="text-xl font-bold text-gray-400">{company.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
