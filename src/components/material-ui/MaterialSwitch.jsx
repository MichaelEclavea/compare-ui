import React, { useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'

const MaterialSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [text, setText] = useState('Off')

  const renderSwitch = () => {
    if(isChecked) {
      setIsChecked(!isChecked)
      setText('Off')
    } else {
      setIsChecked(!isChecked)
      setText('On')
    }
  }
  return (
    <div style={styles.container}>
    <label style={styles.label}>Toggle Switch</label>
    <FormControlLabel
    control={
      <Switch
        checked={isChecked}
        onChange={renderSwitch}
        name="toggle"
        color="primary"
      />
    }
    label={text}
  />
  </div>
  )
}

const styles = {
  container: {
    fontWeight: '600',
    fontSize: '14px',
  },
  label: {
    margin: '0',
    padding: '5px 0',
    display: 'block'
  }
}

export default MaterialSwitch
