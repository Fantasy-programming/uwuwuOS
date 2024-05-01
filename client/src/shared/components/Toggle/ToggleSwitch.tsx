import Style from './ToggleSwitch.module.scss';

export interface ToggleSwitchProps {
  isToggled: boolean;
  name: string;
  onToggle: () => void;
}

const ToggleSwitch = ({ isToggled, onToggle, name }: ToggleSwitchProps) => {
  return (
    <label className={Style['toggle-switch']} htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isToggled}
        onChange={onToggle}
      />
      <span className={Style.switch} />
      {null}
    </label>
  );
};

export default ToggleSwitch;
