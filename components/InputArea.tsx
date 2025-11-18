
import React from 'react';
import { SparkleIcon } from './icons';

interface InputAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ value, onChange, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="e.g., feeling lost, my relationship, work stress..."
        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow text-gray-200 placeholder-gray-500"
        rows={2}
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {isLoading ? (
          'Whispering...'
        ) : (
          <>
            <SparkleIcon className="w-5 h-5" />
            Generate
          </>
        )}
      </button>
    </div>
  );
};
