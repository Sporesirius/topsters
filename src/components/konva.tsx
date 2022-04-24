import React from "react";
import { Stage, Layer, Rect, } from "react-konva";

export default function KonvaTest() {
  return (
      <Stage
        className=" bg-cyan-700"
        width={1000}
        height={1000}
      >
        <Layer
        >
          <Rect
            x={100}
            y={100}
            width={100}
            height={100}
            fill="red"
            draggable
          />
        </Layer>
      </Stage>
  );
}
