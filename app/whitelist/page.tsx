"use client";

import { useWhitelist } from "../core/hooks/use-whitelist";
import AddWhitelistModal from "./components/add-whitelist-modal";
import { Button } from "../components/ui/button";
import { FaTrash } from "react-icons/fa";
import WedTable from "../components/table";

export default function Page() {
  const { get, del } = useWhitelist();
  const whitelist = get.data?.data ?? [];

  return (
    <WedTable
      add={<AddWhitelistModal />}
      items={{
        name: {
          title: "Name",
          cell: whitelist.map((item) => ({
            key: item.id,
            render: item.name,
          })),
        },
        action: {
          title: "Action",
          cell: whitelist.map((item) => ({
            key: item.id,
            render: (
              <Button
                variant={"destructive"}
                onClick={async () => {
                  await del.trigger(item);
                }}
              >
                <FaTrash />
              </Button>
            ),
          })),
        },
      }}
    />
  );
}
