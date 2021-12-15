import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import "../styles/main.css";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
    theme?: string;
  };
};

export default function MyApp({
  Component,
  pageProps,
}: ComponentWithPageLayout) {
  return (
    <ThemeProvider attribute="class" forcedTheme={Component.theme || undefined}>
      <DefaultSeo
        defaultTitle="Topsters"
        titleTemplate="%s - Topsters"
        description="topsters.me - Create collages and album charts."
        canonical="https://topsters.me"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "topsters, collage, album, charts",
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "black-translucent",
          },
        ]}
        openGraph={{
          url: "https://topsters.me",
          title: "Topsters",
          description:
            "topsters.me - Create collages and album charts.",
          site_name: "Topsters",
        }}
      />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
