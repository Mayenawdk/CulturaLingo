import React from "react";
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { LOGIN_USER } from "../../utils/mutations";
import {useMutation, useQuery} from '@apollo/client';
import { useState } from 'react';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: ''});
    const [login, {error}] = useMutation(LOGIN_USER);

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
        });
      };

    return(
        <Container>
            <Form controlId="loginform" onSubmit={handleFormSubmit}>
            <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group> */}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )

};

export default Login;