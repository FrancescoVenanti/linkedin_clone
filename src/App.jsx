import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/user/ProfilePage";
import Home from "./Components/home/Home";
import JobPage from "./Components/jobs/JobPage";
function App() {
    return (
        <div className="bg-linkedin">
            <BrowserRouter>
                <NavBar />
                <Container className="px-0">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/:me"} element={<ProfilePage />} />
                        <Route path={"/jobs"} element={<JobPage />} />
                    </Routes>

                    <Footer />
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
