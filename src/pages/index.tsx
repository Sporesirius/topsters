import Layout from "@components/Layouts/Layout";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";
import GridRender from "@components/Grid/GridRender";
import GridControl from "@components/Grid/GridControl";

function IndexPage() {
  const {renderGridControl, selected} = GridControl()
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-start-1 col-end-4">
        {renderGridControl}
        <ThemeSwitcher/>
      </div>
      <div className="col-start-4 col-end-13">
        <GridRender {...{selected}}/>
        </div>
    </div>
  );
}

IndexPage.PageLayout = Layout;
export default IndexPage;
