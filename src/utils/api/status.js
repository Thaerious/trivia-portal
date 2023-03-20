import CONST from "../constants.js";

export default async function status() {
    const result = await fetch(CONST.API.STATUS, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
    });
    
    return {
        code: result.status,
        ...await result.json()
    };    
}