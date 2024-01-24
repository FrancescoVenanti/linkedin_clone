import { GET_ME, PUT_IMG } from "../actions";

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
		case PUT_IMG:
			return {
				...state,
				meData: {
					...state.meData,
					image: action.payload, // Assuming action.payload contains the new image data
				},
			};
		default:
			return state;
	}
};

export default meReducer;
