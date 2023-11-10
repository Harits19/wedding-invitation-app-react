import TextDiv from "../averia";
import Scaffold from "../scaffold";

export default function Message() {
  return (
    <div className="fixed overflow-y-hidden z-[100] top-0 flex flex-row animate-message w-screen justify-center">
      <div className="flex flex-1" />
      <div className="max-w-360 pb-10">
        <div className="bg-white rounded mx-4 mt-2 p-2 shadow-xl">
          <TextDiv family="poppins">
            <div className="line-clamp-1 text-[10px]">Fulan</div>
            <div className="h-2" />

            <div className="line-clamp-1 text-[10px]">
              Selamat mirzaaaa, sory bgt gk bisa dateng, beda pulau kitaaa.
              Sukses terusss kedepannya utk memajuan dunia perikanan indonesia.
            </div>
          </TextDiv>
        </div>
      </div>
      <div className="flex flex-1" />
    </div>
  );
}
