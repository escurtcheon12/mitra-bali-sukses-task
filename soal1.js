function reverseWords(w) {
    /* Cara 1 */
    // let result = '';
    
    // for (let i = w.length - 1; i >= 0; i--) {
    //     result += w[i];
    // }
    
    // return result;

    /* Cara 2 */
    return w.split('').reverse().join('');
}

console.log(reverseWords("hello"));
