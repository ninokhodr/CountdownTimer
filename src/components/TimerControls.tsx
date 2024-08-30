// Interface defining the expected props for TimerControls
interface TimerControlsProps {
  onStart: () => void; // Function to start the timer
  onPause: () => void; // Function to pause the timer
  onReset: () => void; // Function to reset the timer
}

// TimerControls component provides buttons to control the timer
export default function TimerControls({ onStart, onPause, onReset }: TimerControlsProps) {
  return (
    <div>
      <button onClick={onStart}>Starta</button>
      <button onClick={onPause}>Pausa</button>
      <button onClick={onReset}>Återställ</button>
    </div>
  );
}
