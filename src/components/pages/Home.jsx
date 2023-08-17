import '../style/global.css'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { Icon } from '@iconify/react'


export default function Home() {
    return (
        <Container xl='12' fluid className=" mb-5">
            <Row>
                <Col xl="8" md="8" sm='12' xs='12' >
                    <div>
                        <h1 className='mt-10 text-center title-home'>
                            Olá ! Me chamo
                            <br />
                            <span className='gradient'>Éverton Cordeiro</span>
                            <br />
                            e sou um
                            <br />
                            <span className='gradient'>Dev Front-end</span>
                        </h1>

                        <div className='d-flex justify-content-center gap-5'>
                            <a href="https://github.com/EvertonCordeiro1994" target='_blank'>
                                <Icon icon="bi:github"      className='iconSize-home' />
                            </a>
                            <a href="https://www.linkedin.com/in/evertoncordeiro1994" target='_blank' >
                                <Icon icon="mdi:linkedin"   className='iconSize-home'  />
                            </a>
                            <a href="mailto:email@provedor.com.br" target='_blank'>
                                <Icon icon="tabler:mail"    className='iconSize-home'  />
                            </a>
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
