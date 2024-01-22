import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./Components/NavBar";
import UserHero from "./Components/UserHero";
import { Row, Col, Container } from "react-bootstrap";
import EditProfile from "./Components/EditProfile";

import UserInfoCards from "./Components/UserInfoCards";
import Footer from "./Components/Footer";

import UserInfoPage from "./Components/UserInfoPage";

function App() {
	return (
		<div className="bg-secondary">
			<NavBar />
			<Container className="px-0">
				<Row>
					<Col xs={12} md={7} lg={9}>
						<UserHero />
						<UserInfoPage />
					</Col>
					<Col className="d-none d-md-block" xs={5} lg={3}>
						<EditProfile />
					</Col>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
