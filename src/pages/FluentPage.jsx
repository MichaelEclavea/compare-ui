import React from 'react'
import { DefaultEffects } from '@fluentui/react'
import FluentButton from '../components/fluent-ui/FluentButton'
import FluentElevation from '../components/fluent-ui/FluentElevation'
import FluentCheckbox from '../components/fluent-ui/FluentCheckbox'
import FluentToggle from '../components/fluent-ui/FluentToggle'
import FluentNav from '../components/fluent-ui/FluentNav'

const FluentUiPage = ({ controls }) => {
  const { nav, button, checkbox, switchButton } = controls

  return (
    <>
      <h2 style={{textAlign: 'center'}}>Fluent-UI</h2>
      <div
        style={{
          boxShadow: DefaultEffects.elevation8,
          padding: '20px',
          height: '100%',
        }}
      >
        <section style={styles.section}>
          {!nav ? '' : <FluentNav/>}
          {!button ? '' : <FluentButton />}
          {!checkbox ? '' : <FluentCheckbox />}
          {/* {<FluentElevation />} */}
          {!switchButton ? '' : <FluentToggle/>}
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

export default FluentUiPage
