import { WindowState } from '@/shared/stores/windowStore';

const Context = ({ current }: { current: WindowState | undefined }) => {
  if (!current) return <div>/home/fun/ - Desktop</div>;

  return <div>/home/fun/ - {current.title}</div>;
};

export default Context;
