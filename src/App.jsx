import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./Components/NavBar";
import UserHero from "./Components/UserHero";
import { Row, Col, Container } from "react-bootstrap";
import EditProfile from "./Components/EditProfile";
import UserInfoCards from "./Components/UserInfoCards";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="bg-secondary">
			<NavBar />
			<Container className="px-0">
				<Row>
					<Col xs={12} md={7} lg={9}>
						<UserHero />
						<UserInfoCards title="Analytics" private={true}>
							<Row>
								<Col xs={3} className="d-flex"></Col>
								<Col xs={3}></Col>
							</Row>
						</UserInfoCards>
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
