import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InfoIcon from "@mui/icons-material/Info";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "./AsideNav.css";

const AsideNav = ({
  setShowMore,
}: {
  setShowMore: (prev: any) => void;
}) => {
  return (
    <div className="absolute w-10 bg-gray-800 text-white top-0 left-0 height100 flex flex-col">
      <TravelExploreIcon fontSize="large" />
      <InfoIcon fontSize="large" />
      <CloseFullscreenIcon
        onClick={() => setShowMore((prev: boolean) => !prev)}
        fontSize="large"
        className="fixed bottom-5 block"
      />
    </div>
  );
};

export default AsideNav;
