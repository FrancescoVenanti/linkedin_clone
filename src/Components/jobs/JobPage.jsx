import { Row, Col } from "react-bootstrap";
import JobLeft from "./JobLeft";

import AllTheJobs from "./AllTheJobs";

const JobPage = () => {
    return (
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={3}>
                <JobLeft />
            </Col>
            <Col xs={12} md={9} lg={5}>
                <AllTheJobs />
            </Col>
            <Col className="d-none d-lg-block" lg={4}>
                {/* <JobRight /> */}
            </Col>
        </Row>
    );
};

export default JobPage;
