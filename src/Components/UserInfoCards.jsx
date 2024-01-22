import { EyeFill } from "react-bootstrap-icons";

const UserInfoCards = (props) => {
	return (
		<div className="bg-white rounded-3 overflow-hidden mt-3 p-3 px-4">
			<h4>{props.title}</h4>
			{props.private && (
				<>
					<EyeFill /> <span>Private to you</span>
				</>
			)}
			{props.children}
		</div>
	);
};
export default UserInfoCards;
