import { z } from "zod";

export const userBase = z.object({
  username: z.string().min(6, "Campo obrigatório").max(16),
  password: z
    .string()
    .min(6, "Mínimo '6' caracteres")
    .max(16, "Máximo '16' caracteres"),
});
export const user = userBase.extend({
  id: z.string().uuid(),
});

export type TUser = z.infer<typeof user>;
export type TUserBaseData = z.infer<typeof userBase>;
