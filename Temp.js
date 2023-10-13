function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (inputTemp - 32) * 5 / 9;
        document.getElementById('result').innerHTML = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    } else if (unit === 'fahrenheit') {
        result = (inputTemp * 9 / 5) + 32;
        document.getElementById('result').innerHTML = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    }

    // Hide the input fields and "Convert" button
    document.getElementById('inputDiv').style.display = 'none';
    document.getElementById('convertButton').style.display = 'none';
    document.getElementById('resultDiv').style.display = 'block';
}

function showInputFields() {
    // Show the input fields and center-align the "Convert" button
    document.getElementById('inputDiv').style.display = 'block';
    document.getElementById('convertButton').style.display = 'block';
    document.getElementById('convertButton').style.margin = '0 auto'; // Center-align the button
    document.getElementById('resultDiv').style.display = 'none';
}
