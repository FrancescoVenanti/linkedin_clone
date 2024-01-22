import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./Components/NavBar";
import UserHero from "./Components/UserHero";
import { Row, Col, Container } from "react-bootstrap";

function App() {
	return (
		<div className="bg-secondary">
			<NavBar />
			<Container>
				<Row>
					<Col xs={9}>
						<UserHero />
					</Col>
					<Col xs={3}>
						<p>prova</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
