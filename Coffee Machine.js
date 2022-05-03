const input = require('sync-input');

let name = ["water", "milk", "grams", "cups", "money"];  //названия ингридиентов
let elements = [400, 540, 120, 9, 550, false];  //кол-во доступных ингридиентов в машине (в соотвествии с name), последним хранится флаг для exit
let espresso = [250, 0, 16, 1, 4];  //кол-во ингридиентов, необходимых для каждого вида кофе
let latte = [350, 75, 20, 1, 7];
let cappuccino = [200, 100, 12, 1, 6];
let americano = [300, 0, 16, 1, 5];

//пока не выбрали exit, который переключает данный флаг с false на true
while (!elements[5]) {

    //строка главного меню
    let answer = input(`Write action (buy, fill, take, remaining, exit):`);
    switch (answer) {

        // по команде remaining выводится кол-во доступных ингридиентов 
        case "remaining":
            console.log(`The coffee machine has:
       ${elements[0]} ml of water
       ${elements[1]} ml of milk
       ${elements[2]} g of coffee beans
       ${elements[3]} disposable cups
       $ ${elements[4]} of money`);
            break;

        // по команде buy предлагается 4 вида кофе или вернуться к главному меню  
        case "buy":
            let answerBuy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - americano, back - to main menu:");
            let i;
            switch (answerBuy) {

                //отрабатывается готовка espresso
                case "1":
                    for (i = 0; i < (elements.length - 2); i++) {
                        //проверка нужного кол-ва ингридиентов
                        if (elements[i] - espresso[i] <= 0) {
                            console.log(`Sorry, not enough ${name[i]} !`);
                            break;
                        } else {
                            elements[i] -= espresso[i];
                        }
                    }
                    // считаем денежки
                    elements[4] += espresso[4];
                    break;

                //отрабатывается готовка latte  
                case "2":
                    for (let i = 0; i < (elements.length - 2); i++) {
                        //проверка нужного кол-ва ингридиентов
                        if (elements[i] - latte[i] <= 0) {
                            console.log(`Sorry, not enough ${name[i]} !`);
                            break;
                        } else {
                            elements[i] -= latte[i];
                        }
                    }
                    // считаем денежки
                    elements[4] += latte[4];
                    break;

                //отрабатывается готовка cappuccino         
                case "3":
                    for (let i = 0; i < (elements.length - 2); i++) {
                        //проверка нужного кол-ва ингридиентов
                        if (elements[i] - cappuccino[i] <= 0) {
                            console.log(`Sorry, not enough ${name[i]} !`);
                            break;
                        } else {
                            elements[i] -= cappuccino[i];
                        }
                    }
                    //денежки
                    elements[4] += cappuccino[4];
                    break;

                //отрабатывается готовка americano        
                case "4":
                    for (let i = 0; i < (elements.length - 2); i++) {
                        //проверка нужного кол-ва ингридиентов
                        if (elements[i] - cappuccino[i] <= 0) {
                            console.log(`Sorry, not enough ${name[i]} !`);
                            break;
                        } else {
                            elements[i] -= americano[i];
                        }
                    }
                    //денежки
                    elements[4] += americano[4];
                    break;

                //выход в главное меню  
                case "back":
                    break;
            }
            break;

        // по команде fill наполняем машину ингридиентами  
        case "fill":
            elements[0] += +(input("Write how many ml of water you want to add:"));
            elements[1] += +(input("Write how many ml of milk you want to add:"));
            elements[2] += +(input("Write how many grams of coffee beans you want to add:"));
            elements[3] += +(input("Write how many disposable coffee cups you want to add:"));
            break;

        // по команде take забираем деньги      
        case "take":
            console.log(`I gave you $ ${elements[4]}`);
            elements[4] = 0;
            break;

        // по команде exit взводим флаг и покидаем цикл      
        case "exit":
            elements[5] = true;
            break;
    }
}
