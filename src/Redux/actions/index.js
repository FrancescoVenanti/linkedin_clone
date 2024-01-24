import { token } from "../../token";

export const GET_USERS = "GET_USERS";
export const GET_ME = "GET_ME";
export const PUT_IMG = "PUT_IMG";
export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const PUT_POST = "PUT_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const PUT_POST_SUCCESS = "PUT_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const PUT_POST_FAILURE = "PUT_POST_FAILURE";

export const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
export const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

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

/* export const deleteAndPutAction = (type, postId, postBody) => {
    return async () => {
        try {
            let resp = await fetch(postsEndpoint + postId, {
                method: type === DELETE_POST ? "DELETE" : "PUT",
                headers: {
                    Authorization: `bearer ${token}`,
                    mode: "no-cors",
                    "Content-Type": "application/json",
                },
                body: type === DELETE_POST ? undefined : JSON.stringify(postBody),
            });
            if (resp.ok) {
                if (type === DELETE_POST) {
                    console.log("Post Eliminato");
                } else if (type === PUT_POST) {
                    console.log("Post Modificato");
                } else {
                    console.log("Ci sarà qualche errore strano...");
                }
            } else {
                throw new Error("MAH CHISSA ALLORA");
            }
        } catch (err) {
            console.log(err);
        }
    };
}; */

export const deleteAndPutAction = (type, postId, postBody) => {
    return async (dispatch) => {
        try {
            let resp = await fetch(postsEndpoint + postId, {
                method: type === DELETE_POST ? "DELETE" : "PUT",
                headers: {
                    Authorization: `bearer ${token}`,
                    mode: "no-cors",
                },
                body: JSON.stringify(postBody),
            });

            if (resp.ok) {
                if (type === DELETE_POST) {
                    dispatch({
                        type: DELETE_POST_SUCCESS,
                        payload: { postId },
                    });
                } else if (type === PUT_POST) {
                    // Includi i dati dell'oggetto postBody nel payload, se necessario
                    dispatch({
                        type: PUT_POST_SUCCESS,
                        payload: { postId, updatedPost: postBody },
                    });
                } else {
                    console.log("Ci sarà qualche errore strano...");
                }
            } else {
                throw new Error("MAH CHISSA ALLORA");
            }
        } catch (err) {
            dispatch({
                type: type === DELETE_POST ? DELETE_POST_FAILURE : PUT_POST_FAILURE,
                payload: { error: err.message },
            });
        }
    };
};

/* export const putImgAction = (query, user) => {
	return async (dispatch) => {
		try {
			const resp = await fetch(endpoint + query, {
				method: "PUT",
				headers: {
					Authorization: `bearer ${token}`,
					mode: "no-cors",
				},
				body: JSON.stringify(user),
			});
			if (resp.ok) {
				let result = await resp.json();
				console.log("Modifica Effettuata correttamente");
				dispatch({
					type: PUT_IMG,
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
 */

export const putImgAction = (user) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            // Append non-file data to formData
            Object.keys(user).forEach((key) => {
                if (key !== "image") {
                    formData.append(key, user[key]);
                }
            });

            // Append image file to formData
            formData.append("image", user.image);

            const resp = await fetch(endpoint, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    // Remove mode: "no-cors" unless necessary for a specific reason
                    // ...
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
