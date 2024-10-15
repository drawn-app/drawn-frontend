import ChatPane from "@/components/common/chatPane";
import Whiteboard from "@/components/common/whiteboard";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import WorkspaceNavBar from "@/components/workspaces/workspaceNavBar";

export default function WorkspacePage() {
    return (
        <div className="unpadding-page">
            <WorkspaceNavBar />
            <ResizablePanelGroup direction="horizontal" className="w-full h-[calc(100vh-4rem)]">
                <ResizablePanel defaultSize={70} maxSize={90} minSize={50} className="h-[calc(100vh-4rem)]">
                    <Whiteboard />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={30} maxSize={50} minSize={10} className="h-[calc(100vh-4rem)]">
                    <ChatPane />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}