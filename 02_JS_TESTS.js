"use strict"
/* let admin, namee 
namee = 'John'
admin = namee
alert (admin) */

/* let peoplePlanetName = 'Earth'
let currentUserName = 'Jhon'
 */
/* let name = 'Alex'
alert (`Hello, ${name}`) */

/* let biggestNumber = 4 > 1;
alert (biggestNumber); */

/* result = prompt(title, [default]); */

/* let age = prompt ('Сколько тебе лет', 100)
alert (`Тебе ${age} лет!`) */

/* let currentUserName = prompt ('Введите своё имя','');
alert (currentUserName); */

/* let value = true;
alert(typeof value);

value = String(value);
alert(typeof value); */

/* alert ('6'/'2'); */

/* let str = '123';
alert(typeof str);

let num = Number(str);
alert(typeof num); */

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12 */

/* let year = prompt ('В каком году был выпущен EcmaScript 2015?', '');
if (year==2015) alert ('Right'); */

// Если мы хотим выполнить более 1 инструкции, то блок кода необходимо заключить в фигурные скобки {}. Вообще лучше всегда использовать фигурные скобки, улучшает читабельность кода.

/* if (year==2015){
    alert('krasava');
    alert('neveroyatniy');
} */

// Можно заранее присвоить переменной логическое значение и затем использовать эту переменну с If

/* let condition = (year==2015)
if condition {

} */

//Блок else
/* let year = prompt ('В каком году был выпущен EcmaScript 2015?', '');
if (year==2015) {alert ('Right');}
else {alert ('ha ha ha lox');} */

/* let year = prompt ('В каком году был выпущен EcmaScript 2015?', '');
if (year<2015) {alert ('ranovato');
} else if (year>2015) {alert ('pozdnovato');
} else {alert ('You god damm right');}
 */

// Условный оператор "?"

/* let accessAllowed;
let age = prompt ('Skilko let, motherfuker?', '');
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert (accessAllowed); */// это длинный вариант без использования оператора "?"


/* let accessAllowed = (age > 18) ? true : false; */

/* let age = prompt ('Ваш возраст ?', '');
let massage = (age < 3) ? "Пешком под стол пока ходишь" :
(age < 18) ? "Hello, maladoy!" :
(age < 100) ? "Good morning, sir!":
" Wow, are you alive a long time";
alert (massage);// это работает, но почему то синтаксис "?" и ":" не отображается */

/* let officialNameJs = prompt ('Какое официальное название языка JavaScript?', '');

if (officialNameJs == 'ECMAscript')
{alert ('Верно!');}
else {alert ('Не знаете? ECMAscript!');} */

/* let value = prompt ('Результат', '');
if (value > 0) {
    alert('1');
} else if (value < 0) {
    alert('-1');
} else {
    alert('0');
}
 */


/* let result;

result = (a + b < 4) ? 'Мало' : 'Много'; */

/* let message;

message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
''; */

/* let age = prompt('Возраст', ''); */
/* if (age >= 90) {
    alert (false);
}
else if (age <= 14) {
    alert (false);
}
else {
    alert(true);
} */

//или

/* if (age >= 14 && age <= 90)

if (age < 14 || age > 90) */

/* let age = prompt('Возраст', '');
if (!(age >= 14 && age <= 90)) {
    alert('Верно!');
}
else {
    alert ('Не Верно!');
} */  // Хороший пример применения || и &&

let userLogin = prompt('Введите ваш логин', '');
if (userLogin === 'Admin') {
    let password = prompt ('Введите пароль', '');
    if (password === 'Я главный') {
        alert ('Здравствуйте!');
    }
    else if (password === '' || password === null) {
        alert ('Отменено');
    }
    else {
        alert ('Неверный пароль');
    }
} 
else if (userLogin ==='' || userLogin === null) {
    alert ('Отменено');
}
else {
    alert ('Я вас не знаю');
}

