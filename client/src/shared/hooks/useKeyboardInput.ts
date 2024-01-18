import { useEffect } from 'react';

// TODO: Should only activate on focus (useEffect Array)

/** Register global keydown event accessible on window focus
 *  @param handleSwitch - Function to handle keydown event
 */

function useKeyboardInput(handleSwitch: (key: string) => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handleSwitch(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSwitch]);
}

export default useKeyboardInput;
