import CONST from "../constants.js";

async function verify(token) {
    const result = await fetch(CONST.API.VERIFY, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({
            token: token
        })
    });
    
    result.data = await result.json();
    return result;
}

export default verify;

