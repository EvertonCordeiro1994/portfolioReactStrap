import { Icon } from "@iconify/react"
import {
    Container,
    Col,
    Row,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink
} from "reactstrap"

export default function Projetos() {
    return (
        <Container>
            <Row>
                <Col  className="text-center mb-5 ">
                    <h1 className="gradient">Projetos</h1>
                    <p className="mb-5 ">
                        Aqui é onde eu compartilho alguns dos meus projetos mais empolgantes e recentes. Eu adoro desafios criativos e estou animado para mostrar a você o que tenho feito!
                    </p>
                </Col>
            </Row>
            <Row className=" mb-10">
                <Col className="d-flex justify-content-center mb-4">
                    <Card className="card" style= {{ width: '22rem' }} >
                        <img alt="Sample" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/calc.png" />
                        <CardBody className="Card-info">
                            <CardTitle tag="h5">
                                Calculadora Simples
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                <Icon icon='la:tools' /> HTML, CSS e JS
                            </CardSubtitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <CardLink href="https://github.com/EvertonCordeiro1994/calculadora-simples">
                                < Icon icon='ri:github-line' /> Repositório
                            </CardLink>
                            <CardLink href="https://calculadorasimples01.netlify.app/">
                                < Icon icon='material-symbols:deployed-code-outline-sharp' />  Deployed
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '22rem' }}>
                        <img alt="Sample" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/Landingpage.png" />
                        <CardBody>
                            <CardTitle tag="h5">
                                Landing page
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                <Icon icon='la:tools' /> HTML, CSS e JS
                            </CardSubtitle>
                            <CardText>
                                A landing page é uma página web projetada para promover um produto, serviço ou evento específico. Este projeto inclui uma landing page responsiva e estilizada usando apenas HTML e CSS puro. 
                            </CardText>
                            <CardLink href="https://github.com/EvertonCordeiro1994/ladingpageresponsiva">
                                < Icon icon='ri:github-line' /> Repositório
                            </CardLink>
                            <CardLink href="https://ladingpageresponsive.netlify.app/">
                                < Icon icon='material-symbols:deployed-code-outline-sharp' /> Depolyed
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '22rem' }}>
                        <img alt="Sample" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/to-do-list.png" />
                        <CardBody>
                            <CardTitle tag="h5">
                                To do list
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                <Icon icon='la:tools' /> REACT JS e CSS
                            </CardSubtitle>
                            <CardText>
                                O To Do List é um aplicativo que permite aos usuários gerenciar suas tarefas diárias. Este projeto utiliza o framework React.js para criar uma interface interativa e responsiva, permitindo que os usuários adicionem, removam e atualizem tarefas. O CSS é utilizado para estilizar o aplicativo e fornecer uma experiência agradável aos usuários.
                            </CardText>
                            <CardLink href="https://github.com/EvertonCordeiro1994/todolistreactjs">
                                < Icon icon='ri:github-line' /> Repositório
                            </CardLink>
                            <CardLink href="https://todolistreactjsporevertoncordeiro.netlify.app/">
                                < Icon icon='material-symbols:deployed-code-outline-sharp' />  Deployed
                            </CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}