"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { useUser } from "@/lib/hooks/UserContext";
import MenuBar from "./menuBar";

export default function NavigationBar() {

    const {isLoading, currentUser} = useUser()

    return (
        <nav className="sticky top-0 h-16 backdrop-blur-md flex items-center justify-between px-4 border-b w-full">
            <div>
                <h1>Drawn</h1>
            </div>
            <div className="flex gap-3">
                {
                    (!isLoading && currentUser) && (
                        <MenuBar />
                    )
                }
                {
                    (!isLoading && !currentUser) && (
                        <>
                            <Link href="/register" className="decoration-black">
                                <Button variant="secondary">Sign Up</Button>
                            </Link>
                            <Link href="/login" className="decoration-black">
                                <Button>Sign In</Button>
                            </Link>
                        </>
                    )
                }
                
                
            </div>
        </nav>
    );
}