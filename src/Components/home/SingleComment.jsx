import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenComment } from "../../tokenComments";
import { Form } from "react-bootstrap";

const SingleComment = (props) => {
	const actualUser = useSelector((state) => state.me.meData);
	const allTheUsers = props.allTheUsers;
	const dispatch = useDispatch();
	const [comment, setComment] = useState({
		comment: "",
		rate: 1,
		elementId: props.postId,
	});

	const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";

	const postComment = async () => {
		try {
			let resp = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `bearer ${tokenComment}`,
				},
				body: JSON.stringify(comment),
			});
			if (resp.ok) {
				console.log("commento postato");
			} else {
				throw new Error("Failed to get data");
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postComment();
		props.getComments();
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
					console.log(comment);
					const matchingUser = allTheUsers.find((user) => user.email === comment.author);
					/* console.log(matchingUser); */

					return (
						comment.elementId === props.postId && (
							<div key={comment._id} className="mt-3 d-flex align-items-start">
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
								<div className="bg-comments px-3 py-2 rounded-3">
									<p className="fw-bold m-0">
										{/* {matchingUser ? matchingUser.fullName : "Nome Cognome"} */}nome
									</p>
									<p className="m-0">{comment.comment}</p>
								</div>
							</div>
						)
					);
				})}
		</div>
	);
};
export default SingleComment;
