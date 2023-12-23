import Style from "../Drumkit.module.scss";
import useSound from "use-sound";

const Button = ({
  children,
  sound,
  bg,
}: {
  children: React.ReactNode;
  bg: any;
  // eslint-disable-next-line
  sound: any;
}) => {
  const [play] = useSound(sound);
  return (
    <button
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      type="button"
      className={Style.drum}
      onClick={() => play()}
    >
      {children}
    </button>
  );
};

export default Button;
