import React, { FC } from 'react';
import PathLine from '../PathLine/PathLine';
import './svg.scss';

type Dot = Array<number>;
type Data = Array<Dot>;
const data = [
  [10, 200, 2],
  [20, 20, 4],
  [25, 60, 55],
  [30, 400, 5],
  [33, 300, 23],
  [45, 780, 123],
  [70, 203, 213],
  [79, 890, 123],
  [194, 800, 123],
];

const x: Dot = [];
const y1: Dot = [];
const y2: Dot = [];

data.forEach((el) => {
  x.push(el[0]);
  y1.push(el[1]);
  y2.push(el[2]);
});

const color = ['#FF5959', '#6685CC'];

console.log(x, y1, y2);

export const SVG: FC = () => {
  const width = 100;
  const height = 100;
  const chartsHeight = height - 20;
  const chartsWidth = width - 0;
  const strokeWidth = 2;

  const onePercentInPixel = ((height - strokeWidth) / 100) * 100;
  const widthPixel = width * 2;
  const heightPixel = height * 2;

  const lineCount = 5;

  const dotMap = '';
  const maxInArray = (array: Dot) => {
    return Math.max(...array);
  };
  const minInArray = (array: Dot) => {
    return Math.min(...array);
  };
  const maxPercent = maxInArray(data.map((el) => el[1]));
  const minPercent = minInArray(data.map((el) => el[1]));

  const maxXCoords = maxInArray(x);

  const renderDotX = (xCoords: Dot): number[] => {
    const minX = minInArray(xCoords);
    console.log(minX / maxXCoords);

    return xCoords.map(
      (el) =>
        Math.abs((el - minX) / maxXCoords) * (chartsWidth - strokeWidth / 2),
    );
  };

  const defineLinePositions = (xCoords: Dot, arrayYCoords: Data) => {
    const maxY = maxInArray(arrayYCoords.flat(2));

    const lines = arrayYCoords.map((yCoords) => {
      return yCoords
        .map((el, ind) => [
          xCoords[ind],
          Math.abs(el / maxY - 1) * chartsHeight + strokeWidth / 2,
        ])
        .join();
    });

    return lines;
  };
  const xPoints = renderDotX(x);
  const lineMarking = defineLinePositions(xPoints, [y1, y2]);

  console.log(renderDotX(x));
  // console.log(dotMap);
  // console.log(maxPercent);
  // console.log(minPercent);

  return (
    <svg
      version="1.1"
      fill="black"
      className="svg"
      viewBox={`0 0 ${width} ${height}`}
      width={`${widthPixel}px`}
      height={`${heightPixel}px`}
    >
      <defs>
        <line
          id="line_vertical"
          className="svg__line"
          x1="0"
          vectorEffect="non-scaling-stroke"
          y1="0"
          x2="100%"
          y2="0"
          strokeWidth="1px"
        />
        <line
          id="line_horizontal"
          className="svg__line"
          x1="0"
          vectorEffect="non-scaling-stroke"
          y1="0"
          x2="0"
          y2="93%"
          strokeWidth="1px"
        />
      </defs>

      <line
        className="svg__insert-border"
        x1="0"
        vectorEffect="non-scaling-stroke"
        y1="93%"
        x2="100%"
        y2="93%"
        strokeWidth="1px"
      />
      {xPoints.map((el, ind) => (
        <>
          <use href="#line_horizontal" x={el} />
          <text
            vectorEffect="non-scaling-stroke"
            className="svg__text"
            x={el}
            textAnchor="middle"
            y="98%"
          >
            {x[ind]}
          </text>
        </>
      ))}
      {lineMarking.map((line, ind) => (
        <PathLine dots={line} color={color[ind]} />
      ))}
    </svg>
  );
};

export default SVG;
