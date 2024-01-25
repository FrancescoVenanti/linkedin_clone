import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import UserHero from "./Components/user/UserHero";
import { Row, Col, Container } from "react-bootstrap";
import EditProfile from "./Components/user/EditProfile";
import UserInfoCards from "./Components/user/UserInfoCards";
import Footer from "./Components/Footer";
import UserInfoPage from "./Components/user/UserInfoPage";
import OtherProfiles from "./Components/user/OtherProfiles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/user/ProfilePage";
import Home from "./Components/home/Home";
function App() {
	return (
		<div className="bg-linkedin">
			<BrowserRouter>
				<NavBar />
				<Container className="px-0">
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/:me"} element={<ProfilePage />} />
					</Routes>

					<Footer />
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
