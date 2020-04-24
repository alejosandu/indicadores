import React from 'react';
import {
   CardContent as Card,
   Grid,
} from '@material-ui/core';
import { Input } from 'components';

const CardContent = (props) => {
   const { inputFields , inputValues } = props

   const inputs = inputFields.map((inputProps,key) => {
      return (
         <Grid key={key} item md={4} xs={12} >
            <Input {...inputProps} value={inputValues[inputProps.fieldName]} />
         </Grid>
      )
   })

   return (
      <Card>
         <Grid container spacing={2} >
            {inputs}
         </Grid>
      </Card>
   )
}

export default CardContent