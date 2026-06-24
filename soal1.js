/** Soal 1 */
function reverseWords(w) {
    // let result = '';
    
    // for (let i = w.length - 1; i >= 0; i--) {
    //     result += w[i];
    // }
    
    // return result;
    
    return w.split('').reverse().join('');
}

console.log(reverseWords("hello"));
