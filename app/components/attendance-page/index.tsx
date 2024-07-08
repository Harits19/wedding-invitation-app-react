import { useText } from "@/app/hooks/use-text";
import InViewWrapper from "../inview-wrapper";
import { FaChevronDown } from "react-icons/fa";
import { useGuest } from "@/app/hooks/use-guest";
import Background1 from "../background-1";
import { Controller, useForm } from "react-hook-form";
import { AttendanceModel, AttendanceType } from "@/app/models/attendance-model";
import Input from "../input";
import { useAttendance } from "@/app/hooks/use-attendance";

export default function AttendancePage() {
  const text = useText();
  const inputClassName =
    "bg-wedprimary-color text-white px-4 py-3 text-base w-full outline-none rounded-lg placeholder-white placeholder-opacity-30";

  const { post } = useAttendance();
  const { trigger, isMutating, data, error } = post;

  console.log("error", error, data?.data, isMutating);
  const { name } = useGuest();
  const listAttendance: Record<AttendanceType, string> = {
    attend: text.sayaAkanDatang,
    not_attend: text.maafSayaTidakBisaDatang,
    not_sure: text.sayaMasihRagu,
  };

  const { control, handleSubmit } = useForm<AttendanceModel>({
    defaultValues: {
      attendance: "attend",
      name,
    },
  });
  return (
    <Background1>
      <div className="flex flex-1 justify-center flex-col items-center font-cardo text-black px-8">
        <InViewWrapper className="animate-fade-zoom text-[37px]">
          {text.reservasi}
        </InViewWrapper>
        <div className="h-4" />
        <InViewWrapper className="animate-fade-in-top-bottom w-full">
          <Controller
            control={control}
            name="name"
            rules={{
              required: {
                value: true,
                message: "Required",
              },
            }}
            render={({ field, fieldState }) => {
              return (
                <Input
                  onChange={field.onChange}
                  className={`${inputClassName} `}
                  placeholder={text.silahkanIsiNamaAnda}
                  defaultValue={name}
                  info={fieldState.error?.message}
                />
              );
            }}
          />
          <div className="h-4" />

          <div className={`relative w-full rounded-lg overflow-hidden`}>
            <Controller
              control={control}
              name="attendance"
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className={`${inputClassName}`}
                >
                  {Object.entries(listAttendance).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              )}
            />
            <div className="h-full pr-4 absolute right-0 bg-wedprimary-color top-0 flex flex-col items-center justify-center">
              <FaChevronDown className="text-white" />
            </div>
          </div>
        </InViewWrapper>

        <div className="h-8" />
        <InViewWrapper className="animate-fade-in-bottom-top w-full">
          <button
            className="px-4 py-3 text-lg text-white bg-wedbackground-color rounded-lg w-full"
            onClick={() => {
              handleSubmit((value) => {
                trigger(value);
              })();
            }}
          >
            Simpan
          </button>
        </InViewWrapper>

        <div className="h-16" />
      </div>
    </Background1>
  );
}
