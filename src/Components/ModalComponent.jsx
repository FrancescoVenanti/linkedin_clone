import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { token } from "../token";

function ModalComponent(props) {
    console.log(props);
    const user = useSelector((state) => state.me.meData);
    const experienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${
        props.experience && props.experience._id
    }`;
    const startYear = 1960;
    const endYear = 2023;
    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
    const [startingTime, setStartingTime] = useState({ year: "", month: "" });
    const [endingTime, setEndingTime] = useState({ year: "", month: "" });

    const [stillWorking, setStillWorking] = useState(true);

    const [newExperience, setNewExperience] = useState({
        role: props.experience ? props.experience.role : "",
        company: props.experience ? props.experience.company : "",
        startDate: "",
        endDate: "",
        description: props.experience ? props.experience.description : "",
        area: props.experience ? props.experience.area : "",
    });

    const postNewExperience = async () => {
        try {
            const resp = await fetch(experienceEndpoint, {
                method: props.experience ? "PUT" : "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    mode: "no-cors",
                },
                body: JSON.stringify(newExperience),
            });

            if (resp.ok) {
                if (props.experience) {
                    console.log("Modifica Effettuata correttamente");
                    props.getExperiences();
                } else {
                    props.handleSetExperience();
                }
            } else {
                console.error("Errore durante la richiesta POST:", resp.statusText);
            }
        } catch (error) {
            console.error("Errore durante la richiesta POST:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewExperience();
        props.handleClose();
    };
    useEffect(() => {
        const startingTimeString = startingTime.year.toString() + "-" + startingTime.month.toString() + "-01";

        setNewExperience({
            ...newExperience,
            startDate: startingTimeString,
        });
    }, [startingTime]);
    useEffect(() => {
        const endingTimeString = endingTime.year.toString() + "-" + endingTime.month.toString() + "-01";
        setNewExperience({
            ...newExperience,
            endDate: endingTimeString,
        });
    }, [endingTime]);

    useEffect(() => {
        console.log(newExperience);
    }, [newExperience]);

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.experience ? "Change Experience" : "Add Experience"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={newExperience.role}
                                type="text"
                                placeholder="example Retail Sales Manager"
                                required
                                onChange={(e) =>
                                    setNewExperience({
                                        ...newExperience,
                                        role: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                value={newExperience.company}
                                type="text"
                                placeholder="Example Microsoft"
                                required
                                onChange={(e) =>
                                    setNewExperience({
                                        ...newExperience,
                                        company: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                value={newExperience.area}
                                type="text"
                                placeholder="Example London, UK"
                                onChange={(e) =>
                                    setNewExperience({
                                        ...newExperience,
                                        area: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                value={newExperience.description}
                                as="textarea"
                                placeholder="write something"
                                onChange={(e) =>
                                    setNewExperience({
                                        ...newExperience,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check aria-label="I am currently working in this role">
                                <Form.Check.Input type="checkbox" onChange={() => setStillWorking(!stillWorking)} />
                                <Form.Check.Label>I am currently working in this role</Form.Check.Label>
                            </Form.Check>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="start"
                            required
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                        >
                            <Form.Label>Starting date</Form.Label>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Select
                                        aria-label="month"
                                        onChange={(e) => {
                                            setStartingTime({ ...startingTime, month: e.target.value });
                                        }}
                                    >
                                        <option>Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Select
                                        aria-label="year"
                                        onChange={(e) => {
                                            setStartingTime({ ...startingTime, year: e.target.value });
                                        }}
                                    >
                                        <option>Year</option>
                                        {years.map((year, index) => (
                                            <option key={index} value={year}>
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
                                        <Form.Select
                                            aria-label="month"
                                            onChange={(e) => {
                                                setEndingTime({ ...endingTime, month: e.target.value });
                                            }}
                                        >
                                            <option>Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Select
                                            aria-label="year"
                                            onChange={(e) => {
                                                setEndingTime({ ...endingTime, year: e.target.value });
                                            }}
                                        >
                                            <option>Year</option>
                                            {years.map((year, index) => (
                                                <option key={index} value={year}>
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
                    <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
                        Post experience
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;
