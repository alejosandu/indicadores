import React from 'react';
import { Grid } from '@material-ui/core'

const GridItem = (props) => {
    return <Grid item {...props} >{props.children}</Grid>
}

export default GridItem