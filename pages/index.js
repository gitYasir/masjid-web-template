import Head from "next/head";
import Body from "../Components/Body/Body";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ar-Rehman Trust & Masjid Usman</title>
        <meta name="description" content="Local Masjid" />
        <link rel="icon" href="/jama-masjid-svgrepo-com.svg" />
      </Head>
      <NavBar />
      <Body />
      <Footer />
    </>
  );
}
