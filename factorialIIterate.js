function fact(n){
    factorial=1
    for(var i=1; i<=n; i++){
        factorial=factorial*i;
    }
    return factorial;
}
var result=fact(3);
console.log(result);