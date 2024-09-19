import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import "./ProfileBlock.css";

const ProfileBlock = () => {
    const user = {
        img: {picture: "../../public/icons/koalaICON.jpg"},
        favefood: "Lobster",
        favecountry: "Spain",
        favecity: "Salem, MA"
    }
    try {
        // recieve user info from database

        // set/adjust user data as needed
    }
    catch (err) {
        console.log(err);
    }

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

        // <div class="container">
        //     <div class="row">
        //         <div class="col-6" id="profilepic">
        //             {/* <Img src={user.img} /> */}
        //         </div>
        //         <div class="col-6" id="favefood">
        //             <textarea rows="4" className="form-control">{user.favefood}</textarea>
        //         </div>
        //     </div >
        //     <div class="row">
        //         <div class="col-6" id="favecountry">
        //             <textarea rows="4" className="form-control">{user.favecountry}</textarea>
        //         </div>
        //         <div class="col-6" id="favecity">
        //             <textarea rows="4" className="form-control">{user.favecity}</textarea>
        //         </div>
        //     </div>
        // </div >
    );
}

export default ProfileBlock;

