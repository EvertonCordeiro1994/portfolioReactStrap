import {
    Container,
    Col
} from 'reactstrap'


export default function Contato() {
    return (
        <Container className='d-flex align-items-center text-center container-size'>
            <Col>
                <h1>Ficou interessado no meu trabalho? <br />
                    entre em contato</h1>
                <p><a className="gradient" href="mailto:evertoncordeiro@icloud.com">evertoncordeiro@icloud.com</a></p>
            </Col>
        </Container>
    )
}