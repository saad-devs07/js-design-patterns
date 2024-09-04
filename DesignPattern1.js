// Design Pattern 1
pattern = "";

for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        pattern += j;
    }
    pattern += '\n';
}
console.log(pattern);