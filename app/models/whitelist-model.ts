import zod from "zod";

export const WhitelistValidator = zod.object({
  name: zod.string(),
});

export interface WhitelistModel extends zod.infer<typeof WhitelistValidator> {
  createdAt?: Date;
}
