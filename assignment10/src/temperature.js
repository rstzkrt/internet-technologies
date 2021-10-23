exports.kelvinToCelsiusAndFahrenheit=(kelvin)=>{
    document.getElementById("output-kelvin-celsius").innerText = `${kelvin - 273.15} Celsius`;
    document.getElementById("output-kelvin-fahrenheit").innerText = `${(kelvin - 273.15) * 9 / 5 + 32} Fahrenheit`;
}

exports.celsiusToKelvinAndFahrenheit=(celsius)=>{
    document.getElementById("output-celsius-fahrenheit").innerText = `${(celsius * 9 / 5) + 32} Fahrenheit`;
    document.getElementById("output-celsius-kelvin").innerText = `${celsius + 273.15} Kelvin`;
}

exports.fahrenheitToCelsiusAndKelvin=(fahrenheit)=>{
    document.getElementById("output-fahrenheit-celsius").innerText = `${(fahrenheit - 32) * 5 / 9} Celsius`;
    document.getElementById("output-fahrenheit-kelvin").innerText = `${(fahrenheit - 32) * 5 / 9 + 273.15} Kelvin`;
}