import React from 'react'
import {
    GridContainer,
    GridItem,
    InputTextField as Input
 } from 'components'

const FormIndicador = (props) => {

    const { onChange } = props

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

    return (
        <form autoComplete="off" noValidate>
            <GridContainer>
                <GridItem md={6}>
                    <Input
                        required
                        displayName="Nombre de indicador"
                        fieldName="indicadorNombre"
                        onChange={onChange}
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
                        onChange={onChange}
                    />
                </GridItem>
                <GridItem md={6}>
                    <Input
                        required
                        displayName="Tipo de parametro"
                        fieldName="parametroTipo"
                        inputType="select"
                        selectOptions={selectOptions}
                        onChange={onChange}
                    />
                </GridItem>
            </GridContainer>
        </form>
    )
}

export default FormIndicador