import { token } from "../../token";

export const GET_USERS = "GET_USERS";
export const GET_ME = "GET_ME";

export const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";

export const getUsersAction = (type) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(endpoint, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            if (resp.ok) {
                let result = await resp.json();
                console.log(result);
                dispatch({
                    type: type,
                    payload: result,
                });
            } else {
                throw new Error("failed to fetch");
            }
        } catch (err) {
            console.log(err);
        }
    };
};
