import { displayDate } from "../../services/general";
import { IPilot } from "../../types";
import "./DroneInfo.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const PilotInfo = ({ details }: { details: IPilot }) => {
  const { pilotId, firstName, lastName, phoneNumber, createdDt, email } =
    details;

  return (
    <div className="card-new relative z-0 container bg-gray-400 hover:bg-gray-500 w-full m-5 pl-5 py-2 rounded-md border-solid border-2 border-gray-500 transform duration-300 hover:border-gray-700">
      <div className="relative top-0">
        <h1 className="text-2xl font-bold leading-none">
          {firstName} {lastName}
        </h1>
        <small className="leading-none">has flown too close to birdnest</small>
        <small className="block mb-1 text-xs leading-none">
          Pilot ID: {pilotId}
        </small>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Contact information:</h2>
        <p className="text-sm leading-none">
          <PhoneIcon /> {phoneNumber}
        </p>
        <p className="text-sm leading-none">
          <EmailIcon /> {email}
        </p>
      </div>
      <div className="absolute right-2 bottom-3">
        <p className="text-xs text-amber-200 montserrat">
          Detected {displayDate(createdDt)} minute
          {Number(displayDate(createdDt)) > 1 ? "s" : ""} ago
        </p>
      </div>
    </div>
  );
};

export default PilotInfo;
