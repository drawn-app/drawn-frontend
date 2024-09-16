import { WorkspaceTable } from "@/components/common/workspaceTable";
import { WorkspaceTableProps } from "@/components/common/workspaceTable";
export default async function WorkspaceSelectorPane() {
  //   const data = await fetch(requestUrl);
  const mockData: WorkspaceTableProps[] = [
    {
      id: "1",
      name: "Workspace 1",
      owner: "Nattapong",
      editedDate: "9 June 2024",
    },
    {
      id: "2",
      name: "Workspace 2",
      owner: "Jirayut ",
      editedDate: "9 June 2024",
    },
    {
      id: "3",
      name: "Workspace 3",
      owner: "Weerapat",
      editedDate: "9 June 2024",
    },
    {
      id: "4",
      name: "Workspace 4",
      owner: "Sorawit",
      editedDate: "9 June 2024",
    },
    {
      id: "5",
      name: "Workspace 5",
      owner: "Jutatuch",
      editedDate: "9 June 2024",
    },
  ];

  return (
    <div className="flex flex-col flex-grow bg-white w-screen justify-start items-center pt-4 pb-6">
      <div className="grid grid-rows-auto gap-y-2 w-[400px] md:w-[720px] lg:w-[1000px]">
        <div className="flex flex-row w-full justify-start items-center">
          <h2 className="font-bold text-s md:text-l lg:text-xl pl-10 md:pl-12 lg:pl-5">
            Recent workspace
          </h2>
        </div>
        <div className="flex flex-row px-4">
          <WorkspaceTable data={mockData} />
        </div>
      </div>
    </div>
  );
}
