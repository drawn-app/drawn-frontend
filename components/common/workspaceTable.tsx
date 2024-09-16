import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Dropdown2 } from "@/components/common/dropDown2";

export interface WorkspaceTableProps {
  id: string;
  name: string;
  owner: string;
  editedDate: string;
}

function WorkspaceRow({ data }: { data: WorkspaceTableProps }) {
  return (
    <TableRow>
      <TableCell className="font-medium">
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
      <TableCell className="font-medium">{data.name}</TableCell>
      <TableCell>{data.owner}</TableCell>
      <TableCell>{data.editedDate}</TableCell>
      <TableCell className="text-right">
        <Dropdown2 />
      </TableCell>
    </TableRow>
  );
}

export function WorkspaceTable({ data }: { data: WorkspaceTableProps[] }) {
  return (
    <Table>
      <TableCaption>Your recent workspace</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-[400px]">Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Recently edited date</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <WorkspaceRow key={item.id} data={item} />
        ))}
      </TableBody>
    </Table>
  );
}
