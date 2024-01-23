import { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import {
    Linkedin,
    HouseDoorFill,
    PeopleFill,
    BriefcaseFill,
    ChatDotsFill,
    BellFill,
    PersonCircle,
    Grid3x3GapFill,
} from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { getMeAction } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.me.meData);

    useEffect(() => {
        dispatch(getMeAction("me"));
    }, []);

    return (
        <Navbar className="bg-white sticky-top">
            <Container className="justify-content-start align-items-center p-0">
                <Navbar.Brand href="#home">
                    <NavLink to={"/"}>
                        <Linkedin className="text-primary fs-2" />
                    </NavLink>
                </Navbar.Brand>

                {/* to do search icon */}
                <Form>
                    <Form.Control type="text" placeholder="Search" className="d-none d-lg-block mr-sm-2" />
                </Form>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link className="d-flex flex-column align-items-center me-3" href="#home">
                        <HouseDoorFill className="fs-4" />
                        <span className="d-none d-lg-inline navbar-text-small">Home</span>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column align-items-center me-3" href="#home">
                        <PeopleFill className="fs-4" />
                        <span className="d-none d-lg-inline navbar-text-small">My Network</span>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column align-items-center me-3" href="#home">
                        <BriefcaseFill className="fs-4" />
                        <span className="d-none d-lg-inline navbar-text-small">Jobs</span>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column align-items-center me-3" href="#home">
                        <ChatDotsFill className="fs-4" />
                        <span className="d-none d-lg-inline navbar-text-small">Messaging</span>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column align-items-center me-3" href="#home">
                        <BellFill className="fs-4" />
                        <span className="d-none d-lg-inline navbar-text-small">Notification</span>
                    </Nav.Link>
                    {/* ToDo aggiungere i dropdown di linkedin */}
                    {userProfile && (
                        <div className="d-none d-lg-flex flex-column align-items-center me-3 p-2">
                            <img src={userProfile.image} alt="Image Profile" width={26} className="rounded-circle" />

                            <NavDropdown className="navbar-text-small" title="me" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <NavLink className="nav-link" to={`/${userProfile.name}-${userProfile.surname}`}>
                                        <div className="d-flex align-items-start">
                                            <img className="rounded-circle me-2" src={userProfile.image} width={48} />
                                            <div>
                                                <p className="fw-bold mb-0">
                                                    {userProfile.name} {userProfile.surname}
                                                </p>
                                                <p>{userProfile.title}</p>
                                            </div>
                                        </div>
                                        <Button variant="outline-primary" className="p-0 rounded-pill w-100">
                                            {" "}
                                            Show Profile{" "}
                                        </Button>
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    )}
                    {/* ToDo aggiungere offCanvas di linkedin */}
                    <div className="d-none d-lg-flex flex-column align-items-center me-3  p-2 ps-3 border-start">
                        <Grid3x3GapFill className="fs-4" />
                        <NavDropdown
                            className="d-none d-lg-block navbar-text-small"
                            title="For business"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default NavBar;
