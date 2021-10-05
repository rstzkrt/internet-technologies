function longestWord(string) {
    return string.split(' ').sort(function(a, b) { return b.length - a.length; })[0];
}
console.log(longestWord("asdddd asdf asddf asdfggg"));