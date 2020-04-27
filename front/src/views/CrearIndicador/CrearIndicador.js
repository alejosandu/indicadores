import React, { useState } from 'react';
import {
   Container,
   Card,
   CardHeader,
   CardContent,
   CardFooter,
   Button,
   GridContainer,
   GridItem,
   InputTextField as Input
} from 'components'

const CrearIndicador = (props) => {

   const [state, setState] = useState({})

   const selectOptions = [
      {
         value: "number",
         displayValue: "Numérico"
      },
      {
         value: "select",
         displayValue: "Lista"
      }
   ]

   const onChange = (e) => {
      setState({
         ...state,
         [e.target.name]: e.target.value
      });
   }

   return (
      <Container lg={12} md={12} xl={12} xs={12} >
         <Card>
            <CardHeader
               title="Crear nuevo indicador"
            />
            <CardContent>
               <form autoComplete="off" noValidate >
                  <GridContainer>
                     <GridItem md={6}>
                        <Input
                           required
                           displayName="Nombre de indicador"
                           fieldName="indicadorNombre"
                           value={state.indicadorNombre}
                           inputEvents={{
                              onChange
                           }}
                        />
                     </GridItem>
                  </GridContainer>
                  <GridContainer>
                     <GridItem md={6}>
                        <Input
                           required
                           displayName="Parametro"
                           fieldName="parametroNombre"
                           placeholder="Ingrese nombre del parametro"
                           value={state.parametroNombre}
                           inputEvents={{
                              onChange
                           }}
                        />
                     </GridItem>
                     <GridItem md={6}>
                        <Input
                           required
                           displayName="Tipo de parametro"
                           fieldName="parametroTipo"
                           inputType="select"
                           selectOptions={selectOptions}
                           value={state.parametroTipo}
                           inputEvents={{
                              onChange
                           }}
                        />
                     </GridItem>
                  </GridContainer>
               </form>
            </CardContent>
            <CardFooter>
               <Button color="primary" variant="contained" >Guardar</Button>
            </CardFooter>
         </Card>
      </Container>
   )
}

export default CrearIndicador