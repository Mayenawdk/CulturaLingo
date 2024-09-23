import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';
import "./ProfileBlock.css";
import { GET_USER } from "../../utils/query";
import {useQuery} from '@apollo/client';

const ProfileBlock = () => {
    const [name, setName] = useState('');

    const user = {
        img: {picture: "/icons/koalaICON.jpg"},
        favefood: "Lobster",
        favecountry: "Spain",
        favecity: "Salem, MA"
    };

    // referenced 21 mern activity 19 client src components profile form index.jsx
    
    const [addUser, {error}] = useMutation(ADD_USER, {
        refetchQueries: [
            QUERY_USERS,
            'allUsers'
        ]
    });

    const handleAddUser = async (event) => {
        event.preventDefault();

    try 
    {
        await addUser({
            variables: { name },
        });

        setName('');

        // recieve user info from database

        // set/adjust user data as needed
    } catch (err) {
        console.log(err);
    }
};

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={user.img.picture} roundedCircle />
                </Col>
                <Card>
                    <Card.Body>{user.favefood}</Card.Body>
                </Card>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>{user.favecountry}</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>{user.favecity}</Card.Body>
                    </Card>
                </Col>
            </Row>

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
    
    );
};


export default ProfileBlock;

