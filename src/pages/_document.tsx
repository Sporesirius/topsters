import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr" itemScope itemType="https://schema.org/WebPage">
        <Head />
        <body className="bg-white dark:bg-black text-black dark:text-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
