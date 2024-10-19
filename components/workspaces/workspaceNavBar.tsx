"use client";

import { Workspace } from "@/types/Workspace";
import MenuBar from "../common/nav/menuBar";
import ShareDialog from "../common/workspace/share/shareDialog";

export default function WorkspaceNavBar({ data }: { data: Workspace }) {
    return (
        <nav className="sticky top-0 h-16 backdrop-blur-md flex items-center justify-between px-4 border-b w-full">
            <div>
                <h1>{data.name}</h1>
            </div>
            <div className="flex items-center gap-5">
                <ShareDialog defaultAccess={data.globalSharingType} />
                <MenuBar />
            </div>
        </nav>
    );
}