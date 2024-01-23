import { GET_ME } from "../actions";

const initialState = {
    meData: null,
};

const meReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {
                ...state,
                meData: action.payload,
            };
        default:
            return state;
    }
};

export default meReducer;
