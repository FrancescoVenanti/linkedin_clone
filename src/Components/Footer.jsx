import { Col, Dropdown, Row, Container } from "react-bootstrap"
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons"

const Footer = () => {

    return (
        <Container>
            <Row>
                <Col xs={2}>
                    <div>
                        <p className="mb-2 footer-fs" >About</p>
                        <p className="mb-2 footer-fs" >Community Guidelines</p>
                        <p className="mb-2 footer-fs" >Privacy & Terms</p>
                        <p className="mb-2 footer-fs" >Sales Solution</p>
                        <p className="mb-2 footer-fs" >Safety Center</p>
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
                        <p className="mb-2 footer-fs" >Accessibility</p>
                        <p className="mb-2 footer-fs" >Careers</p>
                        <p className="mb-2 footer-fs" >Ad Choices</p>
                        <p className="mb-2 footer-fs" >Mobile</p>
                    </div>
                </Col>
                <Col xs={2}>
                    <div>
                        <p className="mb-2 footer-fs" >Talent Solutions</p>
                        <p className="mb-2 footer-fs" >Marketing Solutions</p>
                        <p className="mb-2 footer-fs" >Advertising</p>
                        <p className="mb-2 footer-fs" >Small Business</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <div>
                        <Row>
                            <Col xs={2} className="pe-0">
                                <QuestionCircleFill className="fs-5"/>
                            </Col>
                            <Col xs={10} className="ps-0">
                                <p className="mb-0 footer-fs fw-bold">Questions?</p>
                                <p className="footer-fs" >Visit our Help Center.</p>
                            </Col>
                            <Col xs={2} className="pe-0">
                                <GearFill className="fs-5"/>
                            </Col>
                            <Col xs={10} className="ps-0">
                                <p className="mb-0 footer-fs fw-bold">Manage your account and privacy</p>
                                <p className="footer-fs" >Go to your Settings.</p>
                            </Col>
                            <Col xs={2} className="pe-0">
                                <ShieldShaded className="fs-5"/>
                            </Col>
                            <Col xs={10} className="ps-0">
                                <p className="mb-0 footer-fs fw-bold">Reccomendation transparency</p>
                                <p className="footer-fs" >Leran more about Reccommended Content. </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={3}>
                    <p className="footer-fs mb-0">Select Language</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0 w-100 text-start ps-1 border border-dark">
                            English (English)
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">English (English)</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12}>
                    <p className="footer-fs">LinkedIn Corporation &copy; 2024</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer