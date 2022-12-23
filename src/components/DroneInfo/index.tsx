import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getViolatingDrones } from "../../services/droneServices";
import { IPilot } from "../../types";
import PilotInfo from "./PilotInfo";

const DroneInfo = ({
  showMore,
  setShowMore,
}: {
  showMore: boolean;
  setShowMore: (prev: any) => void;
}) => {
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
      <button
        className="absolute left-5 bg-blue-100 px-2 py-1 rounded-xl text-gray-800 hover:text-gray-900 hover:bg-blue-200 delay-100"
        onClick={() => setShowMore((prev: boolean) => !prev)}
      >
        {showMore ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default DroneInfo;
