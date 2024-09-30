import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/Navbar";
import "../../public/fonts/fontstyle.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Majd Soubh</title>
        <meta name="description" content="Majd Soubh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <NavBar className="bg-slate-50 dark:bg-dark"></NavBar>
      <main
        className={`${montserrat.variable} font-mont w-full   min-h-screen bg-slate-50 dark:bg-dark`}
      >
        <Component {...pageProps} />
        {/* Footer
        <Footer></Footer> */}
      </main>
    </>
  );
}
