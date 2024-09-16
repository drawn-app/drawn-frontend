import NavigationBar from "@/components/common/navigationBar";
import WorkspaceTemplatePane from "@/components/common/workspaceTemplatePane";
import WorkspaceSelectorPane from "@/components/common/workspaceSelectorPane";

export default async function Workspaces() {
  return (
    <div className="unpadding-page">
      <NavigationBar />
      <WorkspaceTemplatePane />
      <WorkspaceSelectorPane />
    </div>
  );
}
