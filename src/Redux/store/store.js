import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import meReducer from "../reducers/meReducer";

const rootReducer = combineReducers({
    users: userReducer,
    me: meReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
