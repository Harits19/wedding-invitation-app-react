import MyTable from "@/app/components/table";
import { WeddingTable } from "@/app/model/database/wedding";
import { useQueryGetListWedding } from "@/app/wedding/hooks/use-query-get-list-wedding";
import { useRouter } from "next/navigation";

export default function ListWedding() {
  const {
    data: listWedding = [],
    error,
    isLoading,
  } = ({} as any) ?? useQueryGetListWedding();
  const listWeddingDummy: Partial<WeddingTable>[] = [
    {
      name: "Dummy 1",
    },
    {
      name: "Dummy 1",
    },
  ];
  const router = useRouter();

  return (
    <>
      <MyTable
        items={listWeddingDummy.map((item, index) => [
          { header: "No", value: index + 1, className: "w-0 " },
          { header: "Wedding Name", value: item.name },
          {
            header: "Action",
            value: (
              <button
                onClick={() => {
                  router.push(`/wedding/${item.id ?? ""}`);
                }}
              >
                Edit
              </button>
            ),
          },
        ])}
      />
      {/* {error && <div>{JSON.stringify(error)}</div>} */}
      <div>{isLoading ? "isLoading" : "isComplete"}</div>
    </>
  );
}
