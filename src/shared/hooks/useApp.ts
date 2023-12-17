import Welcome from "@project/welcome/app";

type App = {
  [key: string]: React.ReactNode;
};

const apps: App = {
  Welcome: Welcome,
};

const useAppContent = ({ name }: { name: string }): React.ReactNode => {
  const lowerCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return apps[lowerCaseName] || null; // Return null if the component is not found
};

export default useAppContent;
