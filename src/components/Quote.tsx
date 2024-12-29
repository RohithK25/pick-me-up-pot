import { cn } from "@/lib/utils";

interface QuoteProps {
  text: string;
  className?: string;
}

export const Quote = ({ text, className }: QuoteProps) => {
  return (
    <div
      className={cn(
        "max-w-md mx-auto p-6 text-center",
        "bg-white/10 backdrop-blur-sm rounded-lg",
        "shadow-[0_0_15px_rgba(255,255,255,0.3)]",
        "animate-fade-in",
        className
      )}
    >
      <p className="text-xl font-medium text-white/90">{text}</p>
    </div>
  );
};