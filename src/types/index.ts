import { z } from "zod";

const ChartProps = z.object({
  x: z.number(),
  y: z.number(),
  size: z.number(),
});

export const ShowDataSchema = z.object({
  showMore: z.boolean(),
  setShowMore: z.function().args(z.boolean()).returns(z.void()),
});

export const PilotSchema = z.object({
  pilotId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  createdDt: z.string(),
  email: z.string(),
  posX: z.number(),
  posY: z.number(),
});

export type IChartProps = z.infer<typeof ChartProps>;
export type IPilot = z.infer<typeof PilotSchema>;
export type IShowData = z.infer<typeof ShowDataSchema>;
