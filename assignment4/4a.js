function factorialWithRecursion(num){
    if (num === 0)
        return 1;
    else
        return(num * factorialWithRecursion(num-1));
}
function factorialIteration(num) {
    if(num===0)return 1;
    for (let i = num-1; i > 0; --i) {
        num*=i;
    }
    return num;
}
console.log(`Task 1: ${factorialIteration(5)}`);
console.log(`Task 1: ${factorialWithRecursion(5)}`);

