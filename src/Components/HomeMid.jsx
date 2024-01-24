import { Form, Row, Col, Button } from "react-bootstrap";
import {
    Image,
    Calendar3,
    JournalAlbum,
    Globe,
    GlobeAmericas,
    Plus,
    HandThumbsUp,
    ChatText,
    Repeat,
    SendFill,
} from "react-bootstrap-icons";

const HomeMid = () => {
    return (
        <>
            <div className="bg-white rounded-3 border border-2 p-2">
                <div className="d-flex align-items-center ">
                    <img
                        src="https://media.istockphoto.com/id/1451587807/it/vettoriale/vettore-dellicona-del-profilo-utente-avatar-o-icona-della-persona-immagine-del-profilo.jpg?s=612x612&w=0&k=20&c=Sxv9sa3SzosipjGALM8P6dvJ7dQA4AWjtAsD2Aczdwc="
                        width={52}
                        className="rounded-circle"
                    />
                    <Form className="flex-grow-1">
                        <Form.Control type="text" placeholder="Start a Post" className="rounded-pill mr-sm-2" />
                    </Form>
                </div>
                <Row className="mt-2 px-3 align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Button variant="none" className="d-flex align-items-center hover-gray">
                            <Image className="text-primary" fontSize={20} />
                            <span className="ms-2 text-black-50">Media</span>
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="none" className="d-flex align-items-center hover-gray">
                            <Calendar3 className="text-warning" fontSize={20} />
                            <span className="ms-2 text-black-50">Event</span>
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="none" className="d-flex align-items-center hover-gray">
                            <JournalAlbum className="text-danger" fontSize={20} />
                            <span className="ms-2 text-black-50">Write Article</span>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="bg-white rounded-3 border border-2 p-2 px-3 mt-2">
                <div className="d-flex align-items-center overflow-hidden">
                    <img
                        src="https://media.istockphoto.com/id/1451587807/it/vettoriale/vettore-dellicona-del-profilo-utente-avatar-o-icona-della-persona-immagine-del-profilo.jpg?s=612x612&w=0&k=20&c=Sxv9sa3SzosipjGALM8P6dvJ7dQA4AWjtAsD2Aczdwc="
                        width={52}
                        className="rounded-circle"
                    />
                    <div className="flex-grow-1 ms-2">
                        <p className="fw-bold mb-0">Nome Cognome</p>
                        <span className="d-flex align-items-center">
                            Created at <GlobeAmericas className="ms-1" />
                        </span>
                    </div>
                    <Button className="d-flex align-items-center hover-primary" variant="none">
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
                <div className="mt-2 text-justify border-bottom">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nihil laboriosam delectus ab
                        esse, animi laborum eaque est quis debitis nam quisquam fugiat saepe, maxime illum impedit,
                        expedita error voluptate.
                    </p>
                </div>
                <div className="d-flex justify-content-center pt-2">
                    <Button variant="none" className="hover-gray d-flex align-items-center">
                        <HandThumbsUp className="me-1" />
                        <span>Like</span>
                    </Button>
                    <Button variant="none" className="hover-gray d-flex align-items-center">
                        <ChatText className="me-1" />
                        <span>Comment</span>
                    </Button>
                    <Button variant="none" className="hover-gray d-flex align-items-center">
                        <Repeat className="me-1" />
                        <span>Repost</span>
                    </Button>
                    <Button variant="none" className="hover-gray d-flex align-items-center">
                        <SendFill className="me-1" />
                        <span>Send</span>
                    </Button>
                </div>
            </div>
        </>
    );
};
export default HomeMid;
