import { BookmarkFill, Plus, Save, Save2Fill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const HomeLeft = () => {
	const actualUser = useSelector((state) => state.me.meData);
	return (
		<>
			<div className="bg-white rounded-3 border border-2 overflow-hidden">
				<div className="user-backgroud position-relative mb-5" style={{ height: "56px" }}>
					<img
						className="rounded-circle object-fit-cover"
						id="UserImageHome"
						src={actualUser.image}
						width={72}
						height={72}
					/>
				</div>
				<div className="p-2 text-center border-bottom ">
					<p className="mb-0">
						{actualUser.name} {actualUser.surname}
					</p>
					<p className="mb-2">{actualUser.title}</p>
				</div>
				<div className="border-bottom p-2">
					<p className="text-black-50 mb-0">Collegamenti</p>
					<p className="mb-0 fw-bold">Collegamenti</p>
				</div>
				<div className="d-flex align-items-center p-2">
					<BookmarkFill />
					<p className="mb-0 fw-bold ms-2">Elementi salvati</p>
				</div>
			</div>

			<div className="bg-white rounded-3 border border-2 overflow-hidden mt-1">
				<div className="p-2">
					<a href="#" className="text-decoration-none">
						Gruppi
					</a>
				</div>
				<div className="d-flex justify-content-between p-2">
					<a href="#" className="text-decoration-none">
						Eventi
					</a>
					<Plus />
				</div>
				<div className="p-2 border-bottom">
					<a href="#" className="text-decoration-none">
						Hashtag seguiti
					</a>
				</div>
				<div className="text-center p-2">
					<a href="#" className="fw-medium text-black-50 text-decoration-none">
						Scopri di più
					</a>
				</div>
			</div>
		</>
	);
};
export default HomeLeft;
