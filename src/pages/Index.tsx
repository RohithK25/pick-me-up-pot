import { useState } from "react";
import { EmotionJar } from "@/components/EmotionJar";
import { Quote } from "@/components/Quote";
import { getRandomQuote } from "@/data/quotes";
import type { Emotion } from "@/data/quotes";

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);

  const handleEmotionSelect = (emotion: Emotion) => {
    const quote = getRandomQuote(emotion);
    setCurrentQuote(quote);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-8 text-center">
        Emotional Support Jar
      </h1>
      
      <EmotionJar onEmotionSelect={handleEmotionSelect} />
      
      {currentQuote && (
        <div className="mt-12">
          <Quote text={currentQuote} />
        </div>
      )}
    </div>
  );
};

export default Index;