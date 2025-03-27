import { z } from "zod";

const AttackPowerSchema = z.object({
    name: z.string(),
    amount: z.number(),
});

const armorItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().url(),
    description: z.string(),
    type: z.string(),
    attackPower: z.array(AttackPowerSchema),
    passive: z.string(),
});

export const armorResponseSchema = z.object({
    success: z.literal(true),
    count: z.number(),
    data: z.array(armorItemSchema),
});

export type ArmorItemsResponse = z.output<typeof armorResponseSchema>;