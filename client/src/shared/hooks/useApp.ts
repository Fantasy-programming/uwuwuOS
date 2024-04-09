import { appList } from '@utils/global';

// TODO: A better way to add apps
// TODO: A Shared context for apps to interact wth the system

const useAppContent = ({ name }: { name: string }): (() => JSX.Element) => {
  const lowerCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return appList[lowerCaseName].entry || null;
};

export default useAppContent;
