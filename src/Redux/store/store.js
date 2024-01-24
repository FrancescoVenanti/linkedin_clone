import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import meReducer from "../reducers/meReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	users: userReducer,
	me: meReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
	reducer: persistedReducer,
});
let persistor = persistStore(store);

export { store, persistor };

/* const store = configureStore({
    reducer: rootReducer,
}); */

/* export default store; */
