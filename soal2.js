function fizzBuzz(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push('Fizzbuzz');
        else if (i % 3 === 0) result.push('Fizz')
        else if (i % 5 === 0) result.push('Buzz')
        else result.push(i)
    }
    
    return result.join(', ');
}

console.log(fizzBuzz(100));
