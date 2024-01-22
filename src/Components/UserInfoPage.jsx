import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import UserInfoCards from "./UserInfoCards";
import {
	PersonFill,
	Search,
	Radioactive,
	BuildingFill,
	ArrowUpCircleFill,
	Badge3dFill,
	Check,
	Check2,
} from "react-bootstrap-icons";

const UserInfoPage = () => {
	return (
		<>
			<UserInfoCards title="Analytics" private={true}>
				<Row className="mt-3">
					<Col xs={12} md={6} lg={3}>
						<div className="d-flex justify-content-start">
							<PersonFill width={24} height={24} />
							<div className="ms-2">
								<a href="" className="text-black fw-bold text-decoration-none">
									N. profile view
								</a>
								<p>Discover who's viewed your profile.</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<div className="d-flex justify-content-start">
							<Search width={20} height={20} />
							<div className="ms-2">
								<a href="" className="text-black fw-bold text-decoration-none">
									N. profile searched
								</a>
								<p>Discover how many time you appeared in a search result</p>
							</div>
						</div>
					</Col>
				</Row>
			</UserInfoCards>
			<UserInfoCards title="Resources" private={true}>
				<Row className="mt-3">
					<Col xs={12} className="d-flex">
						<div className="d-flex justify-content-start">
							<Radioactive width={20} height={20} />
							<div className="ms-2">
								<a href="" className="text-black fw-bold text-decoration-none">
									Creator mode
								</a>
								<p>Get discovered, showcase content on your profile, and get access to creator tools</p>
							</div>
						</div>
					</Col>
					<Col xs={12}>
						<div className="d-flex justify-content-start">
							<PersonFill width={20} height={20} />
							<div className="ms-2">
								<a href="" className="text-black fw-bold text-decoration-none">
									My Network
								</a>
								<p>See and manage your connections and interests.</p>
							</div>
						</div>
					</Col>
				</Row>
			</UserInfoCards>
			<UserInfoCards title="Activity" private={false} side="button">
				<p className="text-primary" style={{ marginBlockStart: "-10px" }}>
					N. Followers
				</p>
				<p className="fw-bold m-0">You haven't posted yet</p>
				<p>Post you share will be displayed here.</p>
			</UserInfoCards>
			<UserInfoCards title="Experience" private={false} side="plus">
				<div className="d-flex">
					<BuildingFill width={50} height={50} />
					<div className="ms-2">
						<p className="fw-bold m-0">Job</p>
						<p>Job description</p>
					</div>
				</div>
			</UserInfoCards>
			<UserInfoCards title="Skills" private={false} side="plus">
				<Row className="">
					<Col xs={12}>
						<div className="border-bottom pb-3">
							<p className="fw-bold">Html & CSS</p>
							<p>
								<ArrowUpCircleFill width={20} height={20} /> : EpiCode
							</p>
						</div>
						<div className=" py-3">
							<p className="fw-bold">3D something</p>
							<p>
								<Badge3dFill width={20} height={20} /> : 3D something
							</p>
						</div>
					</Col>
				</Row>
			</UserInfoCards>
			<UserInfoCards title="Interests" private={false}>
				<Tabs
					variant="underline"
					defaultActiveKey="home"
					transition={false}
					id="noanim-tab-example"
					className="mb-3 text-success"
				>
					<Tab eventKey="Companies" title="Companies">
						<Row>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=1714003200&v=beta&t=5vR0nSMkhcVFDA-0jZFOcc4cYZYlBj1ePL6JulyfOEQ"
									/>
									<div>
										<p className="fw-bold m-0">IBM </p>
										<p className="text-black-50 m-0">12612212 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D4E0BAQGTUswcRlgg9A/company-logo_100_100/0/1689352303687/accenture_logo?e=1714003200&v=beta&t=hj_8VI6t9aNQYEm-fY-mzQZxaYuC3s43fnqZydkr_8s"
									/>
									<div>
										<p className="fw-bold m-0">Accentur </p>
										<p className="text-black-50 m-0">12612212 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</Tab>
					<Tab eventKey="Newsletter" title="Newsletter">
						<Row>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=1714003200&v=beta&t=5vR0nSMkhcVFDA-0jZFOcc4cYZYlBj1ePL6JulyfOEQ"
									/>
									<div>
										<p className="fw-bold m-0">IBM </p>
										<p className="text-black-50 m-0">234342 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D4E0BAQGTUswcRlgg9A/company-logo_100_100/0/1689352303687/accenture_logo?e=1714003200&v=beta&t=hj_8VI6t9aNQYEm-fY-mzQZxaYuC3s43fnqZydkr_8s"
									/>
									<div>
										<p className="fw-bold m-0">Accentur </p>
										<p className="text-black-50 m-0">34554 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</Tab>
					<Tab eventKey="Education" title="Education">
						<Row>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=1714003200&v=beta&t=5vR0nSMkhcVFDA-0jZFOcc4cYZYlBj1ePL6JulyfOEQ"
									/>
									<div>
										<p className="fw-bold m-0">IBM </p>
										<p className="text-black-50 m-0">345435 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<div className="d-flex py-3">
									<img
										className="me-2"
										width={48}
										height={48}
										src="https://media.licdn.com/dms/image/D4E0BAQGTUswcRlgg9A/company-logo_100_100/0/1689352303687/accenture_logo?e=1714003200&v=beta&t=hj_8VI6t9aNQYEm-fY-mzQZxaYuC3s43fnqZydkr_8s"
									/>
									<div>
										<p className="fw-bold m-0">Accentur </p>
										<p className="text-black-50 m-0">67876 Followers</p>
										<Button className="rounded-pill mt-2" variant="outline-secondary">
											<Check2 />
											Followed
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</Tab>
				</Tabs>
			</UserInfoCards>
		</>
	);
};
export default UserInfoPage;
