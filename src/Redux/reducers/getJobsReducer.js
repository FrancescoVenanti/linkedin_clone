import { GET_JOBS } from "../actions";

const initialState = {
    data: null,
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
export default jobsReducer;
