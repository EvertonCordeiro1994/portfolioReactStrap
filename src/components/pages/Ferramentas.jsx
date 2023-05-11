import '../style/global.css'
import { Icon } from '@iconify/react'
import { Container, Col } from 'reactstrap'


export default function Ferramentas() {
    return (
        <Container className='container-size'>
            <Col xs={12} md={16} className="d-flex justify-content-center">
                <div className='text-center'>
                    <h1>Minhas ferramentas </h1>
                    <p>Aqui estão as linguagens e softwares que eu domino</p>

                    <div className='d-flex-column justify-content-center '>
                        <div className='d-flex justify-content-center gap-5 '>
                            <Icon icon="skill-icons:html" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:css" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:javascript" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:react-dark" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:bootstrap" style={{fontSize:'150'}}/>
                        </div>
                        <div className='d-flex justify-content-center gap-5 pt-5'>
                            <Icon icon="skill-icons:git" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:github-dark" style={{fontSize:'150'}}/>
                            <Icon icon="skill-icons:vscode-dark" style={{fontSize:'150'}}/>

                        </div>
                    </div>
                </div>


            </Col>
        </Container>
    )
}