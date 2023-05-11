import '../style/global.css'
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Col,
    Container,
    Row

} from 'reactstrap'

export default function Example(args) {

    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-center" md={{ offset: 3, size: 6 }} sm="12">
                        <Navbar dark expand fixed='top' container='fluid' {...args}>
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
    )
}

