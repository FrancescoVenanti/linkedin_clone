import { type } from "@testing-library/user-event/dist/type";
import { token } from "../../token";

export const GET_USERS = "GET_USERS";
export const GET_ME = "GET_ME";
export const PUT_IMG = "PUT_IMG";
export const GET_POSTS = "GET_POSTS";
export const GET_JOBS = "GET_JOBS";

export const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
export const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";
export const jobsEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?limit=100";

export const getUsersAction = (type) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(endpoint, {
                headers: {
                    Authorization: `bearer ${token}`,
                    mode: "no-cors",
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

export const getMeAction = (query) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(endpoint + query, {
                headers: {
                    Authorization: `bearer ${token}`,
                    mode: "no-cors",
                },
            });
            if (resp.ok) {
                let result = await resp.json();
                console.log(result);
                dispatch({
                    type: GET_ME,
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

export const getPostsAction = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch(postsEndpoint, {
                headers: {
                    Authorization: `bearer ${token}`,
                    mode: "no-cors",
                },
            });
            if (resp.ok) {
                let result = await resp.json();
                console.log(result);
                dispatch({
                    type: GET_POSTS,
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

export const getJobsAction = () => {
    return async (dispatch) => {
        try {
            let resp = await fetch(jobsEndpoint, {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            if (resp.ok) {
                let { data } = await resp.json();
                console.log(data);
                dispatch({
                    type: GET_JOBS,
                    payload: data,
                });
            } else {
                throw new Error("failed to fetch");
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const putImgAction = (user) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();

            Object.keys(user).forEach((key) => {
                if (key !== "image") {
                    formData.append(key, user[key]);
                }
            });

            formData.append("image", user.image);

            const resp = await fetch(endpoint, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (resp.ok) {
                const result = await resp.json();
                console.log("Modifica Effettuata correttamente");
                dispatch({
                    type: PUT_IMG,
                    payload: result,
                });
            } else {
                throw new Error(`Failed to fetch. Status: ${resp.status}`);
            }
        } catch (err) {
            console.log(err);
        }
    };
};
