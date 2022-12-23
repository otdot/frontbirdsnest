import { useState } from "react";
import AsideNav from "./components/AsideNav";
import DroneInfo from "./components/DroneInfo";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex">
      <div className="flex-initial w-6">
        <AsideNav showMore={showMore} setShowMore={setShowMore} />
      </div>
      <div className="flex-initial w-screen">
        <DroneInfo showMore={showMore} setShowMore={setShowMore} />
      </div>
    </div>
  );
}

export default App;
