import React from 'react'
import MaterialButton from '../components/material-ui/MaterialButton'
import MaterialCheckbox from '../components/material-ui/MaterialCheckbox'
import MaterialSwitch from '../components/material-ui/MaterialSwitch'
import ScrollableTabsButtonAuto from '../components/material-ui/MaterialTabs'
import { DefaultEffects } from '@fluentui/react'

const MaterialPage = ({ controls }) => {
  const { nav, button, checkbox, switchButton } = controls
    return(
        <>
        <h2 style={{textAlign: 'center'}}>Material-UI</h2>
        <div
        style={{
          boxShadow: DefaultEffects.elevation8,
          padding: '20px',
          height: '100%'
        }}
      >
        <section >

       {!nav ? '' : <ScrollableTabsButtonAuto/>}

        {!button ? '' : (

          <MaterialButton/>

        )}

        {!checkbox ? '' : (
          <>
          <p>Checkbox: </p>
          <MaterialCheckbox/>
          </>
        )}

        {!switchButton ? '' : (
          <>
          <p>Switch: </p>
          <MaterialSwitch/>
          </>
        )}


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
        gap: '5px'
    }
}

export default MaterialPage