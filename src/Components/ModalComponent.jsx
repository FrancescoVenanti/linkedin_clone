import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
	const startYear = 2024;
	const endYear = 1924;
	const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

	const [stillWorking, setStillWorking] = useState(true);

	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Experience</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="title">
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" placeholder="example Retail Sales Manager" required />
					</Form.Group>

					<Form.Group className="mb-3" controlId="company">
						<Form.Label>Company Name</Form.Label>
						<Form.Control type="text" placeholder="Example Microsoft" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="location">
						<Form.Label>Location</Form.Label>
						<Form.Control type="text" placeholder="Example London, UK" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="description">
						<Form.Label>Description</Form.Label>
						<Form.Control as="textarea" placeholder="write something" />
					</Form.Group>
					<Form.Group>
						<Form.Check aria-label="I am currently working in this role">
							<Form.Check.Input type="checkbox" onChange={() => setStillWorking(!stillWorking)} />
							<Form.Check.Label>I am currently working in this role</Form.Check.Label>
						</Form.Check>
					</Form.Group>
					<Form.Group className="mb-3" controlId="start" required>
						<Form.Label>Starting date</Form.Label>
						<Row>
							<Col xs={12} md={6}>
								<Form.Select aria-label="month">
									<option>Month</option>
									<option value="1">January</option>
									<option value="2">February</option>
									<option value="3">March</option>
									<option value="4">April</option>
									<option value="5">May</option>
									<option value="6">June</option>
									<option value="7">July</option>
									<option value="8">August</option>
									<option value="9">September</option>
									<option value="10">October</option>
									<option value="11">November</option>
									<option value="12">December</option>
								</Form.Select>
							</Col>
							<Col xs={12} md={6}>
								<Form.Select aria-label="year">
									<option>Year</option>
									{years.map((year, index) => (
										<option key={index} value={index + 1}>
											{year}
										</option>
									))}
								</Form.Select>
							</Col>
						</Row>
					</Form.Group>
					{stillWorking && (
						<Form.Group className="mb-3" controlId="start" required>
							<Form.Label>Ending date</Form.Label>
							<Row>
								<Col xs={12} md={6}>
									<Form.Select aria-label="month">
										<option>Month</option>
										<option value="1">January</option>
										<option value="2">February</option>
										<option value="3">March</option>
										<option value="4">April</option>
										<option value="5">May</option>
										<option value="6">June</option>
										<option value="7">July</option>
										<option value="8">August</option>
										<option value="9">September</option>
										<option value="10">October</option>
										<option value="11">November</option>
										<option value="12">December</option>
									</Form.Select>
								</Col>
								<Col xs={12} md={6}>
									<Form.Select aria-label="year">
										<option>Year</option>
										{years.map((year, index) => (
											<option key={index} value={index + 1}>
												{year}
											</option>
										))}
									</Form.Select>
								</Col>
							</Row>
						</Form.Group>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.handleClose()}>
					Close
				</Button>
				<Button variant="primary" onClick={() => props.handleClose()}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalComponent;
