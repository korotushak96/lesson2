'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};



for (let i=0; i<2; i++){
    let expense = prompt('Введите обязательную статью расходов в этом месяце'),
    expenseCost = prompt('Во сколько обойдется?');
    if (expense && expenseCost && expense.length<=50){
        appData.expenses = expenseCost;
    } else {
        alert('wrong answer');
        i=i-1;
    }
}

// while (let i<2){
//     if (expense && expenseCost && expense.length<=50){
//         appData.expenses = expenseCost;
//     } else {
//         alert('wrong answer');
//         i=i-1;
//     }
//     i++;
// }

// do{
//     let i = 0;
//     if (expense && expenseCost && expense.length<=50){
//         appData.expenses = expenseCost;
//     } else {
//         alert('wrong answer');
//         i=i-1;
//     }
// } while(i<1)

appData.moneyPerDay = appData.budget/30;
alert (appData.moneyPerDay);
if (appData.moneyPerDay<5){
    console.log('low');
} else if (appData.moneyPerDay<10){
    console.log('normal');
} else if (appData.moneyPerDay>=10){
    console.log('good')
} else {
    console.log('error')
}