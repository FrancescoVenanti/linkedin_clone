import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tokenComment } from "../../tokenComments";
import { useEffect, useState } from "react";
import { getPostsAction } from "../../Redux/actions";
import { ChatText, HandThumbsUp, Repeat, SendFill } from "react-bootstrap-icons";
import SingleComment from "./SingleComment";

const Comments = (props) => {
	const [showComment, setShowComment] = useState(false);

	return (
		<>
			<div className="d-flex justify-content-center pt-2">
				<Button variant="none" className="hover-gray d-flex align-items-center">
					<HandThumbsUp className="me-1" />
					<span>Like</span>
				</Button>
				<Button
					variant="none"
					className="hover-gray d-flex align-items-center"
					onClick={() => setShowComment(true)}
				>
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
			{showComment && (
				<SingleComment
					postId={props.postId}
					allComments={props.allComments}
					allTheUsers={props.allTheUsers}
					getComments={props.getComments}
				/>
			)}
		</>
	);
};
export default Comments;
