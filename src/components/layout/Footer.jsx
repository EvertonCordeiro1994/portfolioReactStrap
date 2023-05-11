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
        <>
            <div className="horizontal-line"></div>
            <div>
                <Container>
                    <Row>
                        <Col className="text-center" md={{ offset: 3, size: 6 }} sm="12">
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
                </Container>
            </div>
            <div className='d-flex justify-content-center gap-5 pb-5'>
                <Icon icon="bi:github" />
                <Icon icon="mdi:linkedin" />
                <Icon icon="tabler:mail" />
            </div>
        </>
    )
}