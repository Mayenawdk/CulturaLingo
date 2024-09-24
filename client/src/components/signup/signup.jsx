// import React from "react";
// import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
// import { GET_USER } from "../../utils/query";
// import {useQuery} from '@apollo/client';

import { Container } from "react-bootstrap";

const Signup = () => {
//     const [userFormData, setUserFormData] = useState({ email: '', password: '' });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUserFormData({ ...userFormData, [name]: value });
//       };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         // check if form has everything (as per react-bootstrap docs)
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         try {
//           const {data}  = await login({
//             variables: { input: { ...userFormData } },
//           });
//         } catch (err) {
//           console.error(err);
//           setShowAlert(true);
//         }

//         setUserFormData({
//           email: '',
//           password: '',
//         });
//       };

// {/* <Container>
// <Form controlId="loginform">
// <Form.Group>
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>
//     <Form.Group>
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Enter password" />
//     </Form.Group>
//     <Button variant="primary" type="submit">Submit</Button>
// </Form>
// </Container> */}

return (
  <Container>
    <Row>
      <Col>
        <form className='flex-row justify-center justify-space-between-md align-center' onSubmit={handleAddUser}
        >
          <div className='col-12 col-lg-9'>
            <input placeholder='Add your profile name...' value={name} className='form-input w-100' onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='col-12 col-lg-3'>
            <button className='btn btn-info btn-block py-3' type='submit'>
              Add Profile
            </button>
          </div>
          {error && (
            <div className='col-12 my-3 bg-danger text-white p-3'>
              Something went wrong...
            </div>
          )}

        </form>

      </Col>
    </Row>
  </Container>
)

};

export default Signup;

// const User = () => {
  
// }