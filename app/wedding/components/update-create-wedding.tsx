"use client";

import { ReactNode } from "react";
import Div from "../../components/div";
import Input from "../../components/input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { WeddingModel } from "../../model/wedding-model";
import Button from "../../components/button";

export default function UpdateCreateWedding() {
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
  const { formState, control } = methods;

  return (
    <FormProvider {...methods}>
      <Div className=" w-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="p-4 bg-white rounded-2xl w-1/2 flex flex-col m-6">
          <h1>Create Page</h1>
          <div className="h-6" />
          <div className="gap-y-2 flex flex-col">
            <Input
              controller={{ control, name: "name" }}
              withLabel
              required
              placeholder="Wedding Name"
            />
            <Input
              controller={{ control, name: "password" }}
              withLabel
              required
              placeholder="Password"
              type="password"
            />
            <Input
              controller={{ control, name: "date" }}
              withLabel
              placeholder="Date"
              type="date"
              required
            />
            <Input
              withLabel
              placeholder="Music"
              required
              controller={{ control, name: "music" }}
            />
            <NestedItem title="Photo">
              <Input
                label="Cover"
                type="file"
                required
                controller={{ control, name: "photo.cover" }}
              />
              <Input
                label="Carousel"
                type="file"
                multiple
                controller={{ control, name: "photo.carousel" }}
                required
              />
              <Input
                label="Opening"
                type="file"
                controller={{ control, name: "photo.opening" }}
                required
              />
              <Input
                label="Gallery"
                type="file"
                multiple
                controller={{ control, name: "photo.gallery" }}
                required
              />
              <Input
                label="Closing"
                type="file"
                controller={{ control, name: "photo.closing" }}
                required
              />
            </NestedItem>
            <NestedItem title="Place">
              <Input
                withLabel
                placeholder="Text"
                controller={{ control, name: "place.text" }}
                required
              />
              <Input
                withLabel
                placeholder="Url"
                controller={{ control, name: "place.url" }}
                required
              />
            </NestedItem>
            <BrideGroom type="bride" title="Bride" />
            <BrideGroom type="groom" title="Groom" />
          </div>
          <div className="h-6" />
          <Button disabled={!formState.isValid} onClick={() => {}}>
            Update
          </Button>
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
      <Input withLabel placeholder="Name" name={`${type}.name`} required />
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
                  controller={{
                    name: `${type}.titles.${index}`,
                    control,
                  }}
                  required
                />
              </div>
            </div>
          );
        })}
      </NestedItem>
      <Input
        withLabel
        placeholder="Photo"
        controller={{
          control,
          name: `${type}.photo`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Father"
        controller={{
          control,
          name: `${type}.father`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Mother"
        controller={{
          control,
          name: `${type}.mother`,
        }}
        required
      />
      <Input
        withLabel
        placeholder="Address"
        controller={{
          control,
          name: `${type}.address`,
        }}
        required
      />
    </NestedItem>
  );
};
