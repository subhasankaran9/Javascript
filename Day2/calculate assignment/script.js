// Create 6 variables whichs grabs the document element id for each elemnt needed to create the calculator

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph in the index.html

// E.g. if the user enter 8 in the first input field and 2 in the second input field then clicks on the "Plus" button, it should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph index.html




let userFirstNumber = document.getElementById("firstNumber")
let userSecondNumber = document.getElementById("secondNumber")
let result = document.getElementById("result")
let error = document.getElementById("error")


/*Addition*/

function add() {
    result.textContent = ""
    error.textContent = ""
    let parseIntFirstNumber = parseInt(userFirstNumber.value)
    let parseIntSecondNumber = parseInt(userSecondNumber.value)

    console.log(parseIntFirstNumber)
    console.log(parseIntSecondNumber)

    if (parseIntFirstNumber && parseIntSecondNumber || parseIntFirstNumber === 0 || parseIntSecondNumber === 0) {

        let sum = parseIntFirstNumber + parseIntSecondNumber;

        result.textContent = `The sum of numbers ${parseIntFirstNumber} and ${parseIntSecondNumber} is ${sum}.`

    } else {
        error.textContent = "Please enter the numbers!"
    }

}

/*Subtract*/

function subtract() {
    result.textContent = ""
    error.textContent = ""
    let parseIntFirstNumber = parseInt(userFirstNumber.value)
    let parseIntSecondNumber = parseInt(userSecondNumber.value)

    console.log(parseIntFirstNumber)
    console.log(parseIntSecondNumber)

    if (parseIntFirstNumber && parseIntSecondNumber || parseIntFirstNumber === 0 || parseIntSecondNumber === 0) {

        let subtract = parseIntFirstNumber - parseIntSecondNumber;
        result.textContent = `The difference between the numbers ${parseIntFirstNumber} and ${parseIntSecondNumber} is ${subtract}.`

    } else {
        error.textContent = "Please enter the numbers!"
    }
}

/* multiply*/

function multiple() {
    result.textContent = ""
    error.textContent = ""
    let parseIntFirstNumber = parseInt(userFirstNumber.value)
    let parseIntSecondNumber = parseInt(userSecondNumber.value)

    console.log(parseIntFirstNumber)
    console.log(parseIntSecondNumber)

    if (parseIntFirstNumber && parseIntSecondNumber || parseIntFirstNumber === 0 || parseIntSecondNumber === 0) {

        let multiple = parseIntFirstNumber * parseIntSecondNumber;
        result.textContent = `The product of the numbers ${parseIntFirstNumber} and ${parseIntSecondNumber} is ${multiple}.`

    } else {
        error.textContent = "Please enter the numbers!"
    }
}

/* divide*/

function divide() {
    result.textContent = ""
    error.textContent = ""
    let parseIntFirstNumber = parseInt(userFirstNumber.value)
    let parseIntSecondNumber = parseInt(userSecondNumber.value)

    console.log(parseIntFirstNumber)
    console.log(parseIntSecondNumber)

    if (parseIntFirstNumber && parseIntSecondNumber || parseIntFirstNumber === 0 || parseIntSecondNumber === 0) {

        switch (true) {
            case parseIntSecondNumber === 0:
                result.textContent = `You can't divide by zero! Please enter another value for the second number!`
                break;
            default:
                let divide = parseIntFirstNumber / parseIntSecondNumber;
                result.textContent = `The quotient of the numbers ${parseIntFirstNumber} and ${parseIntSecondNumber} is ${divide}.`
        }

    } else {
        error.textContent = "Please enter the numbers!"
    }
}