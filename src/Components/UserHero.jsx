import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import { endpoint } from "../Redux/actions";
import { token } from "../token";

const UserHero = () => {
    const [me, setMe] = useState(null);

    const getMe = async () => {
        try {
            let resp = await fetch(`${endpoint}me`, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            if (resp.ok) {
                let result = await resp.json();
                console.log("ME", result);
                setMe(result);
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMe();
    }, []);

    return (
        <Container className="bg-white rounded-3 mt-4 overflow-hidden border border-2">
            {me && (
                <Row className="pb-3">
                    <Col className="col-12 position-relative" id="user-backgroud">
                        <div style={{ height: "201px" }}>
                            <img className="position-absolute rounded-circle" src={me.image} id="UserImg" />
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
                                    <h2>
                                        {me.name} {me.surname}
                                    </h2>
                                    <p className="mb-0">{me.bio !== "" ? me.bio : me.title}</p>
                                    <p className="mb-0">
                                        {me.area}
                                        <span className="ms-2">
                                            <a href="#">Contact infos</a>
                                        </span>
                                    </p>
                                </Col>
                                <Col className="col-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            width={32}
                                            height={32}
                                            src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1714003200&v=beta&t=02cZOkAFfrcsqE3vMctwQcElNrMnInX4NwQFmaTF1M8"
                                        />
                                        <span>EPICODE</span>
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
                            <Carousel
                                className="mt-3 position-relative"
                                variant="dark"
                                indicators={false}
                                interval={null}
                            >
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
            )}
        </Container>
    );
};
export default UserHero;
