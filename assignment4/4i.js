function convertToCoins(amount,coins) {
    let sum="";
    while(amount>0){
        if(amount>=25){
            amount=amount-coins[0];
            sum += coins[0] + ", ";
            continue;
        }
        if (amount>=10 && amount<25){
            amount=amount-coins[1];
            sum += coins[1] + ", ";
            continue;
        }
        if (amount>=5 && amount>10){
            amount=amount-coins[2];
            sum += coins[2] + ", ";
            continue;
        }
        if (amount>=2 && amount>5){
            amount=amount-coins[3];
            sum += coins[3] + ", ";
            continue;
        }
        if (amount===1){
            amount=amount-coins[4];
            sum += coins[4] +", ";
        }
    }
    return sum;
}
console.log(convertToCoins(46,[25,10,5,2,1]))