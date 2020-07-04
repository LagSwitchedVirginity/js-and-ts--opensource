function randomItemFromNestedArray(obj) {
    let cur = obj, key = "";
    while (isNaN(parseInt(key)) && (Array.isArray(cur) === false || typeof cur === "object")) {
        let keys = Object.keys(cur);
        key = keys[keys.length * Math.random() << 0];
        cur = cur[key]
    }
    return cur;
}