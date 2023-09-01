function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const convertedTemperature = document.getElementById('convertedTemperature');

    if (isNaN(inputTemperature)) {
        convertedTemperature.textContent = 'Please enter a valid number.';
        return;
    }

    let result;
    if (unit === 'celsius') {
        result = (inputTemperature * 9/5) + 32; // Celsius to Fahrenheit
    } else {
        result = (inputTemperature - 32) * 5/9; // Fahrenheit to Celsius
    }

    convertedTemperature.textContent = `Converted Temperature: ${result.toFixed(2)} °${unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
}
