import TextDiv from "../averia";
import Scaffold from "../scaffold";

export default function Message() {
  return (
    <div className="fixed overflow-y-hidden z-[100] top-0 animate-message">
      <Scaffold transparent={true}>
        <div className="bg-white rounded mx-4 mt-2 p-2 ">
          <TextDiv family="poppins">
            <div className="line-clamp-1 text-[10px]">Fulan</div>
            <div className="h-2" />

            <div className="line-clamp-1 text-[10px]">
              Selamat mirzaaaa, sory bgt gk bisa dateng, beda pulau kitaaa.
              Sukses terusss kedepannya utk memajuan dunia perikanan indonesia.
            </div>
          </TextDiv>
        </div>
      </Scaffold>
    </div>
  );
}
