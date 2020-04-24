import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

const Button = (props) => {
    return (<MaterialButton {...props} >{props.children}</MaterialButton>)
}

export default Button