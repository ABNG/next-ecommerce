import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export const signupSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
  })
  .refine(({ confirm_password, password }) => confirm_password === password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
