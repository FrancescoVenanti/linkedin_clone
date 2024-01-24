import { GET_POSTS } from "../actions";

const initialState = {
    data: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
