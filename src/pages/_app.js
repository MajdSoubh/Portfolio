import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/Navbar";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main
        className={`${montserrat.variable} font-mont w-full  min-h-screen bg-light dark:bg-dark`}
      >
        <Component {...pageProps} />
        {/* Footer
        <Footer></Footer> */}
      </main>
    </>
  );
}
