import React from 'react'
import Button from 'react-bootstrap/Button';


const Options = ({ renderMaterial, renderFluent, renderBootstrap }) => {

    return(
        <div style={styles.container}>
        <h4>Choose UI: </h4>
        <Button onClick={() => renderMaterial()}>Material</Button>
        <Button onClick={() => renderFluent()}>Fluent</Button>
        <Button onClick={() => renderBootstrap()}>Bootstrap</Button>
        </div>
    )
}

const styles={
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        padding: '5px',

    }
}

export default Options