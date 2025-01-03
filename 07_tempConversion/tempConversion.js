const convertToCelsius = function(farenheitInput) {
  let convertedValue = 0.0;
  convertedValue = (farenheitInput-32)*5/9;
  return parseFloat(convertedValue.toFixed(1));
};

const convertToFahrenheit = function(celsiusInput) {
  let convertedValue = 0.0;
  convertedValue = celsiusInput*9/5+32;
  return parseFloat(convertedValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
