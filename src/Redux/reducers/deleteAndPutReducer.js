import {
    DELETE_POST,
    PUT_POST,
    DELETE_POST_SUCCESS,
    PUT_POST_SUCCESS,
    DELETE_POST_FAILURE,
    PUT_POST_FAILURE,
} from "./types";

const initialState = {
    posts: [],
    error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload.postId),
                error: null,
            };
        case PUT_POST_SUCCESS:
            // Aggiornare la lista dei post con i dati aggiornati del post
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === action.payload.postId ? action.payload.updatedPost : post
                ),
                error: null,
            };
        case DELETE_POST_FAILURE:
        case PUT_POST_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default postsReducer;
