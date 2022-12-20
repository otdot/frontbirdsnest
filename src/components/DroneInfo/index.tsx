import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getViolatingDrones } from "../../services/droneServices";
import { IPilot } from "../../types";
import PilotInfo from "./PilotInfo";

const DroneInfo = ({ showMore }: { showMore: boolean }) => {
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
  const droneList = drones
    .map(
      (drone: IPilot) =>
        drone && <PilotInfo key={drone.pilotId} details={drone} />
    )
    .reverse();

  return (
    <div className="relative mx-6">
      {showMore ? droneList : droneList.slice(0, 3)}
    </div>
  );
};

export default DroneInfo;
