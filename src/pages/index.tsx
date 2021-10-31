import type { ReactElement } from "react";
import Layout from "@components/Layouts/Layout";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";
import Grid from "@components/Grid/Grid";
import GridControl from "@components/Grid/GridControl";

export default function Page() {
  return (
    <div className="h-screen grid grid-cols-6">
      <div className="col-start-1 col-end-3">
        <GridControl/>
        <ThemeSwitcher/>
      </div>
      <div className="col-start-3 col-end-7">
        <Grid/>
        </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Topsters">{page}</Layout>;
};
