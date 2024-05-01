import { memo, useState, createContext } from 'react';
import { Rnd, RndDragCallback, RndResizeCallback } from 'react-rnd';

import useApp from '@hooks/useApp';
import useWindowSize from '@/shared/hooks/useWindowSize';
import { Handle } from '@components/Handle';

import { type WindowState } from '@stores/windowStore';
import { type WindowContextType } from './Window.type.ts';

import Style from './Window.module.scss';
import { usePlatformDetect } from '@/shared/hooks/usePlatformDetect.ts';

export const WindowContext = createContext<WindowContextType | undefined>(
  undefined,
);

const Window = memo(
  ({
    title,
    appName,
    id,
    pos_x = 100,
    pos_y = 100,
    width = '500px',
    height = '500px',
    minimized = false,
    maximized = false,
    resizable = true,
    focused = false,
    min_width,
    min_height,
    max_width,
    max_height,
  }: WindowState) => {
    const [window, setWindow] = useState({
      x: pos_x,
      y: pos_y,
      width: width,
      height: height,
    });

    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const platform = usePlatformDetect();
    // const focusOnWindow = usewindowStore(state => state.switchFocused);

    const maximizedStyle = {
      width: windowWidth + 6,
      height: windowHeight - 65,
      x: -3,
      y: -3,
    };

    // Window events

    const ondragstop: RndDragCallback = (_e, d) => {
      setWindow({ ...window, x: d.x, y: d.y });
    };

    const onFocus = () => {
      if (focused) return;
      // focusOnWindow(id);
    };

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
      });
    };

    // Context

    const contextValue = {
      id,
      focusState: focused,
      title,
      appName,
    };

    return (
      <WindowContext.Provider value={contextValue}>
        <Rnd
          onMouseDown={onFocus}
          className={`${Style.window} ${focused ? Style.active : ''}`}
          style={{
            zIndex: focused ? 100 : 0,
            display: minimized ? 'none' : '',
          }}
          minWidth={min_width ?? ''}
          minHeight={min_height ?? ''}
          maxWidth={max_width ?? ''}
          maxHeight={max_height ?? ''}
          enableResizing={!maximized || resizable}
          disableDragging={maximized}
          bounds={'.Frame'}
          size={{
            width:
              maximized || platform.isMobile()
                ? maximizedStyle.width
                : window.width,
            height:
              maximized || platform.isMobile()
                ? maximizedStyle.height
                : window.height,
          }}
          position={{
            x: maximized ? maximizedStyle.x : window.x,
            y: maximized ? maximizedStyle.y : window.y,
          }}
          dragHandleClassName={'windows__handle'}
          onDragStop={ondragstop}
          onResize={onResize}
        >
          <App appName={appName} />
        </Rnd>
      </WindowContext.Provider>
    );
  },
);

const App = memo(({ appName }: { appName: string }) => {
  const Content = useApp({ name: appName });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Handle />
      <Content />
    </div>
  );
});

export default Window;
