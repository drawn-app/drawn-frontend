"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useState } from "react";

export default function Whiteboard() {

    const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>()

    function updateElements(elements: readonly ExcalidrawElement[]) {
        console.log(elements)
    }

    return (
        <div className="w-full h-full">
            <Excalidraw 
                excalidrawAPI={(api) => setExcalidrawAPI(api)}
                onChange={(excalidrawElements, appState, files) => {
                    updateElements(excalidrawElements)
                }}    
            />
        </div>
    )
}