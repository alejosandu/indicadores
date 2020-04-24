import React from 'react';
import {
   CardActions,
   Divider
} from '@material-ui/core';

const styles = {
   padding: "10px 16px",
}

const CardFooter = (props) => {
   return (
      <React.Fragment>
         <Divider />
         <CardActions style={styles}>
            {props.children}
         </CardActions>
      </React.Fragment>
   )
}

export default CardFooter