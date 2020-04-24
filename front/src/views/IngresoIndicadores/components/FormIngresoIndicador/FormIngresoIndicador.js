import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardFooter, GridContainer, Button } from 'components'

import Content from './Content';

const FormIngresoIndicador = props => {

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
         addDefaultOption: false,
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
      <Card>
         <CardHeader
            title={`Nuevo indicador ${props.indicadornombre}`}
            subheader={props.indicadorguia}
         />
         <form autoComplete="off" noValidate >
            <CardContent>
               <GridContainer>
                  <Content inputFields={inputFields} inputValues={state} />
               </GridContainer>
            </CardContent>
         </form>
         <CardFooter>
            <Button color="primary" variant="contained" >Guardar</Button>
         </CardFooter>
      </Card>
   );
};

FormIngresoIndicador.defaultProps = {
   indicadornombre: "",
   indicadorguia: "",
   indicadorinputs: []
}

FormIngresoIndicador.propTypes = {
   indicadornombre: PropTypes.string
};

export default FormIngresoIndicador;