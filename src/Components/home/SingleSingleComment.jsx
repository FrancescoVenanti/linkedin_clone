import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilFill, Trash2Fill } from "react-bootstrap-icons";

const SingleSingleComment = (props) => {
    const actualUser = useSelector((state) => state.me.meData);
    const [changedComment, setChangedComment] = useState(props.comment);
    const [showPutComment, setShowPutComment] = useState(false);

    const matchingUser = props.allTheUsers.find((user) => {
        console.log("Comparing:", props.comment.author, user.email);
        if (props.comment.author === user.email) {
            return props.comment.author === user.email;
        } else {
            return props.comment.author === user.username;
        }
    });
    console.log(matchingUser);

    return (
        <div className="mt-3 d-flex align-items-start">
            <img
                src={
                    matchingUser
                        ? matchingUser.image
                        : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                }
                className="rounded-circle me-2"
                width={40}
                height={40}
                alt=""
            />
            <div className="bg-comments px-3 py-2 rounded-3 d-flex">
                <div className="text-wrapping">
                    <p className="fw-bold m-0">
                        {matchingUser ? matchingUser.name + " " + matchingUser.surname : "Nome Cognome"}
                    </p>
                    {!showPutComment && <p className="m-0">{props.comment.comment}</p>}

                    {showPutComment && (
                        <Form
                            className="flex-grow-1"
                            onSubmit={(e) => {
                                e.preventDefault();
                                props.postComment("PUT", props.comment._id, changedComment);
                                setShowPutComment(false);
                            }}
                        >
                            <Form.Control
                                type="text"
                                value={changedComment.comment}
                                placeholder="Add a comment"
                                className="rounded-pill mr-sm-2"
                                onChange={(e) => {
                                    setChangedComment({
                                        ...changedComment,
                                        comment: e.target.value,
                                    });
                                }}
                            />
                        </Form>
                    )}
                </div>
                <div>
                    {actualUser.email === props.comment.author && (
                        <>
                            <Button
                                variant="outline-warning"
                                className="ms-5 border-0"
                                onClick={() => setShowPutComment(!showPutComment)}
                            >
                                {" "}
                                <PencilFill />{" "}
                            </Button>
                            <Button
                                variant="outline-danger"
                                className="ms-2 border-0"
                                onClick={() => props.postComment("DELETE", props.comment._id)}
                            >
                                <Trash2Fill />
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default SingleSingleComment;
