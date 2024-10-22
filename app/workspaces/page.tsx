import NavigationBar from "@/components/common/nav/navigationBar";
import WorkspaceTemplatePane from "@/components/common/workspaceList/workspaceTemplatePane";
import WorkspaceSelectorPane from "@/components/common/workspaceList/workspaceSelectorPane";

export default async function Workspaces() {
  return (
    <div className="unpadding-page">
      <NavigationBar />
      {/* <WorkspaceTemplatePane /> */}
      <WorkspaceSelectorPane />
    </div>
  );
}
