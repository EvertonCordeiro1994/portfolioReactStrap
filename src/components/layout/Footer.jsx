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
                    <div className='d-flex justify-content-center gap-5 pb-5'>
                        <Icon icon="bi:github"    className='iconSize-footer' />
                        <Icon icon="mdi:linkedin" className='iconSize-footer' />
                        <Icon icon="tabler:mail"  className='iconSize-footer' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}