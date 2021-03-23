import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const MaterialCheckbox = () => {
    return (
      <div style={styles.container}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <label style={styles.label}>Toggle Switch</label>
      </div>
    )
}
const styles = {
  container: {
    fontSize: '14px',
  },
  label: {
    margin: '0',
    padding: '5px 0',

  }
}

export default MaterialCheckbox