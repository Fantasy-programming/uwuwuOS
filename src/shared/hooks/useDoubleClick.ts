import { useRef } from 'react'

type OptionalCallback = (() => void) | undefined

const useDoubleClick = (
  onSingleClick?: OptionalCallback,
  onDoubleClick?: OptionalCallback,
  threshold = 300,
): (() => void) => {
  const clickCount = useRef(0)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const handleClick = () => {
    clickCount.current += 1

    if (clickCount.current === 1) {
      timer.current = setTimeout(() => {
        if (clickCount.current === 1 && onSingleClick) {
          onSingleClick()
        }
        clickCount.current = 0
      }, threshold)
    } else {
      clearTimeout(timer.current as NodeJS.Timeout)
      if (onDoubleClick) {
        onDoubleClick()
      }
      clickCount.current = 0
    }
  }

  return handleClick
}

export default useDoubleClick
