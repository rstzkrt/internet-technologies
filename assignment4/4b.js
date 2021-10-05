function fibonacciNth(nth) {
    let a = 0, b = 1, c, i;
    if( nth === 0) return 0;
    for(i = 2; i <= nth; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;

}
console.log(`Task 2: ${fibonacciNth(5)}`);