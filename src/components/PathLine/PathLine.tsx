import React, { FC } from 'react';

import PathProps from './types';

const PathLine: FC<PathProps> = ({ dots, color, width = 2 }) => {
  return (
    <path
      d={`M ${dots}`}
      stroke={color}
      x="50%"
      y="50%"
      fill="none"
      strokeWidth={width}
      vectorEffect="non-scaling-stroke"
      strokeLinejoin="round"
    />
  );
};

export default PathLine;
