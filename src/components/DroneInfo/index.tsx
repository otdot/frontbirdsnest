import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getViolatingDrones } from "../../services/droneServices";
import { IPilot } from "../../types";
import PilotInfo from "./PilotInfo";

const DroneInfo = () => {
  const { data: drones, status } = useQuery<IPilot[]>(
    ["drones"],
    getViolatingDrones,
    { refetchInterval: 15000 }
  );

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (drones.length < 1) {
    return <p>No violations in last 10minutes </p>;
  }
  console.log({ drones });
  return (
    <div>
      {drones.map(
        (drone: IPilot) =>
          drone && <PilotInfo key={drone.pilotId} details={drone} />
      )}
    </div>
  );
};

export default DroneInfo;
