import { z } from "zod";
import { messages } from "@utils";

export const FormSchema: z.ZodObject<{
  name: z.ZodString;
  email: z.ZodString;
  password: z.ZodString;
}> = z.object({
  name: z
    .string({ required_error: messages.name.required })
    .min(3, messages.name.min),
  email: z
    .string({ required_error: messages.email.required })
    .email({ message: messages.email.valid }),
  password: z
    .string({ required_error: messages.password.required })
    .min(6, { message: messages.password.min }),
});

export type FormValues = z.infer<typeof FormSchema>;
