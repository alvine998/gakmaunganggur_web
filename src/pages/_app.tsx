import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieConsent from "@/components/ui/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}
