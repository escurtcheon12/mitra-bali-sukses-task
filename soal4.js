function sortManually(w) {
    let result = [];
    
    for (const i of w) {
        let idx = result.findIndex(char => char > i);
        
        if (idx === -1) {
            result.push(i);
        } else {
            result.splice(idx, 0, i);
        }
    }
    
    return result.join('');
}

function anagramMatches(w1, w2) {
    /* Cara 1 */
    const start = sortManually(w1);
    const end = sortManually(w2);

    /* Cara 2 */
    // const start = w1.split('').sort().join('');
    // const end = w2.split('').sort().join('');
    
    return start === end;
}

console.log(anagramMatches('hello', 'world'));
