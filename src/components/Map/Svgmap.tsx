import React from "react";
import { IChartProps } from "../../types";

const Svgmap = ({ x, y, size }: IChartProps) => {
  const getRelationalNum = (x: number, y: number): number[] => {
    return [(x / 500000) * size, (y / 500000) * size];
  };

  const positions = getRelationalNum(x, y);
  return (
    <div className="flip">
      <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <circle cx={positions[0]} cy={positions[1]} r="4" />
        <g>
          <line x1="1" y1="1" x2="1" y2="200" stroke="black" strokeWidth="3" />
          <line x1="1" y1="1" x2="200" y2="1" stroke="black" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
};

export default Svgmap;
