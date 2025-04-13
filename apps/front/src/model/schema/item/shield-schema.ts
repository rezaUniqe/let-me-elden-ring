import { z } from "zod";

const DamageStatSchema = z.object({
  name: z.string(),
  amount: z.number().nullable(),
});

const AttributeRequirementSchema = z.object({
  name: z.string(),
  amount: z.number().nullable(),
});

const ScalingSchema = z.object({
  name: z.string(),
  scaling: z.string().optional(),
});
export const shieldSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().url().nullish(),
  description: z.string(),
  attack: z.array(DamageStatSchema),
  defence: z.array(DamageStatSchema),
  scalesWith: z.array(ScalingSchema),
  requiredAttributes: z.array(AttributeRequirementSchema),
  category: z.string().nullish(),
  weight: z.number(),
});

export const shieldResponseSchema = z.object({
  success: z.boolean(),
  count: z.number(),
  total: z.number(),
  data: z.array(shieldSchema),
});

export type ShieldItemsResponse = z.output<typeof shieldResponseSchema>;
export type ShieldItem = z.output<typeof shieldSchema>;
