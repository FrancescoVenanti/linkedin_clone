import { Col, Row, Container, Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";

const EditProfile = () => {
	return (
		<Container className="bg-white mt-4 rounded-3 overflow-hidden border border-2">
			<Row>
				<Col xs={12} className="border border-bottom">
					<div className="d-flex justify-content-between py-3 align-items-start">
						<h5>Profile language</h5>

						<Button variant="outline-secondary" className="rounded-circle">
							<PencilFill />
						</Button>
					</div>
					<p>English</p>
				</Col>
				<Col xs={12}>
					<div className="d-flex justify-content-between py-3 align-items-start">
						<h5>Public profile & URL</h5>
						<Button variant="outline-secondary" className="rounded-circle">
							<PencilFill />
						</Button>
					</div>
					<p>www.linkedin.com/...</p>
				</Col>
			</Row>
		</Container>
	);
};

export default EditProfile;
