import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
   Card,
   CardHeader,
   CardActions,
   Divider,
   Button,
} from '@material-ui/core';

import {
   CardContent
} from './components';

const AccountDetails = props => {
   const { className, ...rest } = props;

   const [state, setState] = useState({
      "precioInternet": "156.26",
      "precioEnergia": "45569.00",
      "cumpleMinimo": "N"
   });

   const handleChange = event => {
      setState({
         ...state,
         [event.target.name]: event.target.value
      });
   };

   const inputFields = [
      {
         id: 1,
         displayName: "Precio Internet",
         fieldName: "precioInternet",
         inputEvents: {
            onChange: handleChange
         }
      },
      {
         id: 2,
         displayName: "Precio Energía",
         fieldName: "precioEnergia",
         inputType: "number",
         inputEvents: {
            onChange: handleChange
         }
      },
      {
         id: 3,
         displayName: "Cumple",
         fieldName: "cumpleMinimo",
         inputType: "select",
         selectOptions: [
            {
               id: 10,
               displayValue: "Sí",
               value: "S",
            },
            {
               id: 11,
               displayValue: "No",
               value: "N",
            }
         ],
         inputEvents: {
            onChange: handleChange
         }
      },
   ]

   return (
      <Card {...rest} >
         <form autoComplete="off" noValidate >
            <CardHeader
               title={`Nuevo indicador ${props.indicadornombre}`}
               subheader={props.indicadorguia}
            />
            <Divider />
            <CardContent inputFields={inputFields} inputValues={state} />
            <Divider />
            <CardActions>
               <Button color="primary" variant="contained" >Save details</Button>
            </CardActions>
         </form>
      </Card>
   );
};

AccountDetails.defaultProps = {
   indicadornombre: "",
   indicadorguia: "",
   indicadorinputs: []
}

AccountDetails.propTypes = {
   className: PropTypes.string,
   indicadornombre: PropTypes.string
};

export default AccountDetails;