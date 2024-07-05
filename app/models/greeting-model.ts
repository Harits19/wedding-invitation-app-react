import zod from "zod";

export const GreetingValidator = zod.object({
  name: zod.string(),
  greeting: zod.string(),
});

export interface GreetingModel extends zod.infer<typeof GreetingValidator> {}
