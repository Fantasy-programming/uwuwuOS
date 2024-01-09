// Global Styles
import './design/normalize.scss'
import './design/globals.scss'

import Screen from '@components/Wrapper/Screen'

import Navbar from '@components/Navbar'
import DragArea from '@components/Wrapper/DragArea'
import WindowsArea from '@components/Wrapper/WindowsArea'

function App() {
  return (
    <>
      <Screen>
        <Navbar />
        <div className="WorkArea">
          <DragArea />
          <WindowsArea />
        </div>
      </Screen>
    </>
  )
}

export default App
