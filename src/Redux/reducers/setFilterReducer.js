import { CLEAR_FILTER_STATE, SET_FILTER_CATEGORY, SET_FILTER_COMPANY } from "../actions";

const initialState = {
    string: "search",
};

const setFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_CATEGORY:
            return {
                ...state,
                string: state.string === "search" || state.string === "company" ? "category" : "search",
            };
        case SET_FILTER_COMPANY:
            return {
                ...state,
                string: state.string === "search" || state.string === "category" ? "company" : "search",
            };
        case CLEAR_FILTER_STATE:
            return initialState;
        default:
            return state;
    }
};
export default setFilterReducer;
