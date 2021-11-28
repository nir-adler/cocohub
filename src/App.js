import logo from './logo.svg'
import './App.css'
import Draggable from 'react-draggable'

function App() {
  return (
    <div id="main">
      <div id="top">
        <img
          width="378"
          height="57"
          src="https://cache.cocohub.ai/wp-content/uploads/2021/06/cropped-Asset-2.png"
          alt=""
          id="sitelogo"
        />
        {/* <div>logo-2</div> */}
      </div>
      <Draggable>

        <div id="channels-container">
          <div id="help">
            
          </div>
          <div id="channels">
          </div>
        </div>
      </Draggable>

    </div>
  );
}

export default App
