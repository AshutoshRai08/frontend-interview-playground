import "./toogleSlider.css";
interface Toggletype {
  checked: boolean;
  onToggle: () => void;
}

const ToggleSlider = ({ checked, onToggle }: Toggletype) => {
  return (
    <label className="toggle-container">
      <input
        type="checkbox"
        checked={checked} // Controlled by the parent todo object
        onChange={onToggle} // Fires the parent's handler
        className="toggle-input"
      />
      <span className="toggle-slider" />
    </label>
  );
};

export default ToggleSlider;
