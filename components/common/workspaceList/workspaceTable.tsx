"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Workspace } from "@/types/Workspace";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/hooks/UserContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookText, Pencil, Trash } from "lucide-react";
import DeleteWorkspceDialog from "./deleteWorkspaceDialog";
import EditWorkspaceDialog from "./editWorkspaceDialog";

export interface WorkspaceTableProps {
  id: string;
  name: string;
  owner: string;
  editedDate: string;
}

function WorkspaceRow({ data, refresh }: { data: Workspace, refresh: () => void }) {
  const router = useRouter();
  const {currentUser} = useUser()

  return (
    <TableRow className="cursor-pointer">
      <TableCell onClick={() => router.push('/workspaces/' + data.id)} className="font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
            clip-rule="evenodd"
          />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      </TableCell>
      <TableCell onClick={() => router.push('/workspaces/' + data.id)} className="font-medium">{data.name}</TableCell>
      <TableCell onClick={() => router.push('/workspaces/' + data.id)}>{(data.ownerId === currentUser?.id) ? "me" : data.ownerId}</TableCell>
      <TableCell onClick={() => router.push('/workspaces/' + data.id)}>{new Date(data.createdAt).toLocaleString()}</TableCell>
      <TableCell className="text-right flex items-center">
        <EditWorkspaceDialog workspaceData={data} refresh={refresh} />
        <DeleteWorkspceDialog workspaceId={data.id} refresh={refresh} />
      </TableCell>
    </TableRow>
  );
}

export function WorkspaceTable({ data, refresh }: { data: Workspace[], refresh: () => void }) {
  return (
    <Table>
      {/* <TableCaption>Your recent workspace</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-[400px]">Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Created Date</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <WorkspaceRow key={item.id} data={item} refresh={refresh} />
        ))}
      </TableBody>
    </Table>
  );
}
