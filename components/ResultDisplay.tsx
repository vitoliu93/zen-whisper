
import React from 'react';

interface ResultDisplayProps {
  text: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ text }) => {
  return (
    <div className="animate-fade-in-up">
      <p className="text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
        {text}
      </p>
    </div>
  );
};
