import { Icon } from '@iconify/react'
import '../style/global.css'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'


export default function Home() {
    return (
        <Container className='container-size d-flex justify-content-center align-items-center'>
            <div className="d-flex justify-content-between gap-5">
                <div>
                    <h1 className="title-home">
                        Olá ! Meu nome é
                        <br />
                        <span className='gradient'>Éverton Cordeiro</span>
                        <br />
                        e sou um
                        <br />
                        <span className='gradient'>Dev Front-end</span>
                    </h1>
                    <div className='d-flex justify-content-center gap-5'>
                        <Icon icon="bi:github"    style={{fontSize: '50'}} />
                        <Icon icon="mdi:linkedin" style={{fontSize: '50'}} />
                        <Icon icon="tabler:mail"  style={{fontSize: '50'}} />

                    </div>
                </div>

                <div>
                    <img
                        alt="memoji Olá"
                        src="../src/components/img/ola.png"
                    />
                </div>
            </div>

        </Container>
    )
}
