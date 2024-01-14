import Style from './ToggleSwitch.module.scss';

export interface ToggleSwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch = ({ isToggled, onToggle }: ToggleSwitchProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={Style['toggle-switch']} htmlFor="switchInput">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        id="switchInput"
      />
      <span className={Style.switch} />
    </label>
  );
};

export default ToggleSwitch;
