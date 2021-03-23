import React, { useState } from 'react'
import { PrimaryButton, DefaultButton, CommandBarButton } from '@fluentui/react'

const FluentButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{display: 'flex', gap: '20px'}}>
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

      {/* <DefaultButton
        text="Primary"
        primary
        split
        splitButtonAriaLabel="See 2 options"
        aria-roledescription="split button"
        onClick={() => alert('clicked')}
        checked={isChecked}
      />

      <CommandBarButton
        // iconProps={addIcon}
        text="New item"
        // Set split=true to render a SplitButton instead of a regular button with a menu
        split={true}
        menuProps='false'
        disabled={true}
        checked={isChecked}
      /> */}
    </div>
  )
}

export default FluentButton