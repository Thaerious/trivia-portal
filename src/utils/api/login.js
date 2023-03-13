import CONST from "../constants.js";

async function login(body) {
    return await fetch(CONST.API.LOGIN, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(body)
    });
}

export default login;