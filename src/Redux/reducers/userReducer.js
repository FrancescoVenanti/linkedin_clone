import { GET_USERS } from "../actions";

const initialState = {
    data: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
