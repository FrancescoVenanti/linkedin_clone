import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_POST, deleteAndPutAction, getPostsAction } from "../Redux/actions";
import CreatePostModal from "./CreatePostModal";
import { token } from "../token";
import SinglePost from "./SinglePost";

const AllTheCard = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.data);
	const actualUser = useSelector((state) => state.me.meData);
	useEffect(() => {
		dispatch(getPostsAction());
	}, []);

	console.log(actualUser.username);

	/* const handleShow = (index) => {
		// Create a new array with the updated show state for the specified index
		return setShow((prevStates) => {
			const newStates = [...prevStates];
			newStates[index] = !newStates[index];
			return newStates;
		});
	}; */

	return (
		<>
			{posts &&
				posts
					.slice()
					.reverse()
					.map((post, index) => {
						return <SinglePost key={post._id} post={post} />;
					})}
		</>
	);
};
export default AllTheCard;
