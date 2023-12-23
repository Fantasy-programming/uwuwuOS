import Shortcut from "@components/Icon";
import Icon from "@assets/Icons/Snake";

const snakeProcess = {
  id: crypto.randomUUID(),
  name: "Snake",
  appName: "Snake",
  width: "658px",
  height: "490px",
};

const SnakeIcon = () => {
  return (
    <Shortcut id="Snake" title="snake" app={snakeProcess}>
      <Icon width={48} height={48} />
    </Shortcut>
  );
};

export default SnakeIcon;
