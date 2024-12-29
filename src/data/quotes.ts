export type Emotion = "happy" | "thankful" | "angry" | "anxious" | "lonely" | "sad";

export const quotes: Record<Emotion, string[]> = {
  happy: [
    "Your joy lights up the world around you!",
    "Keep shining bright, your happiness is contagious!",
    "You deserve every moment of this happiness!",
  ],
  thankful: [
    "Gratitude turns what we have into enough.",
    "Your appreciation makes the world more beautiful.",
    "Being thankful opens doors to more blessings.",
  ],
  angry: [
    "This feeling will pass, just like clouds in the sky.",
    "Take a deep breath, you're stronger than you know.",
    "It's okay to feel angry, but don't let it consume you.",
  ],
  anxious: [
    "You've gotten through every difficult moment so far.",
    "This moment will pass, just breathe.",
    "You are safe, you are capable, you will get through this.",
  ],
  lonely: [
    "You are never truly alone, the universe holds you.",
    "This feeling is temporary, better days are coming.",
    "Your worth isn't determined by who's around you.",
  ],
  sad: [
    "It's okay not to be okay sometimes.",
    "Your feelings are valid, and this too shall pass.",
    "Every storm runs out of rain eventually.",
  ],
};

export const getRandomQuote = (emotion: Emotion): string => {
  const emotionQuotes = quotes[emotion];
  const randomIndex = Math.floor(Math.random() * emotionQuotes.length);
  return emotionQuotes[randomIndex];
};