import { appList } from '@utils/global';

const useAppContent = ({ name }: { name: string }): (() => JSX.Element) => {
  const lowerCaseName = name.charAt(0).toUpperCase() + name.slice(1);
  return appList[lowerCaseName].entry || null;
};

export default useAppContent;
