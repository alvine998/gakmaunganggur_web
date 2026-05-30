import Head from "next/head";
import CompanySidebar from "./CompanySidebar";

interface CompanyLayoutProps {
  children: React.ReactNode;
  activePage: string;
  title?: string;
}

export default function CompanyLayout({
  children,
  activePage,
  title,
}: CompanyLayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - ` : ""}KerjaAjaDulu.com
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex">
        <CompanySidebar activePage={activePage} />

        <main className="flex-1 lg:ml-64 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </>
  );
}
