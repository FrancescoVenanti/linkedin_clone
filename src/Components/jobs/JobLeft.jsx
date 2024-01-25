import {
    BookmarkFill,
    Check2,
    FileEarmark,
    FileEarmarkSpreadsheetFill,
    GearFill,
    ListUl,
    Youtube,
} from "react-bootstrap-icons";

const JobLeft = () => {
    return (
        <div className="bg-white rounded-3 border border-2 overflow-hidden ps-4 py-3 mt-2 ">
            <p className="mb-3 d-flex align-items-center">
                <BookmarkFill className="fs-5" />
                <span className="ms-2 fw-medium">My jobs</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <ListUl className="fs-5" />
                <span className="ms-2 fw-medium">Preferences</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <Check2 className="fs-5" />
                <span className="ms-2 fw-medium">Demostrate skills</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <FileEarmarkSpreadsheetFill className="fs-5" />
                <span className="ms-2 fw-medium">Interview prep</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <FileEarmark className="fs-5" />
                <span className="ms-2 fw-medium">Resume builder</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <Youtube />
                <span className="ms-2 fw-medium">Job seeker guidance</span>
            </p>

            <p className="mb-3 d-flex align-items-center">
                <GearFill />
                <span className="ms-2 fw-medium">Application settings</span>
            </p>
        </div>
    );
};
export default JobLeft;
