import { Row, Col } from "react-bootstrap";
import UserHero from "./UserHero";
import UserInfoPage from "./UserInfoPage";
import EditProfile from "./EditProfile";
import OtherProfiles from "./OtherProfiles";

const ProfilePage = () => {
	return (
		<Row className="mb-5">
			<Col xs={12} md={7} lg={9}>
				<UserHero />
				<UserInfoPage />
			</Col>
			<Col className="d-none d-md-block" xs={5} lg={3}>
				<EditProfile />
				<OtherProfiles slice1={0} slice2={10} title="People also viewed" />
				<OtherProfiles slice1={30} slice2={40} title="People you mayknow" />
			</Col>
		</Row>
	);
};
export default ProfilePage;
