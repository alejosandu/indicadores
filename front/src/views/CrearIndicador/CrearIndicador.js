import React, { useState } from 'react';
import validator from 'validator'
import {
   Container,
   Card,
   CardHeader,
   CardContent,
   CardFooter,
   Button
} from 'components'
import FormIndicador from './FormIndicador'

// const useFormControl = (trigger = {}, config = {}) => {

//    const [formControl, setFormControl] = useState({})
//    const [loaded, setLoaded] = useState(false)

//    const createFormObject = (formConfig = {}) => {

//       const keys = Object.keys(formConfig)

//       const newForm = {}

//       keys.forEach((key) => {
//          newForm[key] = {
//             error: false,
//             rules: [
//                ...formConfig[key].map((rule) => {
//                   return validator[rule] ? validator[rule] : () => (false)
//                })
//             ]
//          }
//       })

//       return newForm

//    }

//    useEffect(() => {
//       setFormControl(createFormObject({ ...config }))
//       setLoaded(true)
//    }, [])

//    useEffect(() => {

//       if (!loaded) return

//       const triggerKeys = Object.keys({ ...trigger })
//       triggerKeys.forEach(key => {
//          formControl[key].error = formControl[key].rules.some((fn) => (fn(trigger[key]) === true))
//          console.log("formControl[key]", { ...formControl[key] });
//          setFormControl({ ...formControl })
//       });

//       return () => {

//       }
//    }, [trigger])

//    return formControl

// }


const CrearIndicador = (props) => {

   // const inputConfig = {
   //    indicadorNombre: [
   //       "isEmpty",
   //       "isEmail"
   //    ],
   //    parametroNombre: [
   //       "isEmpty"
   //    ],
   //    parametroTipo: [
   //       "isEmpty"
   //    ]
   // }

   const [state, setState] = useState({
      indicadorNombre: "",
      parametroNombre: "",
      parametroTipo: ""
   })


   // const formControl = useFormControl(state, inputConfig)

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
               <FormIndicador onChange={onChange} state={state} />
            </CardContent>
            <CardFooter>
               <Button color="primary" variant="contained" onClick={onSubmit} >Guardar</Button>
            </CardFooter>
         </Card>
      </Container>
   )
}

export default CrearIndicador