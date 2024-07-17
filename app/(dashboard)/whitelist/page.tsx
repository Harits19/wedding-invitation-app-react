"use client";

import { useWhitelist } from "../../core/hooks/use-whitelist";
import AddWhitelistModal from "./components/add-whitelist-modal";
import { Button } from "../../components/ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";
import WedTable from "../../components/table";

export default function Page() {
  const { get, del, update } = useWhitelist();
  const whitelist = get.data?.data ?? [];

  return (
    <WedTable
      add={<AddWhitelistModal />}
      list={whitelist}
      items={{
        name: {
          title: "Name",
          cell: (value) => value.name,
        },
        action: {
          title: "Action",
          cell: (item) => (
            <div className="flex flex-row gap-x-2">
              <Button
                variant={"destructive"}
                onClick={async () => {
                  await del.trigger({ token: "123", data: item });
                }}
              >
                <FaTrash />
              </Button>
              <Button
                onClick={async () => {
                  await update.trigger({
                    token: "123",
                    data: { ...item, name: "Test Update" },
                  });
                }}
              >
                <FaEdit />
              </Button>
            </div>
          ),
        },
      }}
    />
  );
}
