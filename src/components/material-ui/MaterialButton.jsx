import React from 'react'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

function MaterialButton() {
  return (
    <>
    <div style={styles.buttonContainer}>
    <section style={styles.sections}>
      <Button color="primary" variant="contained" style={{display: 'block'}}>Button</Button>
      <label>Contained</label>
    </section>
    <section style={styles.sections}>
      <Button color="primary" variant="outlined">Button</Button>
      <label>Outlined</label>
      </section>
      <section style={styles.sections}>
      <Button color="primary">Button</Button>
      <label>Text</label>
      </section>
      <section style={styles.sections}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <label>Icon Button</label>
      </section>
    </div>
    </>
  )
}

const styles={
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  sections: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '3px'
  }
}

export default MaterialButton
