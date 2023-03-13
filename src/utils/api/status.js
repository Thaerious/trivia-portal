import CONST from "../constants.js";

async function status() {
    return await fetch(CONST.API.STATUS, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
    });
}

export default {
    result: async function () {
        return await status();
    },
    body: async function () {
        const result = await status();
        return await result.json();
    }
};