import { Button } from "react-bootstrap";
import { ArrowRight, InfoSquareFill, Plus } from "react-bootstrap-icons";

const HomeRight = () => {
    return (
        <div className="bg-white rounded-3 border border-2 py-2 px-4">
            <div className="d-flex align-items-center p-2">
                <p className="mb-0 me-auto">Add to your feed</p>
                <InfoSquareFill />
            </div>
            <div className="d-flex mb-2">
                <img
                    className="rounded-circle me-4"
                    src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                    alt="logo azienda"
                    width={48}
                    height={48}
                />
                <div>
                    <p className="mb-0 fw-bold">EPICODE</p>
                    <p className="mb-0 text-secondary">Company</p>
                    <Button
                        className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1"
                        variant="none"
                    >
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
            <div className="d-flex mb-2 ">
                <img
                    className="rounded-circle me-4"
                    src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
                    alt="logo azienda"
                    width={48}
                    height={48}
                />
                <div>
                    <p className="mb-0 fw-bold">Linkedin</p>
                    <p className="mb-0 text-secondary">Company • (Hospitality)</p>
                    <Button
                        className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1"
                        variant="none"
                    >
                        <Plus />
                        <span>Follow</span>
                    </Button>
                </div>
            </div>
            <div className="d-flex mb-2">
                <img
                    className="rounded-circle me-4"
                    height={48}
                    width={48}
                    src="https://degvoice.it/wp-content/uploads/2016/03/Google_-G-_Logo.svg_-500x432.png"
                    alt="logo azienda"
                />
                <div>
                    <p className="mb-0 fw-bold">Google</p>
                    <p className="mb-0 text-secondary">Company</p>
                    <Button
                        className="d-flex align-items-center hover-gray text-secodary border border-2 border-secondary rounded-pill my-1"
                        variant="none"
                    >
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
