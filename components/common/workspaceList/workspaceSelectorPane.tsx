"use client";

import { WorkspaceTable } from "@/components/common/workspaceList/workspaceTable";
import { WorkspaceTableProps } from "@/components/common/workspaceList/workspaceTable";
import CreateWorkspaceDialog from "./createWorkspaceDialog";
import { useEffect, useState } from "react";
import { Workspace } from "@/types/Workspace";

export default function WorkspaceSelectorPane() {

  const [data, setData] = useState<Workspace[]>([]);

  async function fetchData() {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/workspaces",{
      credentials : 'include',
    });

    if (!response.ok) {
      return;
    }

    const data: Workspace[] = await response.json();
    setData(data);
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className="flex flex-col flex-grow bg-white w-full justify-start items-center pt-4 pb-6">
      <div className="grid grid-rows-auto gap-y-2 w-[400px] md:w-[720px] lg:w-[1000px]">
        <div className="flex flex-row w-full justify-between items-center">
          <h2 className="font-bold text-s md:text-l lg:text-xl pl-10 md:pl-12 lg:pl-5">
            Recent workspace
          </h2>
          <div className="flex gap-5">
            <CreateWorkspaceDialog />
          </div>
        </div>
        <div className="flex flex-row px-4">
          <WorkspaceTable data={data} />
        </div>
      </div>
    </div>
  );
}
