import { useEffect } from 'react';

/** Register global keydown event accessible on window focus
 *  @param handleSwitch - Function to handle keydown event
 */

function useKeyboardInput(
  handleSwitch: (key: string) => void,
  focused: boolean,
) {
  useEffect(() => {
    if (!focused) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      handleSwitch(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSwitch, focused]);
}

export default useKeyboardInput;
