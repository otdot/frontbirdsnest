import { z } from "zod";

export const PilotSchema = z.object({
  pilotId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  createdDt: z.string(),
  email: z.string(),
  ttl: z.number(),
});

export type IPilot = z.infer<typeof PilotSchema>;
