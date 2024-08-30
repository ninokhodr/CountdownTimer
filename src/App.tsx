import { useState, useRef } from "react";
import CountdownDisplay from "./components/CountDownDisplay";
import TimerControls from "./components/TimerControls";
import CustomDurationInput from "./components/CustomDurationInput";

// Main App component manages the overall countdown timer state and logic
export default function App() {
  const [timeLeft, setTimeLeft] = useState<number>(60); // Initialize timeLeft with 60 seconds
  const [isActive, setIsActive] = useState<boolean>(false); // Initialize isActive as false
  const [customDuration, setCustomDuration] = useState<string>("60"); // Initialize customDuration with "60"
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // Create a ref for the timer interval

  // Function to start the countdown
  const startTimer = () => {
    setIsActive(true);
  };

  // Function to pause the countdown
  const pauseTimer = () => {
    setIsActive(false);
  };

  // Function to reset the countdown
  const resetTimer = () => {
    setTimeLeft(Number(customDuration) || 60); // Reset timeLeft to customDuration or default to 60
    setIsActive(false); // Pause the countdown
    setCustomDuration("60"); // Reset customDuration input field to "60"
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the active interval if it exists
    }
  };

  return (
    <div>
      <h1>Nedräkningstimer</h1>
      <CountdownDisplay
        timeLeft={timeLeft}
        isActive={isActive}
        setTimeLeft={setTimeLeft}
        setIsActive={setIsActive}
        timerRef={timerRef}
      />
      <TimerControls onStart={startTimer} onPause={pauseTimer} onReset={resetTimer} />
      <CustomDurationInput duration={customDuration} onDurationChange={setCustomDuration} />
      {timeLeft === 0 && <p>Tiden är slut bra jobbat!</p>}
    </div>
  );
}
