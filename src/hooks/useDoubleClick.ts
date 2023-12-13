import { type RefObject, useEffect } from "react";

type useDoubleClickProps = {
  ref: RefObject<HTMLElement>;
  latency?: number;
  onSingleClick?: (e: Event) => void;
  onDoubleClick?: (e: Event) => void;
};

const useDoubleClick = ({
  ref,
  latency = 300,
  onSingleClick = () => null,
  onDoubleClick = () => null,
}: useDoubleClickProps) => {
  useEffect(() => {
    const clickRef = ref.current;
    let clickCount = 0;
    const handleClick = (e: MouseEvent) => {
      clickCount += 1;

      setTimeout(() => {
        if (clickCount === 1) onSingleClick(e);
        else if (clickCount === 2) onDoubleClick(e);

        clickCount = 0;
      }, latency);
    };

    if (!clickRef) return;

    // Add event listener for click events
    clickRef.addEventListener("click", handleClick);

    // Remove event listener
    return () => {
      clickRef.removeEventListener("click", handleClick);
    };
  }, [ref, latency, onSingleClick, onDoubleClick]);
};

export default useDoubleClick;
