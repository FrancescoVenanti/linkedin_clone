import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenComment } from "../../tokenComments";
import { Form } from "react-bootstrap";
import { PencilFill, Trash2Fill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import SingleSingleComment from "./SingleSingleComment";

const SingleComment = (props) => {
    const actualUser = useSelector((state) => state.me.meData);
    const allTheUsers = props.allTheUsers;

    const [comment, setComment] = useState({
        comment: "",
        rate: 1,
        elementId: props.postId,
    });

    /* let endpoint = "https://striveschool-api.herokuapp.com/api/comments/"; */

    const postComment = async (method, commentId, comment) => {
        let endpoint;

        switch (method) {
            case "POST":
                endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
                break;
            case "DELETE":
                endpoint = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
                break;
            case "PUT":
                endpoint = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
                break;
            default:
                return endpoint;
        }

        try {
            let resp = await fetch(endpoint, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${tokenComment}`,
                },
                body: JSON.stringify(comment),
            });
            if (resp.ok) {
                props.getComments();
                if (method === "POST") {
                    console.log("commento postato");
                } else if (method === "PUT") {
                    console.log("commento Modificato");
                } else {
                    console.log("Commento Eliminato");
                }
            } else {
                throw new Error("Failed to get data");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment("POST", "", comment);

        setComment({ ...comment, comment: "" });
    };
    return (
        <div className="mt-3">
            <div className="d-flex align-items-center border-bottom pb-3">
                <img
                    src={actualUser.image}
                    width={40}
                    height={40}
                    className="rounded-circle object-fit-cover me-2"
                    alt="user"
                />
                <Form className="flex-grow-1" onSubmit={(e) => handleSubmit(e)}>
                    <Form.Control
                        type="text"
                        value={comment.comment}
                        placeholder="Add a comment"
                        className="rounded-pill mr-sm-2"
                        onChange={(e) => {
                            setComment({
                                ...comment,
                                comment: e.target.value,
                            });
                        }}
                    />
                </Form>
            </div>
            {props.allComments &&
                props.allComments.map((comment) => {
                    if (comment.elementId === props.postId) {
                        return (
                            <SingleSingleComment
                                key={comment._id}
                                allTheUsers={props.allTheUsers}
                                comment={comment}
                                postComment={postComment}
                            />
                        );
                    } else return null;
                })}
        </div>
    );
};
export default SingleComment;
