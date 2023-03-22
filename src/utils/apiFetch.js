export default async function api(url, body) {
    const result = await fetch(url, {
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