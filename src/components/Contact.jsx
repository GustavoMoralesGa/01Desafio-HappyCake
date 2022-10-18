import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container className='text-center'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add your Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>¿How i can help?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="submit">
          Subir
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;