module.exports = {
    kilometerToMile(kilometer){
        document.getElementById("output-mile").innerText = `${kilometer * 0.62137} MILE`;
    },
    mileToKilometer(mile){
        document.getElementById("output-kilometer").innerText = `${mile * 1.60934} KM`;
    }
}