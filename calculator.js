function Add(num1, num2){
    return num1 + num2;
}

function Multi(num1, num2){
    return num1  * num2;
}

function Sub(num1, num2){
    return num1 - num2;
}

function Div(num1, num2){
    return num1  / num2;
}


function calc(num1, num2, cb){
    return cb(num1, num2);
}

console.log(calc(10,1000000, Div))