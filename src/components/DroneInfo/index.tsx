import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getViolatingDrones } from "../../services/droneServices";
import { IPilot } from "../../types";

const DroneInfo = () => {
  const { data: drones, status } = useQuery<IPilot[]>(
    ["drones"],
    getViolatingDrones,
    { staleTime: 60000 }
  );

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <div>
      {drones?.map((drone: IPilot) => (
        <p key={drone.pilotId}>{drone.pilotId}</p>
      ))}
    </div>
  );
};

export default DroneInfo;
