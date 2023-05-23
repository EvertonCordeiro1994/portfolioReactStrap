import { Container, Col} from 'reactstrap'
import Formulario from '../layout/Formulario'


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
            <Col className='d-flex justify-content-center' >
                <Formulario  />
            </Col>
        </Container>
    )
}