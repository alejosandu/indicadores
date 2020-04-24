import React from 'react';
import { CardContent as MaterialCardContent } from '@material-ui/core'

const styles = {
    padding: "13px 16px",
}

const CardContent = (props) => {
    return (
        <MaterialCardContent style={styles} {...props} >{props.children}</MaterialCardContent>
    )
}

export default CardContent