import { useIconStore, IconState } from '@stores/iconStore'
import { iconMap } from '../utils/global'
import { useShallow } from 'zustand/react/shallow'

const useIcon = (position: string) => {
  const Icons = useIconStore(useShallow(state => Object.values(state.icons)))
  const icon: IconState | undefined = Icons.find(
    icon => icon.pos_id === position,
  )
  if (!icon) return () => null
  return iconMap[icon.appName] || (() => null)
}

export default useIcon
