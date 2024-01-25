import { Button } from "react-bootstrap";
import { ArrowRight, InfoSquareFill, Plus } from "react-bootstrap-icons";

const HomeRight = () => {
    return (
        <div className="bg-white rounded-3 border border-2">
            <div className="d-flex align-items-center p-2">
                <p className="mb-0 me-auto">Add to your feed</p>
                <InfoSquareFill/>
            </div>
            <div className="d-flex mb-2">
                <img className="rounded-circle" src="" alt="logo azienda" />
                <div>
                    <p className="mb-0 fw-bold">Name Group</p>
                    <p className="mb-0 text-secondary">Company • (Hospitality)</p>
                    <Button className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1" variant="none">
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
            <div className="d-flex mb-2">
                <img className="rounded-circle" src="" alt="logo azienda" />
                <div>
                    <p className="mb-0 fw-bold">Name Group</p>
                    <p className="mb-0 text-secondary">Company • (Hospitality)</p>
                    <Button className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1" variant="none">
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
            <div className="d-flex mb-2">
                <img className="rounded-circle" src="" alt="logo azienda" />
                <div>
                    <p className="mb-0 fw-bold">Name Group</p>
                    <p className="mb-0 text-secondary">Company • (Hospitality)</p>
                    <Button className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1" variant="none">
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
            <div className="border-top p-2">
				<a href="" className="text-black text-decoration-none hover-gray">
					<span className="me-1">View all reccomandations</span>
					<ArrowRight />
				</a>
			</div>
        </div>
    );
};
export default HomeRight;
