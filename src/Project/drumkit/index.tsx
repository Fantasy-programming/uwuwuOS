import Shortcut from '@components/Icon'
import Icon from '@assets/Icons/Drumkit'

const drumKitProcess = {
  id: crypto.randomUUID(),
  name: 'Drumkit',
  appName: 'Drumkit',
  width: '658px',
  height: '490px',
}

const DrumkitIcon = () => {
  return (
    <Shortcut id="Drumkit" title="Drumkit" app={drumKitProcess}>
      <Icon width={48} height={48} />
    </Shortcut>
  )
}

export default DrumkitIcon
