import '../style/global.css'
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button
} from 'reactstrap';

export default function Formulario() {

  return (
    <>
      <Form className='wid' action="https://formsubmit.co/0c1ff3ca19afe42b60837e90c051fcda" method="POST">
        <FormGroup floating>
          <Input
            id="exampleName"
            name="name"
            placeholder="Digite seu nome"
            type="text"
            required
          />
          <Label for="exampleName">
            Nome
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Digite seu email"
            type="email"
            required
          />
          <Label  for="exampleEmail">
            Email
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Deixe aqui a sua mensgaem
          </Label>
          <Input
            
            id="exampleText"
            name="text"
            type="textarea"
          />
        </FormGroup>

        <Button type="submit">
          Enviar
        </Button>
      </Form>
    </>
  )
}

