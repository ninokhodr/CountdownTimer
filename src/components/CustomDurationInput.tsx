// Interface to define expected props for CustomDurationInput
interface CustomDurationInputProps {
  duration: string; // Input value representing the custom duration
  onDurationChange: (value: string) => void; // Functio to handle changes in the input field
}

// CustomDurationInput component for setting a custom countdown duration
export default function CustomDurationInput({ duration, onDurationChange }: CustomDurationInputProps) {
  return (
    <div className="input-container">
      <label className="input-label">Ställ in din egen tid:</label>
      <input
        type="number"
        value={duration}
        onChange={(e) => onDurationChange(e.target.value.replace(/^0+/, "") || "")} //Replace the 0 for better UI
        min="1"
        placeholder="Använd siffror"
        className="input-field"
      />
    </div>
  );
}
