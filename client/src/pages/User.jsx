import { useQuery } from "@apollo/client";
import ProfileBlock from "../components/profile-block/ProfileBlock";
import { QUERY_USERS } from "../utils/queries";
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';

const Users = () => {

    const { loading } = useQuery(QUERY_USERS);
    const imgs = [ //Replace with images pulled from database
        {
            picture: "/icons/BatIcon.jpg",
            id: 1
        },
        {
            picture: "/icons/BearIcon.jpg",
            id: 2
        },
        {
            picture: "/icons/BeeIcon.jpg",
            id: 3
        }
    ];
    const imgselect = imgs.map(i => {
        return <option value={i.id}><img src={i.picture} width="30" /></option>;
    });

    // const users = data?.users || [];

    return (
        <main>
            <div className="flex-row justify-center">
                {loading ? (
                    <div className="col-12 col-md-10 my-3">Loading...</div>
                ) : (
                    <div
                        className="col-12 col-md-10mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <Form>
                            <Form.Group>
                                <Form.Select>

                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Favorite Food</Form.Label>
                                <Form.Control type="text" id="favefood" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Favorite Country</Form.Label>
                                <Form.Control type="text" id="favecountry" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Favorite City</Form.Label>
                                <Form.Control type="text" id="favecity" />
                            </Form.Group>
                            <Button varient="primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                )}

            </div>
        </main>
    );

};

export default Users;