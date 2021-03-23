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
    <FormControlLabel
    control={
      <Switch
        checked={isChecked}
        onChange={renderSwitch}
        name="checkedB"
        color="primary"
      />
    }
    label={text}
  />
  )
}

export default MaterialSwitch
