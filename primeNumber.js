
function primeNumber(n){
    for(var i=2; i<n; i++){
        if(n%i==0){
            return "Not Prime Number";
        }
        return "Prime Number";
    }
}
var results =primeNumber(13);
console.log(results);