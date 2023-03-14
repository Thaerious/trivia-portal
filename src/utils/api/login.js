import CONST from "../constants.js";

export default async function login(body) {
    const result = await fetch(CONST.API.LOGIN, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(body)
    });

    result.data = await result.json();
    return result;
}