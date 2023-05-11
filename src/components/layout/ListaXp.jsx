import { Container, Row, Col } from 'reactstrap'

export default function ListaXp({curso, duracao, local, data}) {
  return (
    <Container className='Container-size'>
      <Row className="max-width justify-content-between align-items-center">
        <Col xs={4}>
          <div>
            <h1>{curso}</h1>
            <p>({duracao})</p>
          </div>
        </Col>

        <Col xs={4}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-7-3.8v-6L1 9l11-6l11 6v8h-2v-6.9l-2 1.1v6L12 21Zm0-8.3L18.85 9L12 5.3L5.15 9L12 12.7Zm0 6.025l5-2.7V12.25L12 15l-5-2.75v3.775l5 2.7Zm0-6.025Zm0 2.25Zm0 0Z" />
            </svg>
            <p>{local}</p>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
            </svg>
            <p>{data}</p>
          </div>
        </Col>
      </Row>
      <div className="horizontal-line"></div>
    </Container>
  )
}



