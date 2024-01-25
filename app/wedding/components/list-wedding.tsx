import MyTable from "@/app/components/table";
import { WeddingTable } from "@/app/model/database/wedding";
import { useQueryGetListWedding } from "@/app/wedding/hooks/use-query-get-list-wedding";
import { Box, Button, LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ListWedding({
  list: listWedding,
}: {
  list: Partial<WeddingTable>[];
}) {
  const router = useRouter();

  return (
    <>
      <MyTable
        items={listWedding.map((item, index) => [
          { header: "No", value: index + 1, className: "w-0 " },
          { header: "Wedding Name", value: item.name },
          {
            header: "Action",
            value: (
              <div className="flex flex-row gap-x-1">
                <Button
                  onClick={() => {
                    router.push(`/wedding/${item.id ?? ""}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    router.push(`/wedding/${item.id ?? ""}`);
                  }}
                >
                  Greeting
                </Button>
              </div>
            ),
          },
        ])}
      />
      {/* {error && <div>{JSON.stringify(error)}</div>} */}
    </>
  );
}
