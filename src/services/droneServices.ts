import axios from "../config/axios";
import { PilotSchema, IPilot } from "../types";

export const getViolatingDrones = async (): Promise<IPilot[]> => {
  const drones = await axios.get("/drones/cache");
  return drones.data.map((drone: IPilot) => {
    if (PilotSchema.safeParse(drone).success) {
      return drone;
    }
  });
};
