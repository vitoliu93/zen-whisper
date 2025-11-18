
import React, { useState, useCallback } from 'react';
import { generateSpiritualCopy } from './services/geminiService';
import { InputArea } from './components/InputArea';
import { ResultDisplay } from './components/ResultDisplay';
import { Loader } from './components/Loader';
import { SparkleIcon } from './components/icons';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [generatedText, setGeneratedText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerate = useCallback(async () => {
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    setError('');
    setGeneratedText('');

    try {
      const result = await generateSpiritualCopy(userInput);
      setGeneratedText(result);
    } catch (err) {
      setError('抱歉，出了点小问题，请稍后再试。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center px-4 py-8 text-gray-100">
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-8">
        <header className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <SparkleIcon className="w-9 h-9 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
              禅意低语
            </h1>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            说说你此刻的情绪、困惑或问题，收下一句安静、温柔的小提醒。
          </p>
        </header>

        <section className="w-full p-5 sm:p-6 bg-slate-900/70 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] border border-cyan-500/10 backdrop-blur-md">
          <InputArea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />

          <div className="mt-6 min-h-[100px] flex items-center justify-center text-sm sm:text-base">
            {isLoading && <Loader />}
            {error && <p className="text-red-400">{error}</p>}
            {generatedText && <ResultDisplay key={generatedText} text={generatedText} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
