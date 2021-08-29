import React, { FC } from 'react';
import './svg.scss';

export const SVG: FC = () => {
  return (
    <svg
      version="1.1"
      fill="black"
      className="svg"
      viewBox="0 0 100 100"
      width="200px"
      height="200px"
    >
      <text x="50%" y="50%" />
      <circle cx="2" cy="22" r="2" fill="black" />
      <circle cx="22" cy="2" r="2" fill="black" />
      <circle cx="50" cy="52" r="2" fill="black" />
      <line x1="2" y1="22" x2="22" y2="2" stroke="black" />
      <circle cx="70" cy="42" r="2" fill="black" />
    </svg>
  );
};

export default SVG;
