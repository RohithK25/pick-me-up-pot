export type Emotion = "happy" | "thankful" | "angry" | "anxious" | "lonely" | "sad";

export const quotes: Record<Emotion, string[]> = {
  happy: [
    "Happiness is not a destination, it's a way of life.",
    "Embrace the joy in the small moments; they make the big ones even brighter.",
    "You deserve to be happy—never forget that.",
    "Life is a beautiful journey, and today is a wonderful chapter.",
    "Shine your light, the world is better when you're smiling.",
    "Celebrate every tiny victory; they all add up to something great.",
    "Happiness is contagious—spread it everywhere you go.",
    "Let go of the worry, and enjoy the beauty of today.",
    "You're capable of incredible things. Keep going!",
    "Take a deep breath and let gratitude fill your heart."
  ],
  thankful: [
    "Gratitude turns what we have into enough.",
    "Today is a perfect day to be grateful for all you've got.",
    "The more thankful you are, the more you will receive to be thankful for.",
    "A grateful heart is a magnet for miracles.",
    "No matter what happens, there is always something to be grateful for.",
    "Be thankful for the small things—they're the big things in disguise.",
    "Gratitude makes every day a little brighter.",
    "You have so much to be thankful for—don't forget that.",
    "Take a moment today to appreciate all the good in your life.",
    "Count your blessings, not your problems."
  ],
  angry: [
    "Breathe deeply, and let go of the tension you're holding.",
    "Anger is a feeling, not a permanent state. Let it pass.",
    "Peace begins the moment you choose not to allow anger to control you.",
    "Take a step back and find your calm.",
    "Anger is a wind, and you are the mountain. Let it blow over.",
    "Release the anger; it's only weighing you down.",
    "Inhale peace, exhale frustration.",
    "Anger doesn't solve problems; it only creates more. Let it go.",
    "Find your balance, and let the storm of anger pass.",
    "You're stronger than any moment of anger."
  ],
  anxious: [
    "Take a deep breath. Everything is going to be okay.",
    "Anxiety may feel overwhelming, but it's only a feeling, not a fact.",
    "You are stronger than your anxious thoughts.",
    "Breathe in peace, breathe out stress.",
    "Every moment of anxiety will eventually pass—hold on to calm.",
    "You've faced challenges before, and you will overcome this one too.",
    "It's okay to not have everything figured out. You're doing just fine.",
    "Anxiety is just a feeling; it doesn't control you.",
    "Take one step at a time, and you'll find your calm.",
    "The more you breathe, the more you relax."
  ],
  lonely: [
    "You are loved, even when you don't feel it.",
    "It's okay to feel lonely sometimes; it doesn't mean you're alone forever.",
    "Reach out to someone today—you never know how much they need you too.",
    "Loneliness is a feeling, not a permanent state.",
    "Remember, even when you feel alone, the world is full of connections waiting for you.",
    "Sometimes, the best thing you can do for yourself is to lean on someone else.",
    "You are worthy of love and connection, just as you are.",
    "Every step you take brings you closer to new connections.",
    "Even in your loneliest moments, you are not truly alone.",
    "You have a heart that deserves to be heard and loved."
  ],
  sad: [
    "It's okay not to be okay sometimes.",
    "Your feelings are valid, and this too shall pass.",
    "Every storm runs out of rain eventually.",
    "Take it one moment at a time—you're stronger than you know.",
    "Even the darkest night will end and the sun will rise.",
    "You are not alone in this journey.",
    "Your strength is greater than any sadness.",
    "This feeling is temporary, but your resilience is permanent.",
    "It's okay to take time to heal.",
    "Tomorrow brings new hope and new beginnings."
  ],
};

export const getRandomQuote = (emotion: Emotion): string => {
  const emotionQuotes = quotes[emotion];
  const randomIndex = Math.floor(Math.random() * emotionQuotes.length);
  return emotionQuotes[randomIndex];
};