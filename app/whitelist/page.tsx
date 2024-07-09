"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import { useWhitelist } from "../core/hooks/use-whitelist";
import AddWhitelistModal from "./components/add-whitelist-modal";

export default function Page() {
  const { get } = useWhitelist();
  const whitelist = get.data?.data ?? [];

  return (
    <div className="m-4">
      <AddWhitelistModal />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {whitelist.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
