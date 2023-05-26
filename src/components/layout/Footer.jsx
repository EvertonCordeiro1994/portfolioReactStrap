import '../style/global.css'
import { Icon } from '@iconify/react'
import {
    Col,
    Container,
    Row,
} from 'reactstrap'


export default function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="horizontal-line"></div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='d-flex justify-content-center gap-5 pb-5 link'>
                        <a href="https://github.com/EvertonCordeiro1994" target='_blank'>
                            <Icon icon="bi:github" className='iconSize-footer' />
                        </a>
                        <a href="https://www.linkedin.com/in/evertoncordeiro1994" target='_blank' >
                            <Icon icon="mdi:linkedin" className='iconSize-footer' />
                        </a>
                        <a href="mailto:email@provedor.com.br" target='_blank'>
                            <Icon icon="tabler:mail" className='iconSize-footer' />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}