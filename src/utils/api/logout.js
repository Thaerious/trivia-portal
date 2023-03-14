import CONST from "../constants.js";

export default async function logout() {
    const result = await fetch(CONST.API.LOGOUT, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
    });

    result.data = await result.json();
    return result;
};