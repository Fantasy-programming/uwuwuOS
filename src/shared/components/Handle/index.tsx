import { memo } from 'react';
import { usewindowStore } from '@stores/windowStore';
import Close from './_svg/close';
import Minimize from './_svg/minimize';
import Stretch from './_svg/stretch';

import HandleBtn from './HandleBtn';

import Style from './Handle.module.scss';

// million-ignore
export const Handle = memo(
  ({ name, id, focused }: { name: string; id: string; focused: boolean }) => {
    const killProcess = usewindowStore(state => state.killProcess);
    const minimizeProcess = usewindowStore(state => state.switchMinimized);
    const maximizeProcess = usewindowStore(state => state.switchMaximized);

    return (
      <div className={`${Style.handle} windows__handle`}>
        <div
          className={`${Style.handle__control} ${
            !focused ? Style.unfocused : ''
          } `}
        >
          <HandleBtn
            type={'close'}
            onClick={() => {
              killProcess(id);
            }}
          >
            <Close />
          </HandleBtn>
          <HandleBtn type={'maximize'} onClick={() => maximizeProcess(id)}>
            <Stretch />
          </HandleBtn>
          <HandleBtn type={'minimize'} onClick={() => minimizeProcess(id)}>
            <Minimize />
          </HandleBtn>
        </div>
        <div className={Style.handle__title}>
          <p>{name}</p>
        </div>
      </div>
    );
  },
);
