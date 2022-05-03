// Description
// We can carry on and make things more interesting, can't we?
// Let's improve the program so it can do multiple actions, one after another.
// It must repeatedly ask users what they want to do. Users can input either buy, fill, take,
// and then the program does the same thing it did in the previous step.
// However, if users want to turn off the coffee machine, they should type in exit.
// The program terminates after this command. Also, when users type in remaining,
// the program should output all coffee machine resources. This means that you shouldn't show the remaining
// stock levels at the beginning/end of the program.

// Objectives
// Write a program that continuously makes coffee for everyone until the shutdown command is provided.
// Introduce two new options: remaining and exit

// Do not forget that you can overstretch your supplies while making coffee.
// If the coffee machine doesn't have enough resources to make coffee, the program should output a message
// saying that it can't make it anymore and state what is missing.

// And the last improvement to the program at this step — if users enter to buy a cup of coffee
// but change their mind afterward, allow them to input to return to the main menu.buyback

// Set the following initial supplies: 400 ml of water, 540 ml of milk, 120 g of coffee beans,
// 9 disposable cups, $550.

const input = require('sync-input');

let name = ["water", "milk", "grams", "cups", "money"];
let elements = [400, 540, 120, 9, 550, false];
let espresso = [250, 0, 16, 1, 4];
let latte = [350, 75, 20, 1, 7];
let cappuccino = [200, 100, 12, 1, 6];

while (!elements[5]) {
    let answer = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (answer) {
        case "remaining":
            console.log("The coffee machine has:\n" + elements[0] + " ml of water\n" + elements[1] + " ml of milk\n" + elements[2] + " g of coffee beans");
            console.log(elements[3] + " disposable cups\n" + "$" + elements[4] + " of money\n");
            break;
        case "buy":
            let answerBuy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
            let i;
            switch (answerBuy) {
                case "1":
                    //console.log("espresso");
                    for (i = 0; i < (elements.length - 2); i++) {
                        if (elements[i] - espresso[i] <= 0) {
                            console.log("Sorry, not enough " + name[i] + "!");
                            break;
                        } else {
                            elements[i] -= espresso[i];
                        }
                    }
                    //console.log(elements[4]);

                    elements[4] += espresso[4];
                    //console.log(elements[4]);

                    break;
                case "2":
                    //console.log("latte");
                    for (let i = 0; i < (elements.length - 2); i++) {
                        if (elements[i] - latte[i] <= 0) {
                            console.log("Sorry, not enough " + name[i] + "!");
                            break;
                        } else {
                            elements[i] -= latte[i];
                        }
                    }
                    elements[4] += latte[4];
                    //console.log(elements[4]);

                    break;
                case "3":
                    //console.log("cappuccino");
                    for (let i = 0; i < (elements.length - 2); i++) {
                        if (elements[i] - cappuccino[i] <= 0) {
                            console.log("Sorry, not enough " + name[i] + "!");
                            break;
                        } else {
                            elements[i] -= cappuccino[i];
                        }
                    }

                    elements[4] += cappuccino[4];
                    //console.log(elements[4]);

                    break;
                case "back":
                    break;
            }
            break;
        case "fill":
            elements[0] += +(input("Write how many ml of water you want to add:"));
            elements[1] += +(input("Write how many ml of milk you want to add:"));
            elements[2] += +(input("Write how many grams of coffee beans you want to add:"));
            elements[3] += +(input("Write how many disposable coffee cups you want to add:"));
            break;
        case "take":
            console.log("I gave you $" + elements[4]);
            elements[4] = 0;
            break;
        case "exit":
            elements[5] = true;
            break;
    }
}
