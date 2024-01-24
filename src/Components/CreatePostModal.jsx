import { Modal, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { token } from "../token";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PUT_POST, deleteAndPutAction, getPostsAction } from "../Redux/actions";

const CreatePostModal = (props) => {
	{
		props.post && console.log(props.post._id);
	}
	const actualUser = useSelector((state) => state.me.meData);
	const [createdPost, setCreatedPost] = useState(props.post ? props.post : "");

	const dispatch = useDispatch();

	const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

	const createPost = async () => {
		try {
			let resp = await fetch(postsEndpoint, {
				method: "POST",
				headers: {
					Authorization: `bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(createdPost),
			});
			if (resp.ok) {
				console.log("Post Effettuato");
				dispatch(getPostsAction());
			} else {
				console.log("Failed to Post");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const putPost = async () => {
		try {
			let resp = await fetch(postsEndpoint + props.post._id, {
				method: "PUT",
				headers: {
					Authorization: `bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(createdPost),
			});
			if (resp.ok) {
				console.log("Post Effettuato");
				dispatch(getPostsAction());
			} else {
				console.log("Failed to Post");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Modal
			show={props.show}
			onHide={() => {
				props.setShow(false);
			}}
		>
			<Modal.Header closeButton>
				{actualUser && (
					<div className="d-flex align-items-center">
						<img width={48} className="rounded-circle me-2" alt="user" src={actualUser.image} />
						<div>
							<p className="fw-bold mb-0">
								{actualUser.name} {actualUser.surname}
							</p>
						</div>
					</div>
				)}
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Control
							placeholder="What do you want to talk about?"
							as="textarea"
							value={createdPost.text}
							rows={5}
							onChange={(e) =>
								setCreatedPost({
									...createdPost,
									text: e.target.value,
								})
							}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => {
						props.setShow(false);
					}}
				>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						if (props.text) {
							putPost();
						} else {
							createPost();
						}
						props.setShow(false);
					}}
				>
					Post
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default CreatePostModal;
