"use client";

import { ReactNode } from "react";
import Div from "../../components/div";
import Input from "../../components/input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { WeddingTable } from "../../model/database/wedding";
import Button from "../../components/button";
import BrideGroom from "./bride-groom";
import NestedItem from "./nested-item";

export default function UpdateCreateWedding({
  onSubmit,
  loading = false,
  initialValue,
}: {
  onSubmit?: (value: WeddingTable) => void;
  loading?: boolean;
  initialValue?: Partial<WeddingTable>;
}) {
  const methods = useForm<WeddingTable>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    defaultValues: initialValue ?? {
      date: new Date(),
      music: "music",
      name: "Wedding Name",
      password: "password",
      photo: {
        carousel: ["carousel"],
        closing: "closing",
        cover: "cover",
        gallery: ["gallery"],
        opening: "opening",
      },
      place: {
        text: "place",
        url: "place url",
      },
      bride: {
        titles: ["title"],
        address: "address",
        father: "father",
        mother: "mother",
        name: "name",
        photo: "photo",
      },
      groom: {
        titles: ["title"],
        address: "address",
        father: "father",
        mother: "mother",
        name: "name",
        photo: "photo",
      },
    },
  });
  const { formState, control, watch, } = methods;

  const isUpdateFlow = Boolean(initialValue);

  return (
    <FormProvider {...methods}>
      <Div className=" w-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="p-4 bg-white rounded-2xl w-1/2 flex flex-col m-6">
          <h1>{isUpdateFlow ? "Update" : "Create"} Page</h1>
          <div className="h-6" />
          <div className="gap-y-2 flex flex-col">
            <Input
              controller={{ control, name: "name" }}
              withLabel
              required
              placeholder="Wedding Name"
            />
            {!isUpdateFlow && (
              <Input
                controller={{ control, name: "password" }}
                withLabel
                required
                placeholder="Password"
                type="password"
              />
            )}
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
          <Button
            loading={loading}
            disabled={!formState.isValid}
            onClick={() => {
              onSubmit?.(watch());
            }}
          >
            Save
          </Button>
        </div>
      </Div>
    </FormProvider>
  );
}
