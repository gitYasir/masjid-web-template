import Head from "next/head";
import Image from "next/image";
import Body from "../Components/Body/Body";
import NavBar from "../Components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Masjid Name</title>
        <meta name="description" content="Local Masjid" />
        <link rel="icon" href="/jama-masjid-svgrepo-com.svg" />
      </Head>
      <NavBar />
      <Body />
    </>
  );
}
