import React from 'react';
import { Container , Card , CardHeader , CardContent , CardFooter , Button } from 'components'

const CrearIndicador = (props) => {
    return (
        <Container lg={12} md={12} xl={12} xs={12} >
            <Card>
                <CardHeader title="Hola" />
                <CardContent>
                    <h1>Esto es un mensaje de prueba</h1>
                </CardContent>
                <CardFooter>
                    <Button color="primary" variant="contained" >Guardar</Button>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default CrearIndicador