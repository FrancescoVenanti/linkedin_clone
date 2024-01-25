import { Row, Col, Button } from "react-bootstrap";
import JobLeft from "./jobs/JobLeft";
import AllTheJobs from "./jobs/AllTheJobs";
import JobRight from "./jobs/JobRight";
import { useDispatch } from "react-redux";
import setFilterReducer from "../Redux/reducers/setFilterReducer";
import { setFilterCategory, setFilterCompany } from "../Redux/actions";
import { useState } from "react";

const SearchPage = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(false);

    return (
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={3}>
                <JobLeft />
            </Col>
            <Col xs={12} md={9} lg={5}>
                <div className="bg-white rounded-3 border border-2 py-3 px-2 mt-2">
                    <div className="d-flex align-items-center">
                        <p className="fw-medium mb-0 me-2">Search by</p>
                        <Button
                            className="me-2 rounded-pill fw-medium"
                            variant={selected ? "dark" : "outline-dark"}
                            onClick={() => {
                                dispatch(setFilterCompany());
                                setSelected(!selected);
                                setSelectedCategory(false);
                            }}
                        >
                            Company
                        </Button>
                        <Button
                            className="me-2 rounded-pill fw-medium"
                            variant={selectedCategory ? "dark" : "outline-dark"}
                            onClick={() => {
                                dispatch(setFilterCategory());
                                setSelectedCategory(!selectedCategory);
                                setSelected(false);
                            }}
                        >
                            Category
                        </Button>
                    </div>
                </div>
                <AllTheJobs search={true} />
            </Col>
            <Col className="d-none d-lg-block" lg={4}>
                <JobRight />
            </Col>
        </Row>
    );
};
export default SearchPage;
