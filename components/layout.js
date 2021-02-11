import Link from "next/link";
import Head from "next/head";
import Nav from "./nav";
import Image from 'next/image'

export default function Layout({
  children,
  title = "FSEM - Lisboa",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav />
      </header>

      {children}

      <footer className="bg-gray-200 border-t border-gray-50 p-4 text-lg text-white text-center font-bold items-center">
      <Image
        src="/Lg_FSEM2021_200px.svg"
        alt="Algoritmo Digital"
        width={200}
        height={50}
      />
      </footer>
    </div>
  );
}
