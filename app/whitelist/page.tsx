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
import { Button } from "../components/ui/button";
import { FaTrash } from "react-icons/fa";

export default function Page() {
  const { get, delete: deleteMethod } = useWhitelist();
  const whitelist = get.data?.data ?? [];

  return (
    <div className="m-4">
      <AddWhitelistModal />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {whitelist.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell className="">
                <Button
                  variant={"destructive"}
                  onClick={async () => {
                    await deleteMethod.trigger(item);
                  }}
                >
                  <FaTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
