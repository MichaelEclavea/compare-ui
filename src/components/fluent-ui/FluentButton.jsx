import React, { useState } from 'react'
import {
  DefaultButton,
  PrimaryButton
} from '@fluentui/react'

const FluentButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{display: 'flex', gap: '20px', alignItems: 'flex-end'}}>
    <p>Button: </p>
      <DefaultButton
        text="Standard"
        onClick={() => setIsChecked(!isChecked)}
        allowDisabledFocus
        disabled='true'
        checked={isChecked}
      />

      <PrimaryButton
        text="Primary"
        onClick={() => setIsChecked(!isChecked)}
        allowDisabledFocus
        checked={isChecked}
      />
    </div>
  )
}

export default FluentButton