let blast = "webinsecure;34829sjdfnsj32984madsdkj"
let table = blast.split('');
let nouvo_blast = [];
for (let i = 0; i < table.length; i++) {
    if (table[i] == ";") {
        for (let j = table.indexOf(table[i+1]); j<(blast.length); j++) {
            nouvo_blast.push(table[j]);

        }
    }
}

console.log(`${(nouvo_blast.join(""))}`);