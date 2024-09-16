"use client";

import { useParams } from 'next/navigation'
import { useEffect } from 'react';

export default function WorkspaceNavBar() {
    const params = useParams<{ id: string }>()

    useEffect(() => {
        console.log(params.id)
    }, [params.id])

    return (
        <nav className="sticky top-0 h-16 backdrop-blur-md flex items-center justify-between px-4 border-b w-full">
            <div>
                <h1>Workspace Name Here</h1>
            </div>
        </nav>
    );
}