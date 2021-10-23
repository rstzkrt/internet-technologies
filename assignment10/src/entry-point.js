let {kilometerToMile,mileToKilometer}=require('./distance')
let {fahrenheitToCelsiusAndKelvin,kelvinToCelsiusAndFahrenheit,celsiusToKelvinAndFahrenheit}=require('./temperature')


let celsius = document.getElementById('celsius')
let fahrenheit = document.getElementById('fahrenheit')
let kelvin = document.getElementById('kelvin')
let mile = document.getElementById('mile')
let kilometer = document.getElementById('kilometer')

document.getElementById("button-c").addEventListener('click',function(){
    celsiusToKelvinAndFahrenheit(celsius.value);
})
document.getElementById("button-k").addEventListener('click',function(){
    kelvinToCelsiusAndFahrenheit(kelvin.value);
})
document.getElementById("button-f").addEventListener('click',function(){
    fahrenheitToCelsiusAndKelvin(fahrenheit.value);
})
document.getElementById("button-ki").addEventListener('click',function(){
    mileToKilometer(mile.value);
})
document.getElementById("button-m").addEventListener('click',function(){
    kilometerToMile(kilometer.value);
})