import { Button } from "react-bootstrap";
import {
    HandThumbsUp,
    ChatText,
    Repeat,
    SendFill,
    Plus,
    GlobeAmericas,
    Pencil,
    Trash2Fill,
} from "react-bootstrap-icons";
import { token } from "../token";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsAction } from "../Redux/actions";

const SingleCardPost = () => {
    const posts = useSelector((state) => state.posts.data);
    const actualUser = useSelector((state) => state.me.meData);
    console.log(actualUser.username);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAction());
    }, []);

    return (
        <>
            {posts &&
                posts
                    .slice()
                    .reverse()
                    .map((post) => {
                        return (
                            <div key={post._id} className="bg-white rounded-3 border border-2 p-2 px-3 mt-2">
                                <div className="d-flex align-items-center overflow-hidden">
                                    <img
                                        src="https://media.istockphoto.com/id/1451587807/it/vettoriale/vettore-dellicona-del-profilo-utente-avatar-o-icona-della-persona-immagine-del-profilo.jpg?s=612x612&w=0&k=20&c=Sxv9sa3SzosipjGALM8P6dvJ7dQA4AWjtAsD2Aczdwc="
                                        width={52}
                                        className="rounded-circle"
                                    />
                                    <div className="flex-grow-1 ms-2">
                                        <p className="fw-bold mb-0">{post.username}</p>
                                        <span className="d-flex align-items-center">
                                            {post.createdAt.slice(0, 10)} <GlobeAmericas className="ms-1" />
                                        </span>
                                    </div>
                                    {post.username === actualUser.username ? (
                                        <div className="d-flex align-items-center">
                                            <Button className="me-1" variant="warning">
                                                <Pencil />
                                            </Button>{" "}
                                            <Button variant="danger">
                                                <Trash2Fill className="text-black" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button className="d-flex align-items-center hover-primary" variant="none">
                                            <Plus />
                                            <span>Follow</span>
                                        </Button>
                                    )}
                                </div>
                                <div className="mt-2 text-justify border-bottom">
                                    <p>{post.text}</p>
                                </div>
                                <div className="d-flex justify-content-center pt-2">
                                    <Button variant="none" className="hover-gray d-flex align-items-center">
                                        <HandThumbsUp className="me-1" />
                                        <span>Like</span>
                                    </Button>
                                    <Button variant="none" className="hover-gray d-flex align-items-center">
                                        <ChatText className="me-1" />
                                        <span>Comment</span>
                                    </Button>
                                    <Button variant="none" className="hover-gray d-flex align-items-center">
                                        <Repeat className="me-1" />
                                        <span>Repost</span>
                                    </Button>
                                    <Button variant="none" className="hover-gray d-flex align-items-center">
                                        <SendFill className="me-1" />
                                        <span>Send</span>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
        </>
    );
};
export default SingleCardPost;
