function sumAmount(n) {
    let result = 0;
    
    for (let i = 0; i < n.length; i++) {
        result += parseInt(n[i])
    }
    
    return result;
}

console.log(sumAmount('1234'));
