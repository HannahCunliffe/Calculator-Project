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
    //converts both inputs from strings to numbers
    //num1 = Number(num1);
    num2 = processDecimal(num2);
    //switch statement to execute different functions depending on which operator is selected
    switch (operator) {
        case ("+"):
            result = add(num1, num2);
            display.value = result;
            updateLog(num2);
            updateLog("=");
            updateLog(result);
            firstNumber = result;
            display.value = "";
            display.placeholder = firstNumber;
            currentOperation = undefined;
            return 
        case("-"):
            result = subtract(num1, num2);
            display.value = result;
            updateLog(num2);
            updateLog("=");
            updateLog(result);
            firstNumber = result;
            display.value = "";
            display.placeholder = firstNumber;
            currentOperation = undefined;
            return 
        case("x"):
            result = multiply(num1, num2);
            display.value = result;
            updateLog(num2);
            updateLog("=");
            updateLog(result);
            firstNumber = result;
            display.value = "";
            display.placeholder = firstNumber;
            currentOperation = undefined;
            return 
        case("÷"):
           if (num2 == 0) {
                result = "Can't divide by zero!"
                display.value = result;
                updateLog (num2);
                updateLog ("=");
                updateLog ("?");
                return;
            } 
            result = divide(num1, num2);
            display.value = result;
            updateLog(num2);
            updateLog("=");
            updateLog(result);
            firstNumber = result;
            display.value = "";
            display.placeholder = firstNumber;
            currentOperation = undefined;
            return 
    }
}

function processSum(operator) {
    
        let secondNumber = display.value;
        return operate(operator, firstNumber, secondNumber)
    
}

//function to check if number is whole or decimal, then rounds it to 8 decimal places if decimal
function processDecimal(num) {
    num = Number(num);
    var result = (num - Math.floor(num)) !== 0;
    //returns true if the number is a decimal, else returns false if whole
    if (result == true) {
        //if decimal rounds to 8 decimal places
        //parseFloat ensures that trailing zeroes are removed from the number
        num = parseFloat(num.toFixed(8));
        return num;
    } else {
        return num;
    }
}

//function to add onClick event listeners to all the calculator buttons
function addEventListeners() {
    document.querySelectorAll('button')
        .forEach(btn=>btn.addEventListener('click', clickedButton));
}

//function to remove the last character from the calculator log
function removeLastInputLog() {
    let currentLog = log.value;
    let newLog = currentLog.slice(0,-2);
    log.value = newLog;
    return;
}

