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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/ProfilePage";

function App() {
    return (
        <div className="bg-linkedin">
            <BrowserRouter>
                <NavBar />
                <Container className="px-0">
                    <Routes>
                        <Route path={"/:me"} element={<ProfilePage />} />
                    </Routes>

                    <Footer />
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
