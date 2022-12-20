import { displayDate } from "../../services/general";
import { IPilot } from "../../types";

const PilotInfo = ({ details }: { details: IPilot }) => {
  const { pilotId, firstName, lastName, phoneNumber, createdDt, email } =
    details;

  return (
    <div>
      <div>
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{pilotId}</p>
      </div>
      <div>
        <h2>Contact information</h2>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
      <div>
        detected {displayDate(createdDt)} minute
        {Number(displayDate(createdDt)) > 1 ? "s" : ""} ago
      </div>
    </div>
  );
};

export default PilotInfo;
