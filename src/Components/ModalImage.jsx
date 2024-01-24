import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { putImgAction } from "../Redux/actions";

const ModalImage = (props) => {
	const userProfile = useSelector((state) => state.me.meData);
	const dispatch = useDispatch();
	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			// Dispatch an action to update the userProfile in the Redux store
			dispatch(putImgAction({ ...userProfile, image: file }));
		}
	};

	return (
		<Modal
			show={props.changeImage}
			onHide={() => {
				props.setChangeImage(false);
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>Add Photo</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Choose a photo</Form.Label>
						<Form.Control type="file" size="lg" onChange={handleFileChange} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => {
						props.setChangeImage(false);
					}}
				>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						dispatch(putImgAction(userProfile));
					}}
				>
					Upload photo
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalImage;
