import React from 'react';
import {
   Card as MaterialCard
} from '@material-ui/core';

const Card = (props) => {

   return (
      <MaterialCard {...props}>
         {props.children}
      </MaterialCard>
   )
}

export default Card