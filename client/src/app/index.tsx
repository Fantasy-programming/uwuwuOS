import * as React from 'react';

import './design/globals.scss';

import { DragArea, WindowsArea, WorkArea } from '@components/Screen/ScreenArea';
import Navbar from '@components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <WorkArea>
        <DragArea />
        <WindowsArea />
      </WorkArea>
    </React.Fragment>
  );
}

export default App;
