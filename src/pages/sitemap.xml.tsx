import type { GetServerSideProps } from "next";
import { getCanonicalUrl, publicIndexableRoutes } from "@/utils/seo";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = publicIndexableRoutes
    .map((route) => {
      const priority = route === "/" ? "1.0" : "0.7";

      return [
        "  <url>",
        `    <loc>${escapeXml(getCanonicalUrl(route))}</loc>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
