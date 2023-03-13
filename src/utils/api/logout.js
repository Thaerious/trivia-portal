import CONST from "../constants.js";

async function logout() {
    return await fetch(CONST.API.LOGOUT, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
    });
}

export default {
    result: async function () {
        return await logout();
    },
    body: async function () {
        const result = await logout();
        return await result.json();
    }
};