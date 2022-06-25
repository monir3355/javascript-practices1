function gradePoint(num){
    if(num<=100 && num>=80){
        return "You got A+";
    }
    else if(num<80 && num>=70){
        return "You got A";
    }
    else if(num<70 && num>=60){
        return "You got A-";
    }
    else if(num<60 && num>=50){
        return "You got B";
    }
    else if(num<50 && num>=40){
        return "You got C";
    }
    else if(num<40 && num>=33){
        return "You got D";
    }
    else if(num<33 && num>=1){
        return "You are Failure";
    }
        return "Invalid Number";
}
var result= gradePoint(100);
console.log(result);