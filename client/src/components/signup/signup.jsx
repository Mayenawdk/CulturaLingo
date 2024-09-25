import React from "react";
import { Container, Col, Image, Form, Button } from 'react-bootstrap';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '', image: '' });

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
  const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        const {data}  = await login({
          variables: { input: { ...userFormData } },
        });
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
  
      setUserFormData({
        email: '',
        password: '',
      });
    };

  return(
      <Container>
          <Form controlId="signupform">
          <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Col>
                <Image src={user.img.picture} roundedCircle />
            </Col>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
      </Container>
  )

};

export default Signup;