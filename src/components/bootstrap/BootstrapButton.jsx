import React from 'react'
import Button from 'react-bootstrap/Button'

const BootstrapButton = ({ bootstrapColor }) => {
console.log(bootstrapColor)
  return (
    <>
    <section style={styles.container}>
      <Button variant={bootstrapColor}>Primary</Button>
      <Button variant={`outline-${bootstrapColor}`}>Outlined</Button>
      <Button variant={bootstrapColor} disabled>
        Disabled
      </Button>
    </section>
    </>
  )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '15px'
    }
}
export default BootstrapButton
