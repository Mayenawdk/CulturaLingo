import React from "react";
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { GET_USER } from "../../utils/query";
import {useQuery} from '@apollo/client';
import { useState } from 'react';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });

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
            <Form controlId="loginform">
            <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )

};

export default Login;