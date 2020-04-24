import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   root: {
      padding: theme.spacing(4)
   }
}));

const Container = (props) => {

    const {
        lg,
        md,
        xl,
        xs
    } = props

    const classes = useStyles();

    return (
        <div className={classes.root}>
           <Grid container spacing={4} >
              <Grid item lg={lg} md={md} xl={xl} xs={xs} >
                  {props.children}
              </Grid>
           </Grid>
        </div>
     )
}

export default Container