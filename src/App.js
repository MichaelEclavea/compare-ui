import MaterialPage from './pages/MaterialPage'
import FluentUiPage from './pages/FluentPage'
import BootstrapPage from './pages/BootstrapPage'
import Options from './components/options/Options'
import ColorOptions from './components/options/ColorOptions'
import Controls from './components/control-choices/Controls'
import './App.css';
import { useState } from "react";

function App() {
  const [showMaterial, setShowMaterial] = useState(false)
  const [showFluent, setShowFluent] = useState(false)
  const [showBootstrap, setShowBootstrap] = useState(false)
  const [bootstrapColor, setBootstrapColor] = useState('primary')
  const [controls, setControls] = useState({
    nav: false,
    button: false,
    checkbox: false,
    switchButton: false,
  })

  const renderControls = (string) => {
    if(string === 'nav'){
      setControls(prevState => ({ ...prevState, nav: !controls.nav }))
    } else if(string === 'button'){
      setControls(prevState => ({ ...prevState, button: !controls.button }))
    } else if(string === 'checkbox'){
      setControls(prevState => ({ ...prevState, checkbox: !controls.checkbox }))
    } else if(string === 'switchButton'){
      setControls(prevState => ({ ...prevState, switchButton: !controls.switchButton }))
    }
  }

  const renderMaterial = () => {
    setShowMaterial(!showMaterial)
  }

  const renderFluent = () => {
    setShowFluent(!showFluent)
  }

  const renderBootstrap = () => {
    setShowBootstrap(!showBootstrap)
  }

  const renderColorBootstrap = (string) => {
    setBootstrapColor(string);
  }

  return (
    <div style={{height: '100vh'}}>
      <h1 style={{textAlign: 'center'}}>Compare different UI</h1>
      <hr></hr>
      <Options renderFluent={renderFluent} renderMaterial={renderMaterial} renderBootstrap={renderBootstrap}/>
      <hr></hr>
      <Controls controls={controls} renderControls={renderControls}/>
      {/* <ColorOptions style={styles.options} renderColorBootstrap={renderColorBootstrap}/> */}
      <div className='main-container' style={{width: '85vw', maxWidth: '1400px', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 500px)', margin: 'auto', justifyContent: 'space-around', gap: '20px'}}>
        <div style={styles.material}>
        {!showMaterial ? '' : <MaterialPage controls={controls}/>}
        </div>
        <div style={styles.material}>
        {!showFluent ? '' : <FluentUiPage controls={controls}/>}
        </div>
        <div style={styles.material}>
        {!showBootstrap ? '' : <BootstrapPage controls={controls} bootstrapColor={bootstrapColor} renderColorBootstrap={renderColorBootstrap}/>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  material: {
    marginBottom: '50px',
  },
  options: {
    position: 'absolute',
    left: '0',
  }
}

export default App;
