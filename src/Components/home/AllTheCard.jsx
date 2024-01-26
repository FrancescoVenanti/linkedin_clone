import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_POST, deleteAndPutAction, getPostsAction } from "../../Redux/actions";
import CreatePostModal from "./CreatePostModal";
import { token } from "../../token";
import SinglePost from "./SinglePost";
import { tokenComment } from "../../tokenComments";

const AllTheCard = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.data);
	const actualUser = useSelector((state) => state.me.meData);
	useEffect(() => {
		dispatch(getPostsAction());
	}, []);

	const usersArray = posts.map((post) => post.user);

	const uniqueUsersSet = new Set();

	const allTheUsers = usersArray.filter((user) => {
		// Check if the user's email is not already in the set
		if (!uniqueUsersSet.has(user.email)) {
			// Add the email to the set to mark it as seen
			uniqueUsersSet.add(user.email);
			return true; // Include the user in the filtered array
		}
		return false; // Exclude the user from the filtered array
	});

	console.log("Aaaaaaaaaaaaaaaaaaa", allTheUsers);

	const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
	const [allComments, setAllComments] = useState(null);

	const getComments = async () => {
		try {
			let resp = await fetch(endpoint, {
				method: "GET",
				headers: {
					Authorization: `bearer ${tokenComment}`,
				},
			});
			if (resp.ok) {
				let data = await resp.json();
				setAllComments(data);
				console.log("data:", data);
			} else {
				throw new Error("Failed to get data");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getComments();
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
						return (
							<SinglePost
								key={post._id}
								post={post}
								allComments={allComments}
								allTheUsers={allTheUsers}
								getComments={getComments}
							/>
						);
					})}
		</>
	);
};
export default AllTheCard;
