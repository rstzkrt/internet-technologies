function sort(str) {
     return str.split('').sort((a, b) => a.localeCompare(b)).join('');
}
console.log(sort("resat"));
