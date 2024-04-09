import { useIconStore, IconState } from '@stores/iconStore';
import { useShallow } from 'zustand/react/shallow';
import { appList } from '../utils/global';
import Shortcut from '../components/Icon';

const useIcon = (position: string) => {
  const Icons = useIconStore(useShallow(state => Object.values(state.icons)));
  const icon: IconState | undefined = Icons.find(
    icon => icon.pos_id === position,
  );

  if (!icon) return null;

  const app = appList[icon.appName];
  const Icon = app.icon;

  return (
    <Shortcut id={icon.appName} title={icon.appName} app={app}>
      <Icon width={48} height={48} />
    </Shortcut>
  );
};

export default useIcon;
