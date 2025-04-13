import { z } from "zod";

const DamageNegationSchema = z.object({
  name: z.string(),
  amount: z.number(),
});

const ResistanceSchema = z.object({
  name: z.string(),
  amount: z.number(),
});

const armorSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().url().nullish(),
  description: z.string(),
  category: z.string(),
  dmgNegation: z.array(DamageNegationSchema),
  resistance: z.array(ResistanceSchema),
  weight: z.number(),
});

export const armorResponseSchema = z.object({
  success: z.boolean(),
  count: z.number(),
  total: z.number(),
  data: z.array(armorSchema),
});

export type ArmorItemsResponse = z.output<typeof armorResponseSchema>;
export type ArmorItem = z.output<typeof armorSchema>;
