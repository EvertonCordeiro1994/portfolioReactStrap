import '../style/global.css'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { Icon } from '@iconify/react'


export default function Home() {
    return (
        <Container xl='12' fluid className="mt-10 mb-5">
            <Row>
                <Col xl="8" md="8" sm='12' xs='12' >
                    <div>
                        <h1 className='text-center title-home'>
                            Olá ! Me chamo
                            <br />
                            <span className='gradient'>Éverton Cordeiro</span>
                            <br />
                            e sou um
                            <br />
                            <span className='gradient'>Dev Front-end</span>
                        </h1>

                        <div className='d-flex justify-content-center gap-5'>
                            <Icon icon="bi:github"      className='iconSize-home' />
                            <Icon icon="mdi:linkedin"   className='iconSize-home'  />
                            <Icon icon="tabler:mail"    className='iconSize-home'  />
                        </div>

                    </div>
                </Col>
                <Col lg="4" md="4" className='mb-10 invisivel' >
                    <img alt="memoji Olá" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/ola.png" />
                </Col>
            </Row>
        </Container>
    )
}
