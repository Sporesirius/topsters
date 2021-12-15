import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-black dark:text-white text-black antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
