import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import JobCategories from "@/components/sections/JobCategories";
import FeaturedJobs from "@/components/sections/FeaturedJobs";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>KerjaAjaDulu.com - Temukan Karir Impianmu</title>
        <meta name="description" content="Platform lowongan kerja terpercaya untuk pencari kerja dan perusahaan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar activePage="beranda" />
        <Hero />
        <TrustedCompanies />
        <JobCategories />
        <FeaturedJobs />
        <HowItWorks />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
