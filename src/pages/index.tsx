import type { ReactElement } from "react";
import Layout from "@components/Layouts/Layout";
import { ThemeSwitcher } from "@components/ThemeSwitcher/ThemeSwitcher";

export default function Page() {
  return (
    <>
      <p>Topsters</p>
      <ThemeSwitcher/>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Topsters">{page}</Layout>;
};
