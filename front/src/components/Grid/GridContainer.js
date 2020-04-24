import React from 'react';
import { Grid } from '@material-ui/core'

const GridContainer = (props) => {
    return <Grid container spacing={2} >{props.children}</Grid>
}

export default GridContainer