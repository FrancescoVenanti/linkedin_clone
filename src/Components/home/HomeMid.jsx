import { Form, Row, Col, Button } from "react-bootstrap";
import {
	Image,
	Calendar3,
	JournalAlbum,
	Globe,
	GlobeAmericas,
	Plus,
	HandThumbsUp,
	ChatText,
	Repeat,
	SendFill,
} from "react-bootstrap-icons";
import CreatePost from "./CreatePost";
import AllTheCard from "./AllTheCard";

const HomeMid = () => {
	return (
		<>
			<CreatePost />
			<AllTheCard />
		</>
	);
};
export default HomeMid;
