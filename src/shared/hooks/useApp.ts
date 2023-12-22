import Welcome from "@project/welcome/app";

// TODO: A better way to add apps
// TODO: Move types to a shared folder

type App = {
  [key: string]: () => JSX.Element;
};

const apps: App = {
  Welcome: Welcome,
};

const useAppContent = ({ name }: { name: string }): (() => JSX.Element) => {
  const lowerCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return apps[lowerCaseName] || null;
};

export default useAppContent;
