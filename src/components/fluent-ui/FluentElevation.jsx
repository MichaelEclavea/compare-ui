import React from 'react'
import {getTheme} from '@fluentui/react'
import { DefaultEffects } from '@fluentui/react';

const FluentElevation = () => {
  const theme = getTheme()
  return (
  <div style={{display: 'flex', justifyContent: 'space-around', padding: '5px'}}>
  <div style={{boxShadow: theme.effects.elevation8, width: '40%', padding: '20px'}}>
        <h2>Elevation Depth:8</h2>
  </div>
  <div style={{ boxShadow: DefaultEffects.elevation64, width: '40%', padding: '20px' }}>
      <h2>Elevation Depth:64</h2>
  </div>
  </div>
  )
}

export default FluentElevation
