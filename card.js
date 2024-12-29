
import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 bg-white ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h4 className={`font-bold text-lg ${className}`}>{children}</h4>
);
