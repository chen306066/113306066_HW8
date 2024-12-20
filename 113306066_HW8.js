document.getElementById('calculate-btn').addEventListener('click', function () {
    // Fetch user inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Result = Invalid input";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = "Result = Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = "Result = Invalid operation";
            return;
    }

    // Display result rounded to 2 decimal places
    resultElement.textContent = `Result = ${result.toFixed(2)}`;
});

