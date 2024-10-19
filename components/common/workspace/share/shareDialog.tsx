"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import GeneralAccessSelector from "./generalAccessSelector";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
    defaultAccess: "no" | "viewer" | "editor"
}

export default function ShareDialog({ defaultAccess }: ShareDialogProps) {
    const params = useParams<{ id: string }>()
    const { toast } = useToast()

    const [addEmail, setAddEmail] = useState<string>('')
    const [generalAccess, setGeneralAccess] = useState<"no" | "viewer" | "editor">(defaultAccess)

    async function changeGeneralAccess(access: "no" | "viewer" | "editor") {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/workspaces/" + params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                globalSharingType: access
            }),
            credentials: 'include'
        })
        if (response.ok) {
            setGeneralAccess(access)
            toast({
                title: "Successfully change general access",
                description: "The general access has been changed",
                className: "bg-white"
            })
        } else {
            toast({
                variant: "destructive",
                title: "Failed to change general access",
                description: "Please try again later",
            })
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Share</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Sharing</DialogTitle>
                </DialogHeader>
                <div className="w-full flex flex-col gap-3">
                    <Label className="text-base">People with access</Label>
                    <Input 
                        type="text" 
                        placeholder="Enter email" 
                        value={addEmail}
                        onChange={(e) => setAddEmail(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <Label className="text-base">General access</Label>
                    <GeneralAccessSelector access={generalAccess} onChange={changeGeneralAccess} />
                </div>
                

            </DialogContent>
        </Dialog>
    );
}