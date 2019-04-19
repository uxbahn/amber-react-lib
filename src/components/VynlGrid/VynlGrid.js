import React from 'react';
import './VynlGrid.css';

export const VynlGrid = ({ children }) => <div className='vynl-grid'>{children}</div>;
export const VynlCell = ({ children, span = 1 }) => (
  <div className={`vynl-grid-cell span-${span}`}>{children}</div>
);