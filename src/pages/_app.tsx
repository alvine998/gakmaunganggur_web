import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import CookieConsent from "@/components/ui/CookieConsent";
import { getCanonicalUrl, shouldIndexRoute, siteConfig } from "@/utils/seo";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = getCanonicalUrl(router.asPath);
  const robots = shouldIndexRoute(router.pathname)
    ? "index, follow"
    : "noindex, nofollow";

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
      </Head>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
