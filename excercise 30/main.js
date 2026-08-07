

function operate(a, b, callback) {

    return callback(a, b);

}

function multiply(a, b) {

    return a * b;

}

function divide(a, b) {

    return a / b;

}

console.log("divide:", operate(50, 5, divide));

console.log(" multiply:", operate(2, 6, multiply));