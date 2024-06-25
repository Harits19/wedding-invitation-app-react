import { useText } from "@/app/hooks/useText";
import Background2 from "../background-2";
import InViewWrapper from "../inview-wrapper";
import { FaChevronDown } from "react-icons/fa";
import { useGuest } from "@/app/hooks/useGuest";
import ButtonBrown from "../button-brown";

export default function AttendancePage() {
  const text = useText();
  const inputClassName =
    "bg-aprimary-color text-white px-4 py-3 text-base w-full outline-none rounded-lg placeholder-white placeholder-opacity-30";
  const { name } = useGuest();
  return (
    <Background2>
      <div className="flex flex-1 justify-center flex-col items-center font-cardo text-black ">
        <InViewWrapper className="animate-fade-zoom text-[37px]">
          {text.reservasi}
        </InViewWrapper>
        <div className="h-4" />
        <input
          className={`${inputClassName} `}
          placeholder={text.silahkanIsiNamaAnda}
          defaultValue={name}
        />
        <div className="h-4" />

        <div className={`relative w-full rounded-lg overflow-hidden`}>
          <select className={`${inputClassName}`}>
            {[
              { value: "datang", label: text.sayaAkanDatang },
              {
                value: "ragu",
                label: text.sayaMasihRagu,
              },
              {
                value: "tidak_datang",
                label: text.maafSayaTidakBisaDatang,
              },
            ].map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="h-full pr-4 absolute right-0 bg-aprimary-color top-0 flex flex-col items-center justify-center">
            <FaChevronDown className="text-white" />
          </div>
        </div>

        <div className="h-8" />
        <button className="px-4 py-3 text-lg text-aprimary-color bg-" onClick={() => {}}>Simpan</button>
      </div>
    </Background2>
  );
}
