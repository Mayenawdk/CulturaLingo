import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./ProfileBlock.css";
import { GET_USER } from "../../utils/query";
import {useQuery} from '@apollo/client';

const ProfileBlock = () => {
    let {loading, data} = useQuery(GET_USER, {fetchPolicy: 'network-only'});

    if (loading){
        return <h2>LOADING...</h2>;
    }

    let {user} = data;

    // const user = {
    //     img: {picture: "../../public/icons/koalaICON.jpg"},
    //     favefood: "Lobster",
    //     favecountry: "Spain",
    //     favecity: "Salem, MA"
    // }
    // try {
    //     // recieve user info from database

    //     // set/adjust user data as needed
    // }
    // catch (err) {
    //     console.log(err);
    // }

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
        </Container>

    );
}

export default ProfileBlock;

