import { Row, Col, Button } from "react-bootstrap";
import { Calendar3, Image, JournalAlbum } from "react-bootstrap-icons";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="bg-white rounded-3 border border-2 p-2">
			<div className="d-flex align-items-center ">
				<img
					src="https://media.istockphoto.com/id/1451587807/it/vettoriale/vettore-dellicona-del-profilo-utente-avatar-o-icona-della-persona-immagine-del-profilo.jpg?s=612x612&w=0&k=20&c=Sxv9sa3SzosipjGALM8P6dvJ7dQA4AWjtAsD2Aczdwc="
					width={52}
					className="rounded-circle"
					alt="user"
				/>
				<div className="flex-grow-1">
					<Button
						className="rounded-pill text-start w-100 border border-secondary bg-body-tertiary text-black-50 fw-medium"
						variant="none"
						onClick={() => setShow(true)}
					>
						Start a post
					</Button>
					{show && <CreatePostModal show={show} setShow={setShow} />}
				</div>
				{/*  <Form className="flex-grow-1">
                    <Form.Control type="text" placeholder="Start a Post" className="rounded-pill mr-sm-2" />
                </Form> */}
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
	);
};
export default CreatePost;
