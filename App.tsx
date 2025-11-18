
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
      setError('Sorry, something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 text-gray-200">
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <header className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SparkleIcon className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Zen Whisper
            </h1>
          </div>
          <p className="text-gray-400">
            Share a thought, a feeling, or a question. Receive a quiet reminder.
          </p>
        </header>
        
        <div className="w-full p-6 bg-gray-800/50 rounded-2xl shadow-2xl shadow-black/20 border border-gray-700 backdrop-blur-sm">
          <InputArea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />

          <div className="mt-6 min-h-[100px] flex items-center justify-center">
            {isLoading && <Loader />}
            {error && <p className="text-red-400">{error}</p>}
            {generatedText && <ResultDisplay key={generatedText} text={generatedText} />}
          </div>
        </div>

        <footer className="mt-12 text-gray-600 text-sm">
          <p>Powered by Gemini. Crafted for moments of reflection.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
