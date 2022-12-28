import Info from "./Info";
import "./Map.css";
import Svgmap from "./Svgmap";

const Map = ({ x, y }: { x: number; y: number }) => {
  return (
    <div className="relative p-4 bg-white">
      <Info />
      <Svgmap x={Math.round(x)} y={Math.round(y)} size={175} />
    </div>
  );
};

export default Map;
