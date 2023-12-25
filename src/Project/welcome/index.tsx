import Shortcut from "@components/Icon";
import Icon from "@assets/Icons/Welcome";

// Welcome app for new users

const PlayIcon = () => {
  const welcomeProcess = {
    id: crypto.randomUUID(),
    name: "Welcome",
    appName: "Welcome",
    width: "658px",
    height: "490px",
  };

  return (
    <Shortcut id="Welcome" title="welcome" app={welcomeProcess}>
      <Icon width={48} height={48} />
    </Shortcut>
  );
};

export default PlayIcon;
