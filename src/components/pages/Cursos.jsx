import '../style/global.css'
import ListaXP from '../layout/ListaXp'
import {
    Container,
    Col
} from 'reactstrap'


export default function Curso() {
    return (
        <Container >
            <Col className="d-flex justify-content-center mb-10 ">
                <div className='text-center'>
                    <h2 className="container-sobre-h2 gradient" >Cursos</h2>
                    <ListaXP
                        curso='React js'
                        duracao='40h'
                        local='Hora de codar'
                        data='jan - 2023'
                    />

                    <ListaXP
                        curso='HTML e CSS'
                        duracao='80h'
                        local='Curso em video'
                        data='out - 2022'
                    />

                    <ListaXP
                        curso='Javascript'
                        duracao='40h'
                        local='Curso em video'
                        data='set - 2022'
                    />
                </div>

            </Col>
        </Container>
    )
}