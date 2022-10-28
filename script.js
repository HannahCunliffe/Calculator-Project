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
            operationSelected = false;
            return result;
        case("-"):
            result = subtract(num1,num2);
            operationSelected = false;
            return result;
        case("x"):
            result = multiply(num1, num2);
            operationSelected = false;
            return result;
        case("÷"):
            result = divide(num1,num2);
            operationSelected = false;
            return result;
    }
}

//function to add onClick event listeners to all the calculator buttons
function addEventListeners() {
    document.querySelectorAll('button')
        .forEach(btn=>btn.addEventListener('click', clickedButton));
}

function clickedButton() {
    const clicked = this.innerText;
    //checks if it was a function button clicked
    //was important to make sure it was checking against clicked in every or option or it
    // would incorrectly return true
    if (clicked == "+" || clicked == "-" ||clicked == "x" || clicked == "÷" || clicked == "=") {
        //check to make sure only one operation can be selected at a time
        if (operationSelected == true) {
            return console.log("operation already selected");
        }
        switch (clicked) {
            case ("+"):
                operationSelected = true;
                currentOperation = "+";
            case("-"):
                operationSelected = true;
                currentOperation = "-";
            case("x"):
                operationSelected = true;
                currentOperation = "x";
            case("÷"):
                operationSelected = true;
                currentOperation = "÷";
        }
    }
    else {
        let display = document.getElementById("display");
        switch(clicked) {
            case ("Clear"):
                resetDisplay();
                return
            case ("1"):
                if (display.value == 0) {
                    display.value = 1;
                } else {
                    display.value += "1";
                }
                return
            case ("2"):
                if (display.value == 0) {
                    display.value = 2;
                } else {
                    display.value += "2";
                }
                return
            case ("3"):
                if (display.value == 0) {
                    display.value = 3;
                } else {
                    display.value += "3";
                }
                return
            case ("4"):
                if (display.value == 0) {
                    display.value = 4;
                } else {
                    display.value += "4";
                }
                return
            case ("5"):
                if (display.value == 0) {
                    display.value = 5;
                } else {
                    display.value += "5";
                }
                return
            case ("6"):
                if (display.value == 0) {
                    display.value = 6;
                } else {
                    display.value += "6";
                }
                return
            case ("7"):
                if (display.value == 0) {
                    display.value = 7;
                } else {
                    display.value += "7";
                }
                return
            case ("8"):
                if (display.value == 0) {
                    display.value = 8;
                } else {
                    display.value += "8";
                }
                return 
            case ("9"):
                if (display.value == 0) {
                    display.value = 9;
                } else {
                    display.value += "9";
                }
                return
            case ("0"):
                if (display.value == 0) {
                    display.value = 0;
                } else {
                    display.value += "0";
                }
                return

        }
    }
}

function resetDisplay() {
    functionSelected = false;
    document.getElementById("display").value = 0;
    firstNumber = undefined;
    //add more to this as more elements added later
    currentOperation = undefined;
}

//function containing any code needed to be executed for setup purposes on page load
function pageLoad() {
    //sets display to default value
    document.getElementById("display").value = 0;
    addEventListeners();
}

pageLoad();
let currentFunction = "";
let firstNumber;
let operationSelected = "false";
let currentOperation;


