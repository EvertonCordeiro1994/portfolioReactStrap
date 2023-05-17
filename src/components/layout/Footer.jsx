import '../style/global.css'
import { Icon } from '@iconify/react'
import {
    Collapse,
    Col,
    Container,
    Navbar,
    Nav,
    NavItem,
    NavLink,
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
                <Col className="text-center">
                    <Navbar dark expand container='fluid' >
                        <Collapse navbar>
                            <Nav className="mx-auto" navbar>
                                <NavItem>
                                    <NavLink href="/Home/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Sobre/">Sobre</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Projetos/">Projetos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Contato/">Contato</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
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