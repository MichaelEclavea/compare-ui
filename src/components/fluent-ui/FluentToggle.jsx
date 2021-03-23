import React from 'react'
import { Toggle, Stack } from '@fluentui/react';

const FluentToggle = () => {
    return(
        <Stack >
        <Toggle label="Enabled and checked" onText="On" offText="Off" onChange={() => console.log('Fluent-UI button clicked')} />
      </Stack>
    )
}

export default FluentToggle