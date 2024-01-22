import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";

const UserHero = () => {
	return (
		<Container className="bg-white rounded-3 mt-4 overflow-hidden border border-2">
			<Row className="pb-3">
				<Col className="col-12 position-relative" id="user-backgroud">
					<div style={{ height: "201px" }}>
						<img
							className="position-absolute rounded-circle"
							src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
							id="UserImg"
						/>
					</div>
				</Col>
				<div className="px-4">
					<Col xs={12}>
						<div className="d-flex justify-content-end mt-3">
							<Button className="rounded-circle">
								<PencilFill />
							</Button>
						</div>
					</Col>
					<Col className="col-12">
						<Row className="mt-2">
							<Col className="col-8">
								<h2>Name Surname</h2>
								<p className="mb-0">Descrizione Utente</p>
								<p className="mb-0">
									Location{" "}
									<span>
										|<a href="#">Contact infos</a>
									</span>
								</p>
							</Col>
							<Col className="col-4">
								<div className="d-flex align-items-center">
									<img src="#" />
									<span>Work, Education...</span>
								</div>
							</Col>
						</Row>
					</Col>
					<Col className="col-12">
						<p className="mb-0">
							<a href="#">Links</a>
						</p>
					</Col>
					<Col className="col-12">
						<div className="d-flex pt-3">
							<Button className="rounded-pill me-2" variant="primary">
								Open To
							</Button>
							<Button className="rounded-pill me-2" variant="outline-primary">
								Add profile section
							</Button>
							<Button className="rounded-pill" variant="outline-secondary">
								More
							</Button>
						</div>
					</Col>
					<Col xs={12}>
						{/* toDo arrows position - carosello mobile*/}
						<Carousel className="mt-3 position-relative" variant="dark" indicators={false} interval={null}>
							<Carousel.Item>
								<Row>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
								</Row>
							</Carousel.Item>
							<Carousel.Item>
								<Row>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
									<Col xs={6}>
										<div className="border bg-white rounded p-2">
											<p className="fw-bold">
												Show recruiters you're open to work -
												<span className="fw-normal"> You control who sees this.</span>
											</p>
											<a href="" className="text-primary text-decoration-none fw-bold">
												Get started
											</a>
										</div>
									</Col>
								</Row>
							</Carousel.Item>
						</Carousel>
					</Col>
				</div>
			</Row>
		</Container>
	);
};
export default UserHero;
