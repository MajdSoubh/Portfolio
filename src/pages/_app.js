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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
