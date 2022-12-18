import axios from "../config/axios";
import { PilotSchema, IPilot } from "../types";

export const getViolatingDrones = async (): Promise<IPilot[]> => {
  const drones = await axios.get("/drones/cache");

  console.log("drones.data: ", drones.data);
  return drones.data.map((drone: IPilot) => {
    console.log("pilotschema safeparse: ", PilotSchema.safeParse(drone));

    if (PilotSchema.safeParse(drone).success) {
      return drone;
    }
  });
};
