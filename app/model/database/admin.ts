import { InferType, object, string } from "yup";

export const adminSchema = object({
  name: string().required(),
  password: string().required(),
});

export interface AdminTable extends InferType<typeof adminSchema> {
  id: string;
}
