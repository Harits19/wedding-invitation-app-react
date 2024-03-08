import { useFormContext } from "react-hook-form";
import { FormField } from "../ui/form";
import { Input } from "../ui/input";
import { InvitationResponse } from "../../model/invitation-model";
import TitleView from "../title-view";

export default function BrideGroomView({ name }: { name: "bride" | "groom" }) {
  const { control } = useFormContext<InvitationResponse>();

  return (
    <TitleView title={name}>
      <div className="gap-y-4 flex flex-col">
        <FormField
          control={control}
          name={`${name}.name`}
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name={`${name}.father_name`}
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name={`${name}.mother_name`}
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name={`${name}.address`}
          render={({ field }) => <Input {...field} />}
        />
        <FormField
          control={control}
          name={`${name}.instagram`}
          render={({ field }) => <Input {...field} />}
        />
      </div>
    </TitleView>
  );
}
