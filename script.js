// 5. Cтворити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом ).
// let userArrray = [];

// userArrray[0] = {
//     age: 19,
//     name: `Taras`,
//     hobby: []
// };
// userArrray[1] = {
//     age: 18,
//     name: `Oleg`,
//     hobby: []
// };
// userArrray[2] = {
//     age: 25,
//     name: `Andrij`,
//     hobby: []
// };

// console.log(userArrray)

// 1. Проекспериментувати з типами даних
// console.log(typeof(null)) // object
// console.log(typeof(undefined)) // undefined
// console.log(null == undefined) // true
// console.log(null === undefined) // false
// console.log(typeof(NaN)) // number


// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 
// const USD = 28;
// const EUR = 33;
// const BRENT = 42 * USD;
// const GOLD = 1730;

// let userUAH = prompt(`Скільки у вас є гривень?`, 1000);


// if(userUAH === '' || isNaN(userUAH)) {
//     alert(`Не вірно введені дані`);
// } else if(userUAH === null) {
//     alert(`Ви відмінили операцію`);
// } else {
//     let userUSD = (userUAH / USD).toFixed(1);
//     let userUER = (userUAH / EUR).toFixed(1);
//     let userBRENT = (userUAH / BRENT).toFixed(1);
//     let userGOLD = (userUAH / GOLD).toFixed(1);

//     alert(`${userUAH}грн. еквівалентне: ${userUSD} доларам, ${userUER} євро, ${userBRENT} барелям нафти, ${userGOLD} г. золота.`);
// }


// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

// let orderPrice = prompt(`Введіть суму замовлення:`, 1000);

// if (orderPrice === '' || isNaN(orderPrice) || orderPrice < 0) {
//     alert(`Не вірно введені дані`);

// } else if (orderPrice === null) {
//     alert(`Ви відмінили операцію`);

// } else {
//     if (orderPrice > 1000) {
//         alert(`Сума до оплати ${orderPrice * 0.9 - 200} грн. з урахуванням знижки та сертифікату.`);
//     }
//     else if (orderPrice >= 500 && orderPrice <= 1000) {
//         alert(`Сума до оплати ${orderPrice * 0.95} грн. з урахуванням знижки.`);
//     }
//     else if (orderPrice < 500) {
//         alert(`Сума до оплати ${orderPrice * 0.99} грн. з урахуванням знижки.`);
//     }
// }

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 

// let result = 0;
// let test = confirm(`Бажаєте почати тест?`);
// if(test) {
//     let question1 = confirm(`В JS 0.1 + 0.2 = 0.3?`);
//     if (question1 === false) result += 1;

//     let question2 = prompt(`Який тип даних Nan?`, `number`);
//     if (question2 === `number`) result += 1;

//     let question3 = prompt(`Який тип даних null?`, `object`);
//     if (question3 === `object`) result += 1;

//     let question4 = prompt(`Оператор умови в JS?`, `if`);
//     if (question4 === `if`) result += 1;
    
//     let question5 = confirm(`null == undefined в JS?`);
//     if (question5 === true) result += 1;

//     if(question1 === false &&  question2 === `number` && question3 === `object` && question4 === `if` && question5 === true)  result += 1;

//     alert(`Ваш результат = ${result} балів`);
// } else {
//     alert(`Ви відминили тест`);
// }

// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
// let number = prompt(`Введіть трьохзначне число:`);
// if (number === '' || isNaN(number) || number.length !== 3) {
//     alert(`Не вірно введені дані`);

// } else if (number === null) {
//     alert(`Ви відмінили операцію`);

// } else {
//     if(number[0] === number[1] || number[0] === number[2] || number[1] === number[2] || number[0] === number[1] === number[2]) 
//     alert(`У числі є однакові цифри!`);
//     else alert(`Однакових цифр немає`);
// }


// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом

// let key = prompt(`Введіть одну кнопоку від 1 до = на клавіатурі:`);
// if(key == 1) alert(`При нажатті з шифтом отримаємо !`);
// else if(key == 2) alert(`При нажатті з шифтом отримаємо @`);
// else if(key == 3) alert(`При нажатті з шифтом отримаємо #`);
// else if(key == 4) alert(`При нажатті з шифтом отримаємо $`);
// else if(key == 5) alert(`При нажатті з шифтом отримаємо %`);
// else if(key == 6) alert(`При нажатті з шифтом отримаємо ^`);
// else if(key == 7) alert(`При нажатті з шифтом отримаємо &`);
// else if(key == 8) alert(`При нажатті з шифтом отримаємо *`);
// else if(key == 9) alert(`При нажатті з шифтом отримаємо (`);
// else if(key == 0) alert(`При нажатті з шифтом отримаємо )`);
// else if(key == `-`) alert(`При нажатті з шифтом отримаємо _`);
// else if(key == `=`) alert(`При нажатті з шифтом отримаємо +`);
// else alert(`Не вірно введені дані`);

