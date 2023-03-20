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

    return {
        code: result.status,
        ...await result.json()
    };    
}