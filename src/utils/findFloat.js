


export default function findFloat(root, name) {
    console.log(root);
    console.log(root.$refs);
    let i = 0;
    for (const child in root.$refs) {
        console.log((i++) + ":" + child.$el.tagName);
    }
}