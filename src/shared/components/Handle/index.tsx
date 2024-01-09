import { memo } from 'react'
import { usewindowStore } from '@stores/windowStore'

import HandleBtn from './HandleBtn'

import Style from './Handle.module.scss'

// million-ignore
export const Handle = memo(({ name, id }: { name: string; id: string }) => {
  const killProcess = usewindowStore(state => state.killProcess)
  const minimizeProcess = usewindowStore(state => state.switchMinimized)
  const maximizeProcess = usewindowStore(state => state.switchMaximized)

  return (
    <div className={`${Style.handle} windows__handle`}>
      <div className={`${Style.handle__control}`}>
        <HandleBtn
          color="red"
          onClick={() => {
            killProcess(id)
          }}
        />
        <HandleBtn color="yellow" onClick={() => maximizeProcess(id)} />
        <HandleBtn color="green" onClick={() => minimizeProcess(id)} />
      </div>
      <div className={Style.handle__title}>
        <p>{name}</p>
      </div>
    </div>
  )
})
