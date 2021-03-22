import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const MaterialCheckbox = () => {
    return (
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    )
}

export default MaterialCheckbox