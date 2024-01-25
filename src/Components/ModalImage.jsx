import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMeAction, putImgAction } from "../Redux/actions";
import { useEffect, useState } from "react";

const ModalImage = (props) => {
	const userProfile = useSelector((state) => state.me.meData);
	const maledettoId = userProfile._id;
	console.log(userProfile._id);
	const dispatch = useDispatch();
	const [userImg, setUserImg] = useState({ image: "" });

	useEffect(() => {
		console.log(userImg);
	}, [userImg]);

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
						<Form.Control
							type="file"
							size="lg"
							onChange={(e) => {
								setUserImg(e.target.files[0]);
							}}
						/>
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
						dispatch(putImgAction(userImg, maledettoId));
						setTimeout(() => {
							dispatch(getMeAction("me"));
							console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
						}, 5000);
						props.setChangeImage(false);
					}}
				>
					Upload photo
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalImage;
