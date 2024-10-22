"use client";

import { Workspace, WorkspaceFullData } from "@/types/Workspace";
import MenuBar from "../common/nav/menuBar";
import ShareDialog from "../common/workspace/share/shareDialog";
import { useUser } from "@/lib/hooks/UserContext";
import { Button } from "../ui/button";

export default function WorkspaceNavBar({ data }: { data: WorkspaceFullData }) {
    const { currentUser } = useUser()

    return (
        <nav className="sticky top-0 h-16 backdrop-blur-md flex items-center justify-between px-4 border-b w-full">
            <div>
                <h1>{data.name}</h1>
            </div>
            <div className="flex items-center gap-5">
                {
                    (data.ownerId === currentUser?.id) ? (
                        <ShareDialog defaultGlobalAccess={data.globalSharingType} defaultPersonAccesses={data.permissions} />
                    ) : (
                        <Button variant="outline" disabled>Share</Button>
                    )
                }
                <MenuBar />
            </div>
        </nav>
    );
}