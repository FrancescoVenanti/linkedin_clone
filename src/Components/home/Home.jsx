import { Row, Col } from "react-bootstrap";
import HomeLeft from "./HomeLeft";
import HomeMid from "./HomeMid";
import HomeRight from "../HomeRight";

const Home = () => {
	return (
		<Row className="justify-content-center mt-3">
			<Col xs={12} md={3}>
				<HomeLeft />
			</Col>
			<Col xs={12} md={9} lg={5}>
				<HomeMid />
			</Col>
			<Col className="d-none d-lg-block" lg={4}>
				<HomeRight />
			</Col>
		</Row>
	);
};
export default Home;
