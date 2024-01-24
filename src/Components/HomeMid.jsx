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
import SingleCardPost from "./SingleCardPost";

const HomeMid = () => {
    return (
        <>
            <CreatePost />
            <SingleCardPost />
        </>
    );
};
export default HomeMid;
