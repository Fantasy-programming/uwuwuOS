import { usewindowStore } from '@stores/windowStore';
import Close from './_svg/close';
import Minimize from './_svg/minimize';
import Stretch from './_svg/stretch';

import HandleBtn from './HandleBtn';

import Style from './Handle.module.scss';
import { useWindowContext } from '../Window/Window.hook';

export const Handle = () => {
  const context = useWindowContext();

  const killProcess = usewindowStore(state => state.killProcess);
  const minimizeProcess = usewindowStore(state => state.switchMinimized);
  const maximizeProcess = usewindowStore(state => state.switchMaximized);

  return (
    <div className={`${Style.handle} windows__handle`}>
      <div
        className={`${Style.handle__control} ${
          !context.focusState ? Style.unfocused : ''
        } `}
      >
        <HandleBtn
          variant="close"
          onClick={() => {
            killProcess(context.id);
          }}
        >
          <Close />
        </HandleBtn>
        <HandleBtn
          variant="maximize"
          onClick={() => maximizeProcess(context.id)}
        >
          <Stretch />
        </HandleBtn>
        <HandleBtn
          variant="minimize"
          onClick={() => minimizeProcess(context.id)}
        >
          <Minimize />
        </HandleBtn>
      </div>
      <div className={Style.handle__title}>
        <p>{context.appName}</p>
      </div>
    </div>
  );
};
