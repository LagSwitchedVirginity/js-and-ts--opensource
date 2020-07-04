let r = {
    "Terry": {
        "Had": {
            "A": [
                "Gun",
                "Car",
                "Dog",
                "Daughter",
                "Son",
                "Wife",
                "Husband",
                "Apartment",
                "House",
                "Bike",
                "Starbucks",
                "Energy drink",
            ]
        }
    }
}
function randomItemFromNestedArray(obj) {
    let cur = obj, key = "";
    while (isNaN(parseInt(key)) && (Array.isArray(cur) === false || typeof cur === "object")) {
        let keys = Object.keys(cur);
        key = keys[keys.length * Math.random() << 0];
        cur = cur[key]
    }
    return cur;
}
for (let i = 0; i < 10; i++) {
    console.log(randomItemFromNestedArray(r));
}