import React from 'react'
import ColorOptions from '../components/options/ColorOptions'
import { DefaultEffects } from '@fluentui/react'
import BootstrapButton from '../components/bootstrap/BootstrapButton'
import BootstrapNav from '../components/bootstrap/BootstrapNav'

const BootstrapPage = ({ controls, bootstrapColor,  renderColorBootstrap}) => {
  const {nav, button, checkbox, switchButton} = controls
  return (
    <>
      <h2 style={{textAlign: 'center'}}>React Bootstrap</h2>
      <div
        style={{
          boxShadow: DefaultEffects.elevation8,
          padding: '20px',
          height: '100%',
        }}
      >
      <section style={styles.section}>
        {!nav ? '' : <BootstrapNav/>}
        {!button ? '' : <BootstrapButton bootstrapColor={bootstrapColor}/>}
        </section>
      </div>
    </>
  )
}

const styles = {
  section: {
    display: 'flex',
    padding: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15px',
  },
}

{/* <div style={{left: '0'}}>
  <ColorOptions renderColorBootstrap={renderColorBootstrap}/>
</div> */}
export default BootstrapPage
