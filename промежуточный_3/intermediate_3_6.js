// Write a program that offers to buy one cup of coffee, to fill the supplies, or to take the money from the machine
// Note that the program is supposed to do only one of the mentioned actions at a time.
// It should also calculate the amounts of the remaining ingredients and how much money is in store.
// Display the number of supplies before and after a purchase.

// Your program reads one option from the standard input that is either buy, fill, or take.
// If users want to buy a cup of coffee, the correct command is buy.
// If a special person thinks that it is time to top up the supplies, the command is fill.
// If another special worker decides that it is time to take the money from the coffee machine, input take.
// If users choose buy, they need to pick one of the three coffee types: an espresso, a latte, or a cappuccino.
// Enumerate the options as follows: 1 - espresso, 2 - latte, 3 - cappuccino.
// In addition to that, take into account the amounts of supplies for each variation:
// One espresso requires 250 ml of water and 16 g of coffee beans. It costs $4;
// One latte requires 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7;
// One cappuccino requires 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
// If users write fill, the program should ask them how much water, milk, coffee, and how many disposable cups they want to add to the coffee machine.
// If users write take, the program should give all the money that it has earned.
// Name the actions as buy, fill, and take.

// For a start, the coffee machine has $550, 400 ml of water, 540 ml of milk, 120 g of coffee beans, and 9 disposable cups.

// Решение
const input = require('sync-input');
let water = 400;
let milk = 540;
let grams = 120;
let cups = 9;
let money = 550;

console.log("The coffee machine has:\n" + water + " ml of water\n" + milk + " ml of milk\n" + grams + " g of coffee beans");
console.log(cups + " disposable cups\n" + "$" + money + " of money\n");

let answer = input("Write action (buy, fill, take):\n");

if (answer === "buy") {
    let answerBuy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
    if (answerBuy == 1) {
        water -= 250;
        grams -= 16;
        --cups;
        money += 4;
    } else if (answerBuy == 2) {
        water -= 350;
        milk -= 75;
        grams -= 20;
        --cups;
        money += 7;
    } else {
        water -= 200;
        milk -= 100;
        grams -= 12;
        --cups;
        money += 6;
    }
} else if (answer === "fill") {
    water += Number(input("Write how many ml of water you want to add:"));
    milk += Number(input("Write how many ml of milk you want to add:"));
    grams += Number(input("Write how many grams of coffee beans you want to add:"));
    cups += Number(input("Write how many disposable coffee cups you want to add:"));
} else {
    console.log("I gave you $" + money);
    money = 0;
}

console.log("The coffee machine has:\n" + water + " ml of water\n" + milk + " ml of milk\n" + grams + " g of coffee beans");
console.log(cups + " disposable cups\n" + "$" + money + " of money\n");
