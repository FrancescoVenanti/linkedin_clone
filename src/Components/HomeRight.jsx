import { Button } from "react-bootstrap";
import { InfoSquareFill, Plus } from "react-bootstrap-icons";

const HomeRight = () => {
    return (
        <div className="bg-white rounded-3 border border-2">
            <div>
                <p>Add to your feed</p>
                <InfoSquareFill/>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <p>Name Group</p>
                    <p>Company • (Hospitality)</p>
                    <Button className="d-flex align-items-center hover-gray text-secodary" variant="none">
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default HomeRight;
