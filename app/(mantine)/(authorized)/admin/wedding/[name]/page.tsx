"use client";
import UpdateCreateWedding from "../components/update-create-wedding";
import { useQueryGetDetailWedding } from "./hooks/use-query-get-detail-wedding";

export default function WeddingDetail({ params }: { params: { id: string } }) {
  // console.log('wedding detail', params);
  const { data, isLoading } = useQueryGetDetailWedding(params);
  console.log({ data, isLoading });
  if (isLoading) {
    return <div>isLoading</div>;
  }
  return <UpdateCreateWedding initialValue={data} onSubmit={(val) => {}} />;
}
