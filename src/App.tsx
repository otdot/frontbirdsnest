import { useState } from "react";
import AsideNav from "./components/AsideNav";
import DroneInfo from "./components/DroneInfo";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative">
      <AsideNav setShowMore={setShowMore} />
      <DroneInfo showMore={showMore} />
    </div>
  );
}

export default App;
