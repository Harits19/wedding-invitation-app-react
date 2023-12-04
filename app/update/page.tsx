"use client";

import { ReactNode } from "react";
import Div from "../components/div";
import Input from "../components/input";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { WeddingModel } from "../model/wedding-model";

export default function Auth() {
  const methods = useForm<WeddingModel>({
    defaultValues: {
      bride: {
        titles: [""],
      },
      groom: {
        titles: [""],
      },
    },
  });
  const { register, watch, setValue } = methods;

  // const { onChange } = register("bride");

  console.log({ state: watch() });
  return (
    <FormProvider {...methods}>
      <Div className=" w-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="p-4 bg-white rounded-2xl w-1/2 flex flex-col m-6">
          <h1>Update Page</h1>
          <div className="h-6" />
          <div className="gap-y-2 flex flex-col">
            <Input
              withLabel
              placeholder="Wedding Name"
              {...register("name", { required: true })}
              onChangeVal={(val) => setValue("name", val)}
            />
            <Input
              withLabel
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
              onChangeVal={(val) => setValue("password", val)}
            />
            <Input
              withLabel
              placeholder="Date"
              type="date"
              {...register("date", { required: true })}
              onChangeVal={(val) => setValue("date", val)}
            />
            <Input
              withLabel
              placeholder="Music"
              {...register("music", { required: true })}
              onChangeVal={(val) => setValue("music", val)}
            />
            <NestedItem title="Photo">
              <Input
                label="Cover"
                type="file"
                {...register("photo.cover", { required: true })}
                onChangeVal={(val) => setValue("photo.cover", val)}
              />
              <Input
                label="Carousel"
                type="file"
                multiple
                {...register("photo.carousel", { required: true })}
                onChangeVal={(val) => setValue("photo.carousel", val)}
              />
              <Input
                label="Opening"
                type="file"
                {...register("photo.opening", { required: true })}
                onChangeVal={(val) => setValue("photo.opening", val)}
              />
              <Input
                label="Gallery"
                type="file"
                multiple
                {...register("photo.gallery", { required: true })}
                onChangeVal={(val) => setValue("photo.gallery", val)}
              />
              <Input
                label="Closing"
                type="file"
                {...register("photo.closing", { required: true })}
                onChangeVal={(val) => setValue("photo.closing", val)}
              />
            </NestedItem>
            <NestedItem title="Place">
              <Input
                withLabel
                placeholder="Text"
                onChangeVal={(val) => setValue("place.text", val)}
              />
              <Input
                withLabel
                placeholder="Url"
                onChangeVal={(val) => setValue("place.url", val)}
              />
            </NestedItem>
            <BrideGroom type="bride" title="Bride" />
            <BrideGroom type="groom" title="Groom" />
          </div>
          <div className="h-6" />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => {}}
          >
            Update
          </button>
        </div>
      </Div>
    </FormProvider>
  );
}

const NestedItem = (props: {
  children: ReactNode;
  title: string;
  action?: ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        {props.title}
        {props.action}
      </div>
      <div className="ml-4 flex flex-col gap-y-2">{props.children}</div>
    </>
  );
};

const BrideGroom = ({
  type,
  ...props
}: {
  title: string;
  type: "bride" | "groom";
}) => {
  const { watch, control, setValue } = useFormContext<WeddingModel>();
  const value = watch(type);
  const titles = value.titles;
  return (
    <NestedItem title={props.title}>
      <Input
        withLabel
        placeholder="Name"
        onChangeVal={(val) => setValue(`${type}.name`, val)}
      />
      <NestedItem
        title="Titles"
        action={
          <button
            className="bg-blue-500 text-xs rounded-md text-white p-2"
            onClick={() => {
              setValue(`${type}.titles`, [...titles, ""]);
            }}
          >
            Add Title
          </button>
        }
      >
        {titles.map((title, index) => {
          const isDisabled = index === 0;
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              <button
                className={`mt-5 tex-xs text-red-500 mr-2 ${
                  isDisabled ? "opacity-0" : ""
                }`}
                disabled={isDisabled}
                onClick={() => {
                  if (isDisabled) {
                    return;
                  }
                  const tempTitles = [...titles];
                  tempTitles.splice(index, 1);
                  setValue(`${type}.titles`, tempTitles);
                }}
              >
                Delete
              </button>
              <div className="flex flex-1 flex-col ">
                <Input
                  value={title}
                  withLabel
                  placeholder={`Title ${index + 1}`}
                  onChangeVal={(val) =>
                    setValue(`${type}.titles.${index}`, val)
                  }
                />
              </div>
            </div>
          );
        })}
      </NestedItem>
      <Input
        withLabel
        placeholder="Photo"
        onChangeVal={(val) => setValue(`${type}.photo`, val)}
      />
      <Input
        withLabel
        placeholder="Father"
        onChangeVal={(val) => setValue(`${type}.father`, val)}
      />
      <Input
        withLabel
        placeholder="Mother"
        onChangeVal={(val) => setValue(`${type}.mother`, val)}
      />
      <Input
        withLabel
        placeholder="Address"
        onChangeVal={(val) => setValue(`${type}.address`, val)}
      />
    </NestedItem>
  );
};
