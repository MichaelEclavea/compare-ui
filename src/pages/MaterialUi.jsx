import React from 'react'
import MaterialButton from '../components/material-ui/MaterialButton'
import MaterialCheckbox from '../components/material-ui/MaterialCheckbox'
import MaterialSwitch from '../components/material-ui/MaterialSwitch'
import ScrollableTabsButtonAuto from '../components/material-ui/MaterialTabs'

const MaterialPage = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <h2>Material-UI</h2>
        <ScrollableTabsButtonAuto/>
        <section style={styles.section}>
        <p>Button: </p>
        <MaterialButton/>
        </section>
        <section style={styles.section}>
        <p>Checkbox: </p>
        <MaterialCheckbox/>
        </section>
        <section style={styles.section}>
        <p>Switch: </p>
        <MaterialSwitch/>
        </section>
        </div>
    )
}

const styles = {
    section: {
        display: 'flex',
        padding: '10px'
    }
}

export default MaterialPage