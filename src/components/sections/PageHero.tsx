import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight?: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute top-16 right-4 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 left-4 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {badge && BadgeIcon && (
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BadgeIcon className="w-4 h-4" />
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}{" "}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text gradient-hero">
                {titleHighlight}
              </span>
            )}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
