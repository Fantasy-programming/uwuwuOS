// Global Styles
import './design/normalize.scss'
import './design/globals.scss'

import Screen from '@components/Wrapper/Screen'
import WindowsArea from '@components/Wrapper/WindowsArea'

function App() {
  return (
    <>
      <Screen>
        <WindowsArea />
      </Screen>
    </>
  )
}

export default App
