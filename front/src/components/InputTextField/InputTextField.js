import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const handleInput = (props) => {
   const {
      required,
      displayName: label,
      fieldName: name,
      placeholder,
      autoComplete = "false",
      selectOptions,//se extrae select options
      ...rest
   } = props

   return {
      required,
      label,
      name,
      placeholder,
      autoComplete,
      ...rest
   }
}

const InputText = (props) => {
   return (
      <TextField
         fullWidth
         margin="dense"
         type="text"
         variant="outlined"
         {...handleInput(props)}
      />
   )
}

const InputNumber = (props) => {
   return (
      <TextField
         fullWidth
         margin="dense"
         type="number"
         variant="outlined"
         {...handleInput(props)}
      />
   )
}

const InputSelect = (props) => {
   const defaultOption = { displayValue: "Seleccione", value: "-1" }
   let selectOptions = [...props.selectOptions]
   if( props.selectOptions.length === 0 ) {
      selectOptions = [defaultOption]
   } else if (props.addDefault) {
      selectOptions = [defaultOption,...selectOptions]
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
         {...handleInput(props)}
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

const InputTextField = (props) => {
   const { inputType , ...rest } = props
   switch (inputType) {
      case 'number': return <InputNumber {...rest} />;
      case 'select': return <InputSelect {...rest} />;
      default: return <InputText {...rest} />;
   }
}

InputTextField.defaultProps = {
   required: false,
   displayName: "",
   fieldName: "",
   selectOptions: []
}

InputTextField.propTypes = {
   required: PropTypes.bool,
   displayName: PropTypes.string,
   fieldName: PropTypes.string,
   value: PropTypes.string,
   defaultValue: PropTypes.string,
}

export default InputTextField