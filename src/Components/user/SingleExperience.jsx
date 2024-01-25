import { Button } from "react-bootstrap";
import { BuildingFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { token } from "../../token";

const SingleExperience = (props) => {
	const user = useSelector((state) => state.me.meData);

	const experienceEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`;

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => {
		setShowModal(false);
	};

	const deleteExperience = async (experienceId) => {
		try {
			let resp = await fetch(experienceEndpoint + `/${experienceId}`, {
				method: "DELETE",
				headers: {
					Authorization: `bearer ${token}`,
				},
			});
			if (resp.ok) {
				console.log("DELETE request succesful");
				props.getExperiences();
			} else {
				throw new Error("Failed to Delete");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div key={props.experience._id} className="d-flex border-bottom mb-2">
			<BuildingFill width={50} height={50} />
			<div className="ms-2">
				<p className="fw-bold m-0">{props.experience.company}</p>
				<p>{props.experience.description}</p>
				<p>
					Start: {props.experience.startDate.slice(0, 7)}{" "}
					{props.experience.endDate !== "2001-01-01T00:00:00.000Z" &&
						" - end: " + props.experience.endDate.slice(0, 7)}
				</p>
			</div>
			<div className="ms-auto">
				<Button onClick={() => deleteExperience(props.experience._id)}>
					<Trash3Fill />
				</Button>
				<Button onClick={() => setShowModal(true)}>
					<PencilFill />
				</Button>
				{showModal && (
					<ModalComponent
						experience={props.experience}
						show={showModal}
						handleClose={handleClose}
						getExperiences={props.getExperiences}
					/>
				)}
			</div>
		</div>
	);
};
export default SingleExperience;
