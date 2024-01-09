import { useIconStore, IconState } from '@stores/iconStore';
import { iconMap } from '../utils/global';

const useIcon = (position: string) => {
  const Icons = useIconStore(state => state.icons);
  const icon: IconState | undefined = Icons.find(
    icon => icon.pos_id === position,
  );
  if (!icon) return () => null;
  return iconMap[icon.appName] || (() => null);
};

export default useIcon;
