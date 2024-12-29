import { useState } from "react";
import type { Emotion } from "@/data/quotes";
import { cn } from "@/lib/utils";

interface EmotionJarProps {
  onEmotionSelect: (emotion: Emotion) => void;
}

export const EmotionJar = ({ onEmotionSelect }: EmotionJarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const emotions: { type: Emotion; label: string }[] = [
    { type: "happy", label: "Happy" },
    { type: "thankful", label: "Thankful" },
    { type: "angry", label: "Angry" },
    { type: "anxious", label: "Anxious" },
    { type: "lonely", label: "Lonely" },
    { type: "sad", label: "Sad" },
  ];

  const handleEmotionClick = (emotion: Emotion) => {
    onEmotionSelect(emotion);
    setIsOpen(false);
  };

  return (
    <div className="relative w-72 h-72 mx-auto">
      {/* Jar Container */}
      <div
        className={cn(
          "absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/30",
          "shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-float",
          "transition-transform duration-500",
          isOpen && "scale-110"
        )}
      >
        {/* Emotion Papers */}
        <div className="absolute inset-0 animate-swirl">
          {emotions.map((emotion, index) => (
            <div
              key={emotion.type}
              className={cn(
                "absolute w-8 h-8 rounded-full opacity-60 animate-float",
                `bg-emotion-${emotion.type}`
              )}
              style={{
                left: `${50 + 35 * Math.cos((index * Math.PI * 2) / 6)}%`,
                top: `${50 + 35 * Math.sin((index * Math.PI * 2) / 6)}%`,
              }}
            />
          ))}
        </div>

        {/* Central Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "bg-white/80 backdrop-blur-sm rounded-full p-4",
            "text-gray-800 font-medium shadow-lg",
            "transition-all duration-300 hover:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-white/50"
          )}
        >
          How are you feeling?
        </button>

        {/* Emotion Selection Buttons */}
        {isOpen && (
          <div className="absolute inset-0">
            {emotions.map((emotion, index) => (
              <button
                key={emotion.type}
                onClick={() => handleEmotionClick(emotion.type)}
                className={cn(
                  "absolute p-3 rounded-full text-sm font-medium",
                  "transition-all duration-300 animate-fade-in",
                  "hover:scale-110 focus:outline-none focus:ring-2",
                  `bg-emotion-${emotion.type}`
                )}
                style={{
                  left: `${50 + 45 * Math.cos((index * Math.PI * 2) / 6)}%`,
                  top: `${50 + 45 * Math.sin((index * Math.PI * 2) / 6)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {emotion.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};