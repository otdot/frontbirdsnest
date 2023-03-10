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
      // animation for new <PilotInfo/>
      // onSuccess: (data) => {
      //   if (data.length > droneList.length) {
      //     document.querySelector("#card-new")?.classList.add("card-new");
      //     setTimeout(() => {
      //       const cardnew = document.querySelectorAll(".card-new");
      //       cardnew.forEach((card) => card.classList.remove("card-new"));
      //     }, 2000);
      //   }
      // },
    }
  );

  if (status === "loading" || !showMore) {
    return <p className="absolute left-12">loading...</p>;
  }

  if (status === "error") {
    return <p className="absolute left-12">Error</p>;
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
    <div className="pilotcontainer">
      {showMore.showMore ? droneList : droneList.slice(0, 3)}
    </div>
  );
};

export default DroneInfo;
