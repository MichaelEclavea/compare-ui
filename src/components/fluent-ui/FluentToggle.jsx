import React from 'react'
import { Toggle } from '@fluentui/react';

const FluentToggle = () => {
    return(
      <div style={styles.container}>
        <Toggle style={styles.toggler} label="Toggle Switch" onText="On" offText="Off" onChange={() => console.log('Fluent-UI button clicked')} />
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
  },
  toggler: {
    margin: '5px 0'
  }
}

export default FluentToggle