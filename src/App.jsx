import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./Components/NavBar";
import UserHero from "./Components/UserHero";
import { Row, Col, Container } from "react-bootstrap";
import EditProfile from "./Components/EditProfile";

import UserInfoCards from "./Components/UserInfoCards";
import Footer from "./Components/Footer";

import UserInfoPage from "./Components/UserInfoPage";
import OtherProfiles from "./Components/OtherProfiles";

function App() {
    return (
        <div className="bg-linkedin">
            <NavBar />
            <Container className="px-0">
                <Row className="mb-5">
                    <Col xs={12} md={7} lg={9}>
                        <UserHero />
                        <UserInfoPage />
                    </Col>
                    <Col className="d-none d-md-block" xs={5} lg={3}>
                        <EditProfile />
                        <OtherProfiles slice1={0} slice2={10} title="People also viewed" />
                        <OtherProfiles slice1={30} slice2={40} title="People you mayknow" />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}

export default App;
