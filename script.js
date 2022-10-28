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

function logResults(num2, result) {
   /*  if (currentOperation !="") {
        updateLog(currentOperation);
    } */
    updateLog(num2);
    updateLog("=");
    updateLog(result);
}

function operate(operator, num1, num2) {
    let result = 0;
    //converts both inputs from strings to numbers
    num1 = Number(num1);
    num2 = Number(num2);
    //switch statement to execute different functions depending on which operator is selected
    switch (operator) {
        case ("+"):
            result = add(num1, num2);
            //
            if (afterFirstSum == true) {
                updateLog(currentOperation);
            }
            display.value = result;
            logResults(num2, result);
            display.placeholder = result;
            firstNumber = result;
            display.value = "";
            operationSelected = false;
            afterFirstSum = true;
            return 
        case("-"):
            result = subtract(num1,num2);
            if (afterFirstSum == true) {
                updateLog(currentOperation);
            }
            display.value = result;
            logResults(num2, result);
            display.placeholder = result;
            firstNumber = result;
            display.value = "";
            operationSelected = false;
            afterFirstSum = true;
            return 
        case("x"):
            result = multiply(num1, num2);
            if (afterFirstSum == true) {
                updateLog(currentOperation);
            }
            display.value = result;
            logResults(num2, result);
            display.placeholder = result;
            firstNumber = result;
            display.value = "";
            operationSelected = false;
            afterFirstSum = true;
            return 
        case("÷"):
            result = divide(num1,num2);
            if (afterFirstSum == true) {
                updateLog(currentOperation);
            }
            display.value = result;
            logResults(num2, result);
            display.placeholder = result;
            firstNumber = result;
            display.value = "";
            operationSelected = false;
            afterFirstSum = true;
            return 
    }
}

function processSum(operator) {
    
        let secondNumber = display.value;
        return operate(operator, firstNumber, secondNumber)
    
}

//for handling additional sums done without refreshing the calculator
function additionalSums(num1, num2, currentOperation) {
    
}

//function to add onClick event listeners to all the calculator buttons
function addEventListeners() {
    document.querySelectorAll('button')
        .forEach(btn=>btn.addEventListener('click', clickedButton));
}

//function to remove the last character from the calculator log
function removeLastInputLog() {
    let newValue = log.value.slice(0,-1)
    log.value = newValue;
}

function clickedButton() {
    const clicked = this.innerText;
    //checks if it was a function button clicked
    //was important to make sure it was checking against clicked in every or option or it
    // would incorrectly return true
    if (clicked == "+" || clicked == "-" ||clicked == "x" || clicked == "÷" || clicked == "=") {

        switch(clicked) {
            case ("+"):

                //checks if input is empty, if empty, it won't execute any functions
                if (display.value == "") {
                    return
                };

                if (firstNumber !== undefined) {
                    processSum(currentOperation)
                    currentOperation = "+";
                    return
                }

                currentOperation = "+";

                firstNumber = display.value;
                updateLog(display.value);
                display.placeholder = display.value;
                display.value = "";
               
                if (operationSelected == true) {
                    removeLastInputLog();
                    updateLog(clicked);
                };

                updateLog(clicked);
                operationSelected = true;
                
                
            case ("-"):

                //checks if input is empty, if empty, it won't execute any functions
                if (display.value == "") {
                    return
                };

            
                if (firstNumber !== undefined) {
                    processSum(currentOperation)
                    currentOperation = "-";
                    return
                }

                currentOperation = "-";

                firstNumber = display.value;
                updateLog(display.value);
                display.placeholder = display.value;
                display.value = "";
               
                if (operationSelected == true) {
                    removeLastInputLog();
                    updateLog(clicked);
                };

                updateLog(clicked);
                operationSelected = true;

            case ("x"):

                    //checks if input is empty, if empty, it won't execute any functions
                    if (display.value == "") {
                        return
                    };
    
                    if (firstNumber !== undefined) {
                        processSum(currentOperation)
                        currentOperation = "x";
                        return
                    }
    
                    currentOperation = "x";
    
                    firstNumber = display.value;
                    updateLog(display.value);
                    display.placeholder = display.value;
                    display.value = "";
                   
                    if (operationSelected == true) {
                        removeLastInputLog();
                        updateLog(clicked);
                    };
    
                    updateLog(clicked);
                    operationSelected = true;

            case ("÷"):

                     //checks if input is empty, if empty, it won't execute any functions
                    if (display.value == "") {
                         return
                    };
        
                    if (firstNumber !== undefined) {
                         processSum(currentOperation)
                         currentOperation = "÷";
                     return
                    }
        
                  currentOperation = "÷";
        
                    firstNumber = display.value;
                    updateLog(display.value);
                     display.placeholder = display.value;
                     display.value = "";
                       
                    if (operationSelected == true) {
                         removeLastInputLog();
                          updateLog(clicked);
                     };
        
                     updateLog(clicked);
                    operationSelected = true;
        }
    }
    else { 
        operationSelected = false;
        switch(clicked) {
            case ("Clear"):
                resetDisplay();
                return
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
                display.value += ".";
                return

        }
    }
}

function resetDisplay() {
    functionSelected = false;
    display.value = "0";
    firstNumber = undefined;
    //add more to this as more elements added later
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
    document.getElementById("display").value = "0";
    addEventListeners();
}

pageLoad();
let display = document.getElementById("display");
let log = document.getElementById("displayLog");
let firstNumber;
let operationSelected = false;
let currentOperation;
let afterFirstSum = false;


