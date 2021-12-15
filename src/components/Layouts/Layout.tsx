import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#7C3AED" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="antialiased">{children}</main>
    </>
  );
}
