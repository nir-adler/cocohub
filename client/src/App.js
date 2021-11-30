import './App.css'
import Draggable from 'react-draggable'
import * as React from 'react'

import ChannelHelp from './components/ChannelHelp'
import Channels from './components/Channels'
import TopMenu from './components/TopMenu'

import useBotResult from './hooks/useBotResult'

function App() {
  const [channel, setChannel] = React.useState(null)
  const [botName, getBotName, error] = useBotResult()
  const [dndDisabled, setdndDisabled] = React.useState(false)

  React.useEffect(() => {
    const handler = (e) => {
      setdndDisabled(window.matchMedia("(max-width: 640px)").matches)
    }
    window.matchMedia("(max-width: 640px)").addEventListener('change', handler)
  }, [])

  if (!dndDisabled) {
    return (
      <div id="main">
        <TopMenu
          botName={botName}
        />
        <Draggable
          disabled={dndDisabled}
        >

          <div id="channels-container">
            <ChannelHelp
              channel={channel}
            />
            <Channels
              channel={channel}
              setChannel={setChannel}
            />
          </div>
        </Draggable>
        {error ? <div>{error}</div> : null}

      </div>
    )
  } else {
    return <div id="main">
      <TopMenu
        botName={botName}
      />
      <div id="channels-container">
        <ChannelHelp
          channel={channel}
        />
        <Channels
          channel={channel}
          setChannel={setChannel}
        />
      </div>
      {error ? <div>{error}</div> : null}
    </div>
  }
}

export default App
