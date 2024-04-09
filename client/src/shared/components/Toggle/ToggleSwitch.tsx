import Style from './ToggleSwitch.module.scss';

export interface ToggleSwitchProps {
  isToggled: boolean;
  onToggle: () => void;
}

const ToggleSwitch = ({ isToggled, onToggle }: ToggleSwitchProps) => {
  return (
    <label className={Style['toggle-switch']}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={Style.switch} />
    </label>
  );
};

export default ToggleSwitch;
