import { Button } from "react-bootstrap";
import { EyeFill, ArrowRight, Pen, PenFill, Plus } from "react-bootstrap-icons";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

const UserInfoCards = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modifica = true;

    return (
        <div className="bg-white rounded-3 overflow-hidden mt-3 pt-3 px-4 border border-2">
            <div className="d-flex justify-content-between">
                <h4 className="mb-0">{props.title}</h4>
                {props.side === "button" && (
                    <div>
                        <Button className="me-3 rounded-pill" variant="outline-primary">
                            Create a post
                        </Button>
                        <PenFill width={24} height={24} />
                    </div>
                )}
                {props.side === "plus" && (
                    <div>
                        <Button className="me-3 rounded-pill" variant="none" onClick={handleShow}>
                            <Plus width={32} height={32} />
                        </Button>
                        {show && (
                            <ModalComponent
                                show={show}
                                handleClose={handleClose}
                                handleSetExperience={props.handleSetExperience}
                            />
                        )}
                        <PenFill width={24} height={24} />
                    </div>
                )}
            </div>

            {props.private && (
                <>
                    <EyeFill /> <span>Private to you</span>
                </>
            )}
            {props.children}
            <div className="text-center border-top p-2">
                <a href="" className="text-black text-decoration-none">
                    <span>Show all {props.title} </span>
                    <ArrowRight />
                </a>
            </div>
        </div>
    );
};
export default UserInfoCards;
