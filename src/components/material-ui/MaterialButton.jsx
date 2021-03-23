import React from 'react'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

function MaterialButton() {
  return (
    <>
    <div style={styles.buttonContainer}>

      <Button color="primary" variant="contained" style={{display: 'block'}}>Contained</Button>

      <Button color="primary" variant="outlined">Outlined</Button>

      <Button color="primary">Text</Button>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}
      >
        Icon
      </Button>

    </div>
    </>
  )
}

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

export default MaterialButton
