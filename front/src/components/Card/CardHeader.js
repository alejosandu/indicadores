import React from 'react';
import {
   CardHeader as MaterialCardHeader,
   Divider
} from '@material-ui/core';

const CardHeader = (props) => {
   const { title, subtitle } = props
   return (
      <React.Fragment>
         <MaterialCardHeader title={title} subheader={subtitle} />
         <Divider />
      </React.Fragment>
   )
}

export default CardHeader