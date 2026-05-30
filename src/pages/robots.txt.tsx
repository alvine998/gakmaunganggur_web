import type { GetServerSideProps } from "next";
import { siteConfig } from "@/utils/seo";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robots = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /company/",
    "Disallow: /login",
    "Disallow: /login-perusahaan",
    "Disallow: /register",
    "Disallow: /lamar",
    `Sitemap: ${siteConfig.url}/sitemap.xml`,
    "",
  ].join("\n");

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return { props: {} };
};

export default function Robots() {
  return null;
}
