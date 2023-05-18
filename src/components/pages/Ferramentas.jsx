import '../style/global.css'
import { Icon } from '@iconify/react'
import { Container, Col } from 'reactstrap'


export default function Ferramentas() {
    return (
        <Container>
            <Col className="d-flex-colunm justify-content-center mb-10 text-center ">
                <h1 className='gradient'>Minhas ferramentas </h1>
                <p>Aqui estão as linguagens e softwares que eu domino</p>

                <div className='d-flex-column justify-content-center '>
                    <div className='d-flex justify-content-center gap-3'>
                        <Icon icon="skill-icons:html"        className='iconSize-tools' />
                        <Icon icon="skill-icons:css"         className='iconSize-tools' />
                        <Icon icon="skill-icons:javascript"  className='iconSize-tools' />
                        <Icon icon="skill-icons:react-dark"  className='iconSize-tools' />
                        <Icon icon="skill-icons:bootstrap"   className='iconSize-tools' />
                    </div>
                    <div className='d-flex justify-content-center gap-3 pt-3'>
                        <Icon icon="skill-icons:git"         className='iconSize-tools' />
                        <Icon icon="skill-icons:github-dark" className='iconSize-tools' />
                        <Icon icon="skill-icons:vscode-dark" className='iconSize-tools' />

                    </div>
                </div>
            </Col>
        </Container>
    )
}