import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const InputText = (props) => {
   return (
      <TextField
         required={props.required}
         fullWidth
         label={props.displayName}
         name={props.fieldName}
         margin="dense"
         type="text"
         variant="outlined"
         value={props.value}
         {...props.inputEvents}
      />
   )
}

const InputNumber = (props) => {
   return (
      <TextField
         required={props.required}
         fullWidth
         label={props.displayName}
         name={props.fieldName}
         margin="dense"
         type="number"
         variant="outlined"
         value={props.value}
         {...props.inputEvents}
      />
   )
}

const InputSelect = (props) => {
   let selectOptions = [...props.selectOptions]
   if( props.selectOptions.length === 0 ) {
      selectOptions = [{ displayValue: "Seleccione", value: "-1" }]
   }
   return (
      <TextField
         required={props.required}
         fullWidth
         label={props.displayName}
         name={props.fieldName}
         margin="dense"
         variant="outlined"
         select
         // eslint-disable-next-line react/jsx-sort-props
         SelectProps={{ native: true }}
         value={props.value}
         {...props.inputEvents}
      >
         {selectOptions.map((option,key) => (
            <option
               key={key}
               value={option.value}
            >
               {option.displayValue}
            </option>
         ))}
      </TextField>
   )
}

const Input = (props) => {
   switch (props.inputType) {
      case 'number': return <InputNumber {...props} />;
      case 'select': return <InputSelect {...props} />;
      default: return <InputText {...props} />;
   }
}

Input.defaultProps = {
   required: false,
   displayName: "",
   fieldName: "",
   value: "",
   inputEvents: {},
}

Input.propTypes = {
   required: PropTypes.bool,
   displayName: PropTypes.string,
   fieldName: PropTypes.string,
   value: PropTypes.string,
   inputEvents: PropTypes.object
}

export default Input