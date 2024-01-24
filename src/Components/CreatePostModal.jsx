import { Modal, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { token } from "../token";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../Redux/actions";

const CreatePostModal = (props) => {
    const actualUser = useSelector((state) => state.me.meData);
    const [createdPost, setCreatedPost] = useState(null);
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
                        <img width={48} className="rounded-circle me-2" src={actualUser.image} />
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
                            rows={5}
                            onChange={(e) => setCreatedPost({ text: e.target.value })}
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
                        createPost();
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
