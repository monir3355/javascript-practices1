function leapYear(year){
    if((year%4==0) && (year%100!=0) || (year%400==0)){
        return "This Is Leap Year";
    }
    return "This Is Not Leap Year";
}
var result = leapYear(2200);
console.log(result);