export const siteConfig = {
  name: "KerjaAjaDulu.com",
  title: "KerjaAjaDulu.com - Platform Lowongan Kerja Terpercaya",
  description:
    "Platform lowongan kerja terpercaya untuk pencari kerja dan perusahaan di Indonesia.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://kerjaajadulu.com").replace(/\/$/, ""),
};

export const publicIndexableRoutes = [
  "/",
  "/lowongan",
  "/perusahaan",
  "/tentang-kami",
  "/hubungi-kami",
  "/blog",
  "/tips-karir",
  "/harga",
  "/enterprise",
  "/pasang-lowongan",
  "/cari-kandidat",
  "/resume-builder",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/cookie-policy",
] as const;

const noIndexPrefixes = ["/company", "/api"] as const;
const noIndexRoutes = ["/login", "/login-perusahaan", "/register", "/lamar"] as const;

export function getCanonicalUrl(path = "/") {
  const cleanPath = path.split(/[?#]/)[0] || "/";
  return `${siteConfig.url}${cleanPath === "/" ? "" : cleanPath}`;
}

export function shouldIndexRoute(pathname: string) {
  return (
    !noIndexRoutes.includes(pathname as (typeof noIndexRoutes)[number]) &&
    !noIndexPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
  );
}
