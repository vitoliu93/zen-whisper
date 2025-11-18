
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
        placeholder="例如：有点迷茫、亲密关系、工作压力、睡不着……"
        className="w-full p-4 bg-gray-900/80 border border-gray-700 rounded-xl resize-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition-all text-gray-200 placeholder-gray-500/80"
        rows={3}
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
      >
        {isLoading ? (
          '正在低语...'
        ) : (
          <>
            <SparkleIcon className="w-5 h-5" />
            生成一句温柔提醒
          </>
        )}
      </button>
    </div>
  );
};
