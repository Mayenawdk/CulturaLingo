import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';
import "./ProfileBlock.css";
import { GET_USER } from "../../utils/query";
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const ProfileBlock = () => {
    const [name, setName] = useState('');

    const user = {
        img: { picture: "/icons/koalaICON.jpg" },
        favefood: "Lobster",
        favecountry: "Spain",
        favecity: "Salem, MA"
    };

    // referenced 21 mern activity 19 client src components profile form index.jsx

    const [addUser, { error }] = useMutation(ADD_USER, {
        refetchQueries: [
            QUERY_USERS,
            'allUsers'
        ]
    });

    const handleAddUser = async (event) => {
        event.preventDefault();

        try {
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
                <Col>
                    <Card>
                        <Card.Title>Favorite Currency?</Card.Title>  
                        <Card.Body>{user.favefood}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Favorite Country?</Card.Title>  
                        <Card.Body>{user.favecountry}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Favorite City?</Card.Title>  
                        <Card.Body>{user.favecity}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Link to="/user">Edit Profile</Link>
                </Col>
            </Row>
        </Container>

    );
};


export default ProfileBlock;

