import { useSearchParams } from "next/navigation";



export default function useToQuery(){

  return useSearchParams().get("to") ?? "Nama Tamu"
}