import React, { useEffect } from "react";

// Interface defining the expected props for CountdownDisplay
interface CountdownDisplayProps {
  timeLeft: number; // Remaining time in seconds
  isActive: boolean; // State indicating if the countdown is active
  setTimeLeft: (value: number | ((prev: number) => number)) => void; // Function to update timeLeft
  setIsActive: (value: boolean) => void; // Function to update isActive state
  timerRef: React.MutableRefObject<ReturnType<typeof setInterval> | null>; // Reference to the timer interval
}

// CountdownDisplay component handles the display and countdown logic
export default function CountdownDisplay({
  timeLeft,
  isActive,
  setTimeLeft,
  setIsActive,
  timerRef,
}: CountdownDisplayProps) {
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      // If the timer is active and there's time left, start the countdown
      timerRef.current = setInterval(() => {
        setTimeLeft((prev: number) => prev - 1);
      }, 1000);
    } else if (!isActive && timerRef.current) {
      // If the timer is paused, clear the interval
      clearInterval(timerRef.current);
    }

    if (timeLeft === 0 && timerRef.current) {
      // If timeLeft reaches 0, clear the interval and stop the countdown
      clearInterval(timerRef.current);
      setIsActive(false);
    }

    return () => {
      // Cleanup function to clear interval when component unmounts or dependencies change
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, timeLeft]); // Dependencies: isActive and timeLeft

  return <h2>{timeLeft} sekunder kvar</h2>; // Display the remaining time in seconds
}
