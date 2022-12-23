import React, { useContext } from "react";
import { ShowDataContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import { getViolatingDrones } from "../../services/droneServices";
import { IPilot, IShowData } from "../../types";
import PilotInfo from "./PilotInfo";

const DroneInfo = () => {
  const showMore = useContext<IShowData | null>(ShowDataContext);
  const { data: drones, status } = useQuery<IPilot[]>(
    ["drones"],
    getViolatingDrones,
    {
      refetchInterval: 15000,
      onSuccess: () => {
        setTimeout(() => {
          document.querySelector(".card-new")?.classList.remove("card-new");
        }, 2000);
      },
    }
  );

  if (status === "loading" || !showMore) {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (drones.length < 1) {
    return (
      <div className="absolute left-12">No violations in last 10minutes </div>
    );
  }
  const droneList = drones
    .map(
      (drone: IPilot) =>
        drone && <PilotInfo key={drone.pilotId} details={drone} />
    )
    .reverse();

  return (
    <div className="relative mx-6">
      {showMore.showMore ? droneList : droneList.slice(0, 3)}
      <button
        className="absolute left-5 bg-blue-100 px-2 py-1 rounded-xl text-gray-800 hover:text-gray-900 hover:bg-blue-200 delay-100"
        onClick={() => showMore.setShowMore(!showMore.showMore)}
      >
        {showMore.showMore ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default DroneInfo;
