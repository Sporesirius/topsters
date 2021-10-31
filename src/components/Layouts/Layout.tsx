import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const APP_DESCRIPTION =
    "topsters.me - Create collages and album charts.";
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta
          name="keywords"
          content="topsters, collage, album, charts"
        />
        <link rel="shortcut icon" href="#" />
        <link rel="apple-touch-icon" href="#" />
        <meta name="theme-color" content="#7C3AED" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="antialiased">{children}</main>
    </>
  );
}
