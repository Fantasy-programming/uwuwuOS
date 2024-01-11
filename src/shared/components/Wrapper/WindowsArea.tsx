import Window from '@components/Window/Window'
import { usewindowStore } from '@stores/windowStore'

const WindowsArea = () => {
  const windows = usewindowStore(state => state.windows)

  return (
    <>
      {windows.map(window => {
        return (
          <Window
            key={window.id}
            name={window.name}
            appName={window.appName}
            id={window.id}
            width={window.width}
            height={window.height}
            minimized={window.minimized}
            maximized={window.maximized}
            focused={window.focused}
          />
        )
      })}
    </>
  )
}

export default WindowsArea
