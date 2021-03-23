import React from 'react'
import ColorOptions from '../components/options/ColorOptions'
import { DefaultEffects } from '@fluentui/react'
import BootstrapButton from '../components/bootstrap/BootstrapButton'

const BootstrapPage = ({ controls, bootstrapColor,  renderColorBootstrap}) => {
  const {nav, button, checkbox, switchButton} = controls
  return (
    <>
      <h2 style={{textAlign: 'center'}}>React Bootstrap</h2>
      <div style={{display: 'flex', gap: '15px'}}>
          <div style={{left: '0'}}>
            <ColorOptions renderColorBootstrap={renderColorBootstrap}/>
          </div>
      <div
        style={{
          boxShadow: DefaultEffects.elevation8,
          padding: '20px',
          height: '100%',
        }}
      >
        <BootstrapButton bootstrapColor={bootstrapColor}/>
      </div>
      </div>
    </>
  )
}

export default BootstrapPage
