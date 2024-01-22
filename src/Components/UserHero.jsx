import { Container, Row, Col, Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";

const UserHero = () => {
    return (
        <Container className="bg-white rounded-3 mt-4 overflow-hidden">
            <Row>
                <Col className="col-12 position-relative" id="user-backgroud">
                    <div style={{ height: "201px" }}>
                        <img
                            className="position-absolute rounded-circle"
                            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                            id="UserImg"
                        />
                    </div>
                </Col>
                <div className="px-4">
                    <Col xs={12}>
                        <div className="d-flex justify-content-end mt-3">
                            <Button className="rounded-circle">
                                <PencilFill />
                            </Button>
                        </div>
                    </Col>
                    <Col className="col-12">
                        <Row className="mt-2">
                            <Col className="col-8">
                                <h2>Name Surname</h2>
                                <p className="mb-0">Descrizione Utente</p>
                                <p className="mb-0">
                                    Location{" "}
                                    <span>
                                        |<a href="#">Contact infos</a>
                                    </span>
                                </p>
                            </Col>
                            <Col className="col-4">
                                <div className="d-flex align-items-center">
                                    <img src="#" />
                                    <span>Work, Education...</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-12">
                        <p className="mb-0">
                            <a href="#">Links</a>
                        </p>
                    </Col>
                    <Col className="col-12">
                        <div className="d-flex pt-3">
                            <Button className="rounded-pill me-2" variant="primary">
                                Open To
                            </Button>
                            <Button className="rounded-pill me-2" variant="outline-primary">
                                Add profile section
                            </Button>
                            <Button className="rounded-pill" variant="outline-secondary">
                                More
                            </Button>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};
export default UserHero;