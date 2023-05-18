import { Icon } from '@iconify/react'
import {
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
} from 'reactstrap'


export default function Contato() {
    return (
        <Container>
            <Col className='d-flex-colunm text-center mb-5'>
                <h3>Ficou interessado no meu trabalho? <br />
                    entre em contato</h3>
                <h2 className='gradient'>
                   Deixe uma mensagem 
                </h2>
            </Col>
            <Col >
                <Form>
                    <FormGroup className='input-group'>
                        <Input required="" type="text" name="text" autocomplete="off" class="input"/>
                        <Label class="user-label">Digite seu nome</Label>
                    </FormGroup>
                    <FormGroup className='input-group'>
                        <Input required="" type="text" name="text" autocomplete="off" class="input"/>
                        <Label class="user-label">Digite aqui o seu email</Label>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="exampleText">
                        Text Area
                        </Label>
                        <Input id="exampleText" name="text" type="textarea"/>
                    </FormGroup>
                </Form>
                <Button color="primary" outline >
                    <span>Enviar</span>
                </Button>
            </Col>
        </Container>
    )
}