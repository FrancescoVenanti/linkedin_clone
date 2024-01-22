import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../Redux/actions";
import { Row, Col, Button, Container } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons/dist";

const OtherProfiles = (props) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users.data);

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);

    return (
        <>
            {users && (
                <Container>
                    <Row className="bg-white rounded-3 mt-3 border border-2">
                        <h4>{props.title}</h4>

                        {users.slice(props.slice1, props.slice2).map((user) => {
                            return (
                                <Col key={user._id} xs={12}>
                                    <div className="d-flex py-3 border-bottom">
                                        <img className="me-2 rounded-circle" width={48} height={48} src={user.image} />
                                        <div>
                                            <p className="fw-bold m-0">
                                                {user.name} {user.surname}
                                            </p>
                                            {user.title && <p className="m-0">{user.title}</p>}
                                            <Button variant="outline-secondary" className="rounded-pill mt-2">
                                                <PersonFill />
                                                <span>Connect</span>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            )}
        </>
    );
};
export default OtherProfiles;