function clickedButton() {
    const clicked = this.innerText;
    //checks if it was a function button clicked
    //was important to make sure it was checking against clicked in every or option or it
    // would incorrectly return true
    if (clicked == "+" || clicked == "-" ||clicked == "x" || clicked == "÷" || clicked == "=") {

        switch(clicked) {
            case ("+"):

            //test
            if (currentOperation == "+") {
                return;
            }

            if (firstNumber !== undefined && display.value !== "") {
                operate(currentOperation, firstNumber, display.value);
                return
            }

                if (operationSelected == false) {
                    if (firstNumber == undefined) {
                        firstNumber = display.value;
                        firstNumber = processDecimal(firstNumber);
                        currentOperation = "+";
                        updateLog(firstNumber);
                        updateLog(currentOperation);
                        display.value = "";
                        display.placeholder = firstNumber;
                        operationSelected = true;
                    } else {
                        currentOperation = "+";
                        updateLog(currentOperation);
                        operationSelected = true;
                    }
                    
                } else {
                    removeLastInputLog();
                    currentOperation = "+";
                    updateLog("+");
                }

                return
            

            case ("-"):

                if (currentOperation == "-") {
                    return;
                }

                if (firstNumber !== undefined && display.value !== "") {
                    operate(currentOperation, firstNumber, display.value);
                    return
                }

                if (operationSelected == false) {
                    if (firstNumber == undefined) {
                        firstNumber = display.value;
                        firstNumber = processDecimal(firstNumber);
                        currentOperation = "-";
                        updateLog(firstNumber);
                        updateLog(currentOperation);
                        display.value = "";
                        display.placeholder = firstNumber;
                        operationSelected = true;
                    } else {
                        currentOperation = "-";
                        updateLog(currentOperation);
                        operationSelected = true;
                    }
                   
                } else {
                    removeLastInputLog();
                    updateLog("-");
                    currentOperation = "-";
                }

                

                return
             
            case ("x"):

                if (currentOperation == "x") {
                    return;
                }

                if (firstNumber !== undefined && display.value !== "") {
                    operate(currentOperation, firstNumber, display.value);
                    return
                }

                if (operationSelected == false) {
                    if (firstNumber == undefined) {
                        firstNumber = display.value;
                        firstNumber = processDecimal(firstNumber);
                        currentOperation = "x";
                        updateLog(firstNumber);
                        updateLog(currentOperation);
                        display.value = "";
                        display.placeholder = firstNumber;
                        operationSelected = true;
                    } else {
                        currentOperation = "x";
                        updateLog(currentOperation);
                        operationSelected = true;
                    }
                    
                } else {
                    removeLastInputLog();
                    updateLog("x");
                    currentOperation = "x";
                }

                return

            case ("÷"):

                if (currentOperation == "÷") {
                    return;
                }

                if (firstNumber !== undefined && display.value == "0") {
                    display.value = "";
                    display.placeholder = "Can't divide by zero!";
                    return;
                }

                if (firstNumber !== undefined && display.value !== "") {
                    operate(currentOperation, firstNumber, display.value);
                    return
                }

                if (operationSelected == false) {
                    if (firstNumber == undefined) {
                        firstNumber = display.value;
                        firstNumber = processDecimal(firstNumber);
                        currentOperation = "÷";
                        updateLog(firstNumber);
                        updateLog(currentOperation);
                        display.value = "";
                        display.placeholder = firstNumber;
                        operationSelected = true;
                    } else {
                        currentOperation = "÷";
                        updateLog(currentOperation);
                        operationSelected = true;
                    }
                    
                } else {
                    removeLastInputLog();
                    updateLog("÷");
                    currentOperation = "÷";
                }

                return
            case ("="):
                if (currentOperation == "÷" && firstNumber !== undefined && display.value == "0") {
                    display.value = "";
                    display.placeholder = "Can't divide by zero!";
                    return;
                }
                operate(currentOperation, firstNumber, display.value);

                return;
               
        }
    }
    else { 
        operationSelected = false;
        switch(clicked) {
            case ("Clear"):
                resetDisplay();
                return
            case ("Back"):
                let currentDisplay = display.value;
                let newDisplay = currentDisplay.slice(0,-1);
                display.value = newDisplay;
                return;
            case ("1"):
                if (display.value == "0") {
                    display.value = "1";
                } else {
                    display.value += "1";
                }
                return
            case ("2"):
                if (display.value == "0") {
                    display.value = "2";
                } else {
                    display.value += "2";
                }
                return
            case ("3"):
                if (display.value == "0") {
                    display.value = "3";
                } else {
                    display.value += "3";
                }
                return
            case ("4"):
                if (display.value == "0") {
                    display.value = "4";
                } else {
                    display.value += "4";
                }
                return
            case ("5"):
                if (display.value == "0") {
                    display.value = "5";
                } else {
                    display.value += "5";
                }
                return
            case ("6"):
                if (display.value == "0") {
                    display.value = "6";
                } else {
                    display.value += "6";
                }
                return
            case ("7"):
                if (display.value == "0") {
                    display.value = "7";
                } else {
                    display.value += "7";
                }
                return
            case ("8"):
                if (display.value == "0") {
                    display.value = "8";
                } else {
                    display.value += "8";
                }
                return 
            case ("9"):
                if (display.value == "0") {
                    display.value = "9";
                } else {
                    display.value += "9";
                }
                return
            case ("0"):
                if (display.value == "0") {
                    display.value = "0";
                } else {
                    display.value += "0";
                }
                return
            case("."):
                //makes it so another decimal point can't be entered if one's in the display
                if (display.value.includes(".")) {
                    return;
                }
                display.value += ".";
                return

        }
    }
}

function resetDisplay() {
    functionSelected = false;
    display.value = "0";
    display.placeholder = "0";
    firstNumber = undefined;
    secondNumber = undefined;
    currentOperation = undefined;
    operationSelected = false;
    log.value = "";
    afterFirstSum = false;
}

function updateLog(addedItem) {
    //string literal used to add new item to log, made it easy to add a space before new item
    log.value += ` ${addedItem}`;
}

//function containing any code needed to be executed for setup purposes on page load
function pageLoad() {
    //sets display to default value
    display.value = "0";
    addEventListeners();
    log.disabled = true;
}

let display = document.getElementById("display");
let log = document.getElementById("displayLog");
pageLoad();
let firstNumber;
let currentOperation;
let afterFirstSum = false;
let operationSelected = false;



