import { token } from "../../token";

export const GET_USERS = "GET_USERS";

export const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";

export const getUsersAction = () => {
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
                    type: GET_USERS,
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
