function isPalindrome(string) {
    let is=true;
    if(string.length===1)return is;
    for (let i = 0 ,j=string.length-1; i <string.length/2 ; i++,j--) {
        if(string.charAt(i) !== string.charAt(j)){
            is=false;
        }
    }
    return is;
}
console.log(`Task 3: ${isPalindrome("a")}`);