import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InfoIcon from "@mui/icons-material/Info";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "./AsideNav.css";

const AsideNav = ({
  showMore,
  setShowMore,
}: {
  showMore: boolean;
  setShowMore: (prev: any) => void;
}) => {
  return (
    <div className="w-10 bg-gray-800 text-white height100 flex flex-col">
      <div className="onerow h-7 z-10">
        <TravelExploreIcon className="drones hovericon" fontSize="large" />
        <p id="dronestext" className="helpertext ">
          Drone violations
        </p>
      </div>
      <div className="onerow z-10 absolute top-12">
        <InfoIcon className="about hovericon" fontSize="large" />
        <p id="abouttext" className="helpertext">
          About
        </p>
      </div>
      <div className="fixed flex bottom-12 mb-3 z-10 ">
        <CloseFullscreenIcon
          onClick={() => setShowMore((prev: boolean) => !prev)}
          fontSize="large"
          className="showmore hover:border-solid hover:border-white hover:border-2 delay-100"
        />
        <p id="showmoretext" className="helpertext">
          {showMore ? "Show less flight data" : "Show more flight data"}
        </p>
      </div>
    </div>
  );
};

export default AsideNav;
