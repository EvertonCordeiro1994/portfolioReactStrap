import '../style/global.css'
import ListaXP from '../layout/ListaXp'
import {
    Container,
    Row,
    Col
} from 'reactstrap'


export default function Sobre() {
    return (
        <Container className='container-size'>
            <Col xs='12' md='12' className="d-flex justify-content-center align-items-center mb-10">
                <div >
                    <h2 className="text-center" >Sobre mim</h2>
                    <p>
                        Sou um desenvolvedor frontend em busca de meu primeiro emprego na área. Estou animado para compartilhar com vocês minhas habilidades, conhecimentos e experiências em desenvolvimento web.
                        Venho me dedicando a aprimorar minhas habilidades nessa área, participando de cursos on-line.
                    </p>
                    <h3>Minhas habilidades em desenvolvimento web incluem:</h3>
                    <ul>
                        <li>
                            Conhecimento em HTML, CSS e JavaScript
                        </li>
                        <li>
                            Experiência nos frameworks React e Bootstrap
                        </li>
                        <li>
                            Familiaridade com a ferramenta de versionamento Git
                        </li>
                        <li>
                            Habilidade em criação e manutenção de sites responsivos e amigáveis ao usuário
                        </li>
                    </ul>
                    <p>
                        Além disso, sou uma pessoa altamente motivada, comprometida e focada em resultados. Adoro trabalhar em equipe, compartilhar conhecimentos e buscar soluções inovadoras para desafios complexos.
                    </p>
                </div>
            </Col>
        </Container>
    )
}