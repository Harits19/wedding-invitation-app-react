"use client";

import { ReactNode } from "react";
import Div from "../../components/div";
import Input from "../../components/input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { WeddingModel } from "../../model/wedding-model";
import Button from "../../components/button";

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
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <Div className=" w-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="p-4 bg-white rounded-2xl w-1/2 flex flex-col m-6">
          <h1>Update Page</h1>
          <div className="h-6" />
          <div className="gap-y-2 flex flex-col">
            <Input<WeddingModel>
              name="name"
              withLabel
              required
              placeholder="Wedding Name"
            />
            <Input<WeddingModel>
              name="password"
              withLabel
              required
              placeholder="Password"
              type="password"
            />
            <Input<WeddingModel>
              withLabel
              name="date"
              placeholder="Date"
              type="date"
              required
            />
            <Input<WeddingModel>
              withLabel
              placeholder="Music"
              name="music"
              required
            />
            <NestedItem title="Photo">
              <Input<WeddingModel>
                label="Cover"
                type="file"
                name="photo.cover"
                required
              />
              <Input<WeddingModel>
                label="Carousel"
                type="file"
                multiple
                name="photo.carousel"
                required
              />
              <Input<WeddingModel>
                label="Opening"
                type="file"
                name="photo.opening"
                required
              />
              <Input<WeddingModel>
                label="Gallery"
                type="file"
                multiple
                name="photo.gallery"
                required
              />
              <Input<WeddingModel>
                label="Closing"
                type="file"
                name="photo.closing"
                required
              />
            </NestedItem>
            <NestedItem title="Place">
              <Input<WeddingModel>
                withLabel
                placeholder="Text"
                name="place.text"
                required
              />
              <Input<WeddingModel>
                withLabel
                placeholder="Url"
                name="place.url"
                required
              />
            </NestedItem>
            <BrideGroom type="bride" title="Bride" />
            <BrideGroom type="groom" title="Groom" />
          </div>
          <div className="h-6" />
          <Button
            disabled={!formState.isValid}
            onClick={() => {}}
          >
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
      <Input<WeddingModel>
        withLabel
        placeholder="Name"
        name={`${type}.name`}
        required
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
                <Input<WeddingModel>
                  value={title}
                  withLabel
                  placeholder={`Title ${index + 1}`}
                  name={`${type}.titles.${index}`}
                  required
                />
              </div>
            </div>
          );
        })}
      </NestedItem>
      <Input<WeddingModel>
        withLabel
        placeholder="Photo"
        name={`${type}.photo`}
        required
      />
      <Input<WeddingModel>
        withLabel
        placeholder="Father"
        name={`${type}.father`}
        required
      />
      <Input<WeddingModel>
        withLabel
        placeholder="Mother"
        name={`${type}.mother`}
        required
      />
      <Input<WeddingModel>
        withLabel
        placeholder="Address"
        name={`${type}.address`}
        required
      />
    </NestedItem>
  );
};
