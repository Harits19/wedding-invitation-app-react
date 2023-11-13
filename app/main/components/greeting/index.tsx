import Background from "@/app/components/background";
import Scaffold from "@/app/components/scaffold";
import { kText } from "@/constans/text";

export default function Greeting() {
  return (
    <Scaffold>
      {/* <Background className="-z-50" /> */}
      <div className="bg-white m-4 p-5 shadow-2xl h-[50vh] text-xs overflow-y-scroll">
        <span>🔵 21 {kText.totalUcapan}</span>
        <br />
        <span>🟢 21 {kText.orangMenyatakanHadir}</span>
        <div className="h-2" />
        <hr />
        <div className="h-2" />
        {[1, 1, 1, 1, 1, 1, 1, 1].map((e, index) => (
          <div className="mb-2" key={index}>
            <div className="text-sm font-semibold">
              Hamba Allah - 2023-10-15 12:08:52
            </div>
            <div className="leading-5">
              Selamat, sory bgt gk bisa dateng, beda pulau kitaaa.
              Sukses terusss kedepannya utk memajuan dunia perikanan indonesia.
            </div>
          </div>
        ))}
      </div>
      <div className="h-100" />
    </Scaffold>
  );
}
