const m = new Map();
m.set("a", 3);
m.set("b", 2);
m.set("a", 4);
console.log(m);

console.log(m.get("a"));

console.log(m.has("a"));
console.log(m.has(4));

m.delete("a");
console.log(m);
console.log(m.size);

const str = "Hello world my name is Tim";
const freq = [];
for (const char1 of str) {
    let found = false;
    for (const [idx, pair] of freq.entries()) {
        const [key, value] = pair;
        if (key === char1) {
            freq[idx] = [char1, value + 1];
            found = true;
            break;
        }
    }
    if (!found) freq.push([char1, 1]);
}
console.log(freq);

const freq1 = new Map();
for (const char of str) {
    if (freq1.has(char)) {
        freq1.set(char, freq1.get(char) + 1);
    } else {
        freq1.set(char, 1);
    }
}

console.log(freq1);
console.log(freq1.get(" "));