export default async function api(url, body) {
    const result = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(body)
    });

    const res = {
        code: result.status,
        ...await result.json()
    };       

    console.log(res);
    return res;    
}