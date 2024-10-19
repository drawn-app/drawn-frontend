"use client";

import ChatPane from "@/components/common/chat/chatPane";
import Whiteboard from "@/components/common/whiteboard";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import WorkspaceNavBar from "@/components/workspaces/workspaceNavBar";
import { useUser } from "@/lib/hooks/UserContext";
import { Workspace } from "@/types/Workspace";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WorkspacePage() {
    const params = useParams<{ id: string }>()
    const router = useRouter()
    const {isLoading, currentUser} = useUser()

    const [workspace, setWorkspace] = useState<Workspace | null>(null)

    async function getWorkspace() {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/workspaces/" + params.id, {
            credentials: 'include',
        })
        if (!res.ok) {
            router.push("/workspaces")
        } else {
            const data = await res.json()
            setWorkspace(data)
        }
    }

    useEffect(() => {
        getWorkspace()
    }, [params.id])

    if (!workspace || (isLoading)) return null

    if (!isLoading && !currentUser) {
        router.push("/login")
        return null
    }


    return (
        <div className="unpadding-page">
            <WorkspaceNavBar data={workspace} />
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