import { memo } from 'react'
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd'
import { useState } from 'react'
import useApp from '@hooks/useApp'
import useWindowSize from '@/shared/hooks/useWindowSize'
import { usewindowStore } from '@stores/windowStore'

import { Handle } from '@components/Handle';

import Style from './Window.module.scss';

import { type WindowState } from '@stores/windowStore';

// onClose
// onMinimize
// onMaximize
// onMouseDown

const Window = memo(
  ({
    name,
    appName,
    id,
    pos_x = 100,
    pos_y = 100,
    width = '500px',
    height = '500px',
    minimized = false,
    maximized = false,
    focused = false,
  }: WindowState) => {
    const [window, setWindow] = useState({
      x: pos_x,
      y: pos_y,
      width: width,
      height: height,
    })

    const Content = useApp({ name: appName })
    const { width: windowWidth, height: windowHeight } = useWindowSize()
    const focusOnWindow = usewindowStore(state => state.switchFocused)

    const maximizedStyle = {
      width: windowWidth + 6,
      height: windowHeight - 65,
      x: -3,
      y: -3,
    }

    const ondragstop: RndDragCallback = (_e, d) => {
      setWindow({ ...window, x: d.x, y: d.y })
    }

    const onFocus = () => {
      if (focused) return
      focusOnWindow(id)
    }

    const onResize: RndResizeCallback = (
      _e,
      _direction,
      ref,
      _delta,
      position,
    ) => {
      setWindow({
        ...window,
        width: ref.style.width,
        height: ref.style.height,
        ...position,
      })
    }

    return (
      <Rnd
        onMouseDown={onFocus}
        className={Style.window}
        style={{ zIndex: focused ? 100 : 0, display: minimized ? 'none' : '' }}
        // maxHeight=""
        // minHeight=""
        // maxWidth=""
        // minWidth=""
        // lockAspectRatio={true}
        enableResizing={!maximized}
        disableDragging={maximized}
        bounds={'.Frame'}
        size={{
          width: maximized ? maximizedStyle.width : window.width,
          height: maximized ? maximizedStyle.height : window.height,
        }}
        position={{
          x: maximized ? maximizedStyle.x : window.x,
          y: maximized ? maximizedStyle.y : window.y,
        }}
        dragHandleClassName={'windows__handle'}
        onDragStop={ondragstop}
        onResize={onResize}
      >
        <Handle name={name} id={id} />
        <Content />
      </Rnd>
    )
  },
)

export default Window;
