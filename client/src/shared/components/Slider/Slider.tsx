import Style from './Slider.module.scss';

export interface SliderProps {
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const Slider = ({ max, onChange, value }: SliderProps) => {
  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };

  return (
    <input
      type="range"
      className={Style.slider}
      min="0"
      max={max}
      onChange={onChange}
      style={getBackgroundSize()}
      value={value}
    />
  );
};

export default Slider;
