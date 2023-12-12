import Table from "@/app/components/table";
import { useQueryGetListWedding } from "@/app/wedding/hooks/use-query-get-list-wedding";
import { useRouter } from "next/navigation";

export default function ListWedding() {
  const { data: listWedding = [], error, isLoading } = useQueryGetListWedding();
  const router = useRouter();

  return (
    <>
      <Table
        items={listWedding.map((item, index) => [
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
      {error && <div>{error.message}</div>}
      <div>{isLoading ? "isLoading" : "isComplete"}</div>
    </>
  );
}
