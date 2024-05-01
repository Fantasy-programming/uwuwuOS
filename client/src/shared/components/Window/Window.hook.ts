import { useContext } from 'react';
import { WindowContextType } from './Window.type';
import { WindowContext } from './Window';

export const useWindowContext = (): WindowContextType => {
  const context = useContext(WindowContext)!; // Using non-null assertion operator
  if (!context) {
    throw new Error(
      'useWindowContext must be used within a WindowContextProvider',
    );
  }
  return context;
};
