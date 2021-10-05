function isPrime(num) {
    return ((num % 2)!==0 || (num % 3)!==0) && num!==1;
}
console.log(isPrime(13))