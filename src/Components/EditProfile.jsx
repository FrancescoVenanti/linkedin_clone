import { Col, Row, Container } from "react-bootstrap"
import { PencilFill } from "react-bootstrap-icons";

const EditProfile = () => {

    return(
        <Container>
            <Row>
                <Col xs={12} className="border border-bottom">
                    <div className="d-flex justify-content-between">
                        <p></p>
                        <Button className="rounded-circle">
                            <PencilFill />
                        </Button>
                    </div>    
                    <p></p>
                </Col>
                <Col xs={12}>
                    <div className="d-flex justify-content-between">
                        <p></p>
                        <Button className="rounded-circle">
                            <PencilFill />
                        </Button>
                    </div>    
                    <p></p>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProfile