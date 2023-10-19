import Image from "next/image";
import { kSize } from "@/constans/size";

export default function Home() {
  const { width, height } = kSize.max.window;
  return (
    <main
      style={{
        flexDirection: "row",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          backgroundColor: "red",
          maxHeight: height,
          maxWidth: width,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Image
          src={"/public/next.svg"}
          alt="asd"
          width={150}
          height={122}
        />
      </div>
    </main>
  );
}
