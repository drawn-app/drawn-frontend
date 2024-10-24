"use client";

import dynamic from "next/dynamic";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";
import { boolean } from "zod";

const Excalidraw = dynamic(
    async () => (await import("@excalidraw/excalidraw")).Excalidraw,
    {
        ssr : false
    }
);

export default function Whiteboard() {

    const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>();
    const clientElement = useRef<ExcalidrawElement[]>([]);
    const isUpdate = useRef<boolean>(false);

    function updateElements(elements: readonly ExcalidrawElement[]) {
        const cloneElements = elements.map((element) => ({...element}));
        clientElement.current = cloneElements;
        isUpdate.current = true;
    }

    async function sendUpdateToServer() {
        // send data to server
        isUpdate.current = false;
        console.log(`Send data ${JSON.stringify(clientElement.current)}to Server`);
    }

    function isSameElement(elementArr1: readonly ExcalidrawElement[], elementArr2: readonly ExcalidrawElement[]): boolean {
        // this method compare two element array and return true if they are same to prevent unnecessary sending data to server by compare update time
        
        if (elementArr1.length !== elementArr2.length) return false;
        return elementArr1.every((element, index) => { 
            return element.id === elementArr2[index].id && element.updated === elementArr2[index].updated;
        });
    }

    useEffect(() => {
        if (excalidrawAPI){
            excalidrawAPI.onPointerUp(() => {
                if (isUpdate.current) {
                    sendUpdateToServer();
                }
            });
        }
    },[excalidrawAPI])

    return (
        <div className="w-full h-full">
            <Excalidraw 
                excalidrawAPI={(api) => setExcalidrawAPI(api)}
                 onChange={(excalidrawElements, appState, files) => {
                     if (!isSameElement(excalidrawElements, clientElement.current)) {
                        updateElements(excalidrawElements);
                        
                    }
        
                     //console.log(files);
                 }}    
            />
        </div>
    )
}