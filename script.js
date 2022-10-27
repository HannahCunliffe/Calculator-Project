//functions that perform calculations using the two numbers that are passed into them
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1,num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    let result = 0;
    //switch statement to execute different functions depending on which operator is selected
    switch (operator) {
        case ("+"):
            result = add(num1, num2);
            return result;
        case("-"):
            result = subtract(num1,num2);
            return result;
        case("*"):
            result = multiply(num1, num2);
            return result;
        case("/"):
            result = divide(num1,num2);
            return result;
    }
}

//function containing any code needed to be executed on page load
function pageLoad() {
    //sets display to default value
    document.getElementById("display").value = 0;
}

pageLoad();


