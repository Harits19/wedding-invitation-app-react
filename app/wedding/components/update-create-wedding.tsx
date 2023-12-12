"use client";

import { ReactNode } from "react";
import Div from "../../components/div";
import Input from "../../components/input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { WeddingModel } from "../../model/wedding-model";
import Button from "../../components/button";
import BrideGroom from "./bride-groom";
import NestedItem from "./nested-item";

export default function UpdateCreateWedding() {
  const methods = useForm<WeddingModel>({
    criteriaMode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      bride: {
        titles: [""],
      },
      groom: {
        titles: [""],
      },
    },
  });
  const { formState, control, watch } = methods;
  console.log(watch());

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
          <Button
            disabled={!formState.isValid}
            onClick={() => {
              console.log(watch(), "formState ", formState.isValid);
            }}
          >
            Update
          </Button>
        </div>
      </Div>
    </FormProvider>
  );
}
