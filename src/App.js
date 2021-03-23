import MaterialPage from "./pages/MaterialPage"
import FluentUiPage from './pages/FluentPage'
import Options from './components/options/Options'
import Controls from './components/control-choices/Controls'
import './App.css';
import { useState } from "react";

function App() {
  const [showMaterial, setShowMaterial] = useState(false)
  const [showFluent, setShowFluent] = useState(false)
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

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Compare different UI</h1>
      <hr></hr>
      <Options renderFluent={renderFluent} renderMaterial={renderMaterial}/>
      <hr></hr>
      <Controls controls={controls} renderControls={renderControls}/>
      <div className='main-container' style={{width: '85vw', maxWidth: '1400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 500px)', margin: 'auto', justifyContent: 'space-around', padding: '20px', gap: '20px'}}>
        <div className='material-container' style={{marginTop: '20px'}}>
        {!showMaterial ? '' : <MaterialPage controls={controls}/>}
        </div>
        <div className='fluent-container' style={{marginTop: '20px'}}>
        {!showFluent ? '' : <FluentUiPage controls={controls}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
