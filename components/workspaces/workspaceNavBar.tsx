"use client";

import { Workspace, WorkspaceFullData } from "@/types/Workspace";
import MenuBar from "../common/nav/menuBar";
import ShareDialog from "../common/workspace/share/shareDialog";
import { useUser } from "@/lib/hooks/UserContext";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "@/types/User";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function WorkspaceNavBar({ data, userList }: { data: WorkspaceFullData , userList: User[] }) {
    const { currentUser } = useUser()

    return (
        <nav className="sticky top-0 h-16 backdrop-blur-md flex items-center justify-between px-4 border-b w-full">
            <div className="flex items-center gap-3">
                <a href="/workspaces" className="text-2xl">📒</a>
                <div className="flex flex-col">
                    <h1>{data.name}</h1>
                    {
                        (data.description) && (
                            <span className="text-gray-500 text-xs">{data.description}</span>
                        )
                    }
                </div>
            </div>
            
            <div className="flex gap-2">
                {userList.map((user) => (
                    <Avatar>
                        <AvatarImage src={user.avatar} alt="Avatar" width={20} height={20} className="object-cover" />
                        <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
                    </Avatar>
                ))}
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