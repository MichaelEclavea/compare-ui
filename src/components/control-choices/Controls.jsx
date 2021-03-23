import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton'

const Controls = ({ controls, renderControls }) => {

  return (
    <div style={styles.container}>
      <h4></h4>
        <ToggleButton type='checkbox' variant='light' size="lg" onChange={() => renderControls('nav')} checked={controls.nav}> Nav</ToggleButton>
        <ToggleButton type='checkbox' variant='light' size="lg" onChange={() => renderControls('button')} checked={controls.button}> Button</ToggleButton>
        <ToggleButton type='checkbox' variant='light' size="lg" onChange={() => renderControls('checkbox')} checked={controls.checkbox}> Checkbox</ToggleButton>
        <ToggleButton type='checkbox' variant='light' size="lg" onChange={() => renderControls('switchButton')} checked={controls.switchButton}> Switch Button</ToggleButton>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '5px',
  },
}

export default Controls
