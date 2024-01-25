import { DropdownButton, Dropdown, Link } from "react-bootstrap";

const JobRight = () => {
    return (
        <div className="mt-3 footer-fs d-flex flex-wrap justify-content-center ">
            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                About
            </a>
            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                Accessibility
            </a>
            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                Help Center
            </a>

            <p className=" text-black-50 me-3  mb-2">Privacy & Terms</p>
            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                Ad Choices
            </a>

            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                Advertising
            </a>
            <p className="text-black-50 me-3  mb-2">Business Services</p>

            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                Get the LinkedIn app
            </a>
            <a className="text-decoration-none text-black-50 me-3 mb-2" href="">
                More
            </a>

            <div className="d-flex align-items-center mt-4">
                <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" width={56} height={14} />
                <p className="mb-0 ms-2">LinkedIn Corporation &copy; 2024</p>
            </div>
        </div>
    );
};
export default JobRight;
