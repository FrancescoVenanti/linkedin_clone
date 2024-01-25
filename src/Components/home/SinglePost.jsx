import { Button } from "react-bootstrap";
import {
	HandThumbsUp,
	ChatText,
	Repeat,
	SendFill,
	Plus,
	GlobeAmericas,
	Pencil,
	Trash2Fill,
} from "react-bootstrap-icons";
import CreatePostModal from "./CreatePostModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../../Redux/actions";
import { token } from "../../token";

const SinglePost = (props) => {
	const dispatch = useDispatch();
	const actualUser = useSelector((state) => state.me.meData);

	const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

	const [show, setShow] = useState(false);

	const deletePost = async (postId) => {
		try {
			let resp = await fetch(postsEndpoint + postId, {
				method: "DELETE",
				headers: {
					Authorization: `bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			if (resp.ok) {
				console.log("Post eliminato");
				dispatch(getPostsAction());
			} else {
				console.log("Failed to delete");
			}
		} catch (err) {
			console.log(err);
		}
	};

	function formatData(data) {
		let giorno = data.getDate();
		let mese = data.getMonth() + 1;
		let anno = data.getFullYear();

		giorno = giorno < 10 ? "0" + giorno : giorno;
		mese = mese < 10 ? "0" + mese : mese;

		return giorno + "-" + mese + "-" + anno;
	}

	function calcolaDifferenzaTempo(dataDiRiferimento) {
		const dataCorrente = new Date();

		const differenzaInMillisecondi = dataCorrente - dataDiRiferimento;

		const differenzaInSec = Math.floor(differenzaInMillisecondi / 1000);

		const differenzaInGiorni = Math.floor(differenzaInMillisecondi / (1000 * 60 * 60 * 24));

		if (differenzaInGiorni === 0) {
			const differenzaInOre = Math.floor((differenzaInMillisecondi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

			const differenzaInMinuti = Math.floor((differenzaInMillisecondi % (1000 * 60 * 60)) / (1000 * 60));

			if (differenzaInOre > 0) {
				return differenzaInOre + "h ago";
			} else if (differenzaInMinuti > 0) {
				return differenzaInMinuti + "m ago";
			} else {
				return differenzaInSec + "s ago";
			}
		} else {
			return formatData(dataDiRiferimento);
		}
	}

	const dataDiRiferimento = new Date(props.post.createdAt);
	const postDate = calcolaDifferenzaTempo(dataDiRiferimento);

	return (
		<div className="bg-white rounded-3 border border-2 p-2 px-3 mt-2">
			<div className="d-flex align-items-center overflow-hidden">
				<img
					src={props.post.user.image}
					width={52}
					height={52}
					className="rounded-circle object-fit-cover"
					alt="user"
				/>
				<div className="flex-grow-1 ms-2">
					<p className="fw-bold mb-0">
						{props.post.user.name} {props.post.user.surname}
					</p>
					<span className="d-flex align-items-center">
						{postDate} <GlobeAmericas className="ms-1" />
					</span>
				</div>
				{props.post.username === actualUser.username ? (
					<div className="d-flex align-items-center">
						<Button className="me-1" variant="warning">
							<Pencil onClick={() => setShow(true)} />
						</Button>
						{show === true && (
							<CreatePostModal show={show} setShow={setShow} text={props.post.text} post={props.post} />
						)}
						<Button variant="danger">
							<Trash2Fill
								className="text-black"
								onClick={() => {
									deletePost(props.post._id);
								}}
							/>
						</Button>
					</div>
				) : (
					<Button className="d-flex align-items-center hover-primary" variant="none">
						<Plus />
						<span>Follow</span>
					</Button>
				)}
			</div>
			<div className="mt-2 text-justify border-bottom pb-3">
				<p>{props.post.text}</p>
				{props.post.image && (
					<div className="justify-content-center d-flex">
						<img src={props.post.image} alt="image" className="mw-100 rounded-3 " />
					</div>
				)}
			</div>
			<div className="d-flex justify-content-center pt-2">
				<Button variant="none" className="hover-gray d-flex align-items-center">
					<HandThumbsUp className="me-1" />
					<span>Like</span>
				</Button>
				<Button variant="none" className="hover-gray d-flex align-items-center">
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
		</div>
	);
};
export default SinglePost;
