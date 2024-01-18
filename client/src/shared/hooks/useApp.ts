import { appMap } from '@utils/global';

// TODO: A better way to add apps
// TODO: Move types to a shared folder

const useAppContent = ({ name }: { name: string }): (() => JSX.Element) => {
  const lowerCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return appMap[lowerCaseName] || null;
};

export default useAppContent;
