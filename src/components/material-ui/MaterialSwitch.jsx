import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'

const MaterialSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Switch
      checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      color="primary"
      name="checked"
      inputProps={{'aria-label': 'primary checkbox'}}
    />
  )
}

export default MaterialSwitch
