/*
function  moneybox(coins){
    let saveCoins=0;
    saveCoins+=coins;
    console.log(`MoneyBox es de ${saveCoins}`);
}
moneybox(5)
moneybox(5)
*/

function moneyBox(){
    let saveCoins =0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`Money: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBox=moneyBox();
console.log(moneyBox());
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna=moneyBox();
console.log(`La money box de Ana`)
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)