import '../style/global.css'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { Icon } from '@iconify/react'


export default function Home() {
    return (
        <Container xl='12' fluid>
        <Row> 
          <Col xl="8" md="12" >
            <div>
              <h1>
                Olá ! Me chamo
                <br />
                <span className='gradient'>Éverton Cordeiro</span>
                <br />
                e sou um
                <br />
                <span className='gradient'>Dev Front-end</span>
              </h1>

              <div className='d-flex justify-content-center gap-5'>
                <Icon icon="bi:github" style={{ fontSize: '50' }} />
                <Icon icon="mdi:linkedin" style={{ fontSize: '50' }} />
                <Icon icon="tabler:mail" style={{ fontSize: '50' }} />
              </div>

            </div>
          </Col>
          <Col lg="4" md="12" >
            <img alt="memoji Olá" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/ola.png" />
          </Col>
        </Row>
      </Container>
    )
}
