import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InfoIcon from "@mui/icons-material/Info";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "./AsideNav.css";
import { useContext } from "react";
import { IShowData } from "../../types";
import { ShowDataContext } from "../../App";
import { Link } from "react-router-dom";

const AsideNav = () => {
  const showMore = useContext<IShowData | null>(ShowDataContext);

  if (!showMore) {
    return <p>loading...</p>;
  }

  return (
    <div className="navcontainer">
      <div className="onerow h-7 z-10">
        <Link className="drones" to="/">
          <TravelExploreIcon className="hovericon" fontSize="large" />
        </Link>
        <p id="dronestext" className="helpertext ">
          Drone violations
        </p>
      </div>
      <div className="onerow z-10 absolute top-12">
        <Link className="about" to="/about">
          <InfoIcon className="hovericon" fontSize="large" />
        </Link>
        <p id="abouttext" className="helpertext">
          About
        </p>
      </div>
      <div className="fixed flex bottom-12 mb-3 z-10 ">
        <CloseFullscreenIcon
          onClick={() => showMore.setShowMore(!showMore.showMore)}
          fontSize="large"
          className="showmore"
        />
        <p id="showmoretext" className="helpertext">
          {showMore.showMore
            ? "Show less flight data"
            : "Show more flight data"}
        </p>
      </div>
    </div>
  );
};

export default AsideNav;
