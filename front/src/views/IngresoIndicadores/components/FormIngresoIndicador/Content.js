import React from 'react';
import { InputTextField, GridItem } from 'components';

const Content = (props) => {
   const { inputFields, inputValues } = props

   const inputs = inputFields.map((inputProps, key) => {
      return (
         <GridItem key={key} md={4} xs={12} >
            <InputTextField {...inputProps} value={inputValues[inputProps.fieldName]} />
         </GridItem>
      )
   })

   return (inputs)
}

export default Content