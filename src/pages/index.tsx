import dynamic from "next/dynamic";
import Layout from "@components/Layouts/Layout";
import GridRender from "@components/Grid/GridRender";
import GridControl from "@components/Grid/GridControl";
//import KonvaTest from "@components/konva";
const ThemeSwitcher = dynamic(() => import("@components/ThemeSwitcher/ThemeSwitcher"), {
  ssr: false,
});

function IndexPage() {
  const {renderGridControl, selectedEntry} = GridControl()
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-start-1 col-end-4">
        {renderGridControl}
        <ThemeSwitcher />
      </div>
      <div className="col-start-4 col-end-13">
        <GridRender {...{selectedEntry}}/>
        {/*<KonvaTest />*/}
      </div>
    </div>
  );
}

IndexPage.PageLayout = Layout;
export default IndexPage;
