import {
    Container,
    Col
} from 'reactstrap'


export default function Contato() {
    return (
        <Container>
            <Col className='d-flex-colunm text-center'>
                <h3>Ficou interessado no meu trabalho? <br />
                    entre em contato</h3>
                <h2>
                    <a className="gradient" href="mailto:evertoncordeiro@icloud.com">evertoncordeiro@icloud.com</a>
                </h2>
            </Col>
        </Container>
    )
}