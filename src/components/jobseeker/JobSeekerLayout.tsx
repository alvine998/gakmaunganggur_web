import Head from "next/head";
import JobSeekerSidebar from "./JobSeekerSidebar";

interface JobSeekerLayoutProps {
  children: React.ReactNode;
  activePage: string;
  title?: string;
}

export default function JobSeekerLayout({
  children,
  activePage,
  title,
}: JobSeekerLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - ` : ""}KerjaAjaDulu.com
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
        <JobSeekerSidebar activePage={activePage} />

        <main className="flex-1 min-w-0 p-4 pt-20 sm:p-6 sm:pt-20 lg:ml-64 lg:p-8">
          {children}
        </main>
      </div>
    </>
  );
}
