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
                <Col>
                    <div className="text-center">
                        <h1>Projetos</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Nisi, eligendi. Magnam repudiandae blanditiis voluptate modi
                            molestias asperiores rerum corrupti numquam, ipsum odio possimus
                            ducimus eligendi quidem corporis iure dolorem dolore?
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className=" mb-10">
                <Col className="d-flex justify-content-center mb-4">
                    <Card style= {{ width: '18rem' }} >
                        <img alt="Sample" src="https://raw.githubusercontent.com/EvertonCordeiro1994/portfolioReactStrap/main/src/components/img/calc.png" />
                        <CardBody>
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
                    <Card style={{ width: '18rem' }}>
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
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
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
                    <Card style={{ width: '18rem' }}>
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
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
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