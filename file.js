// class Work

//task1
function task1_class() {
    alert('Hello world');
}

//task2
function task2_class() {
    alert('Я люблю фронтенд');
    alert('Я люблю JS');
}


//task3
function task3_class() {
    let name,
        admin;

    name = 'Vasyl';
    admin = undefined;
    admin = name;
    alert(admin);
}

//task4
function task4_class() {
    let userName = prompt('Як тебе звати?', 'на українській мові');

    alert(`${userName} Батькович`);
}

//task5

function task5_class() {
    let e;
    alert(e)
}


// Homework 
//The user enters only a positive value

// Task 1
function task1_home() {
    let ageUser = +prompt('Скільки тобі років?');
    alert(`Привіт мені - ${ageUser} р.`);
}


//Task 2
function task2_home() {
    const presentYear = new Date().getFullYear();

    let yearBirthUser = +prompt('Якого ти року народження?');

    alert(`Тобі ${presentYear - yearBirthUser} р.`);
}


//Task 3
function task3_home() {
    let width = +prompt('Введіть ширину прямокутника', '0');

    let length = +prompt('Введіть довжину прямокутника', '0');

    alert(`Периметр прямокутника становить ${width * 2 + length * 2} см`);
}
//Task 4 
function task4_home() {

    let radius = +prompt('Введіть радіус кола', '0');

    alert(`Площа кола становить ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
}

//Task 5 
function task5_home() {
    let speed = 50;

    let time = +prompt('Скільки Вам ще треба їхати часу?', 'введіть у годинах');

    alert(`Відстань, яку ви ще проїдете становить ${time * speed} км`);
}


//Task 6 
function task6_home() {
    let kilometers = +prompt('Введіть значення кілометрів, яке потрібно перевести в милі', '0');

    alert(`${kilometers} кілометрів - це становить ${(kilometers / 1.61).toFixed(2)} миль`);

    let miles = +prompt('Введіть значення миль, яке потрібно перевести в кілометри', '0');

    alert(`${miles} миль - це становить ${(miles * 1.61).toFixed(2)} км`);
}
//Task 7 

function task7_home() {
    let balance = +prompt('Введіть, скільки у Вас залишиось грошей на карті', 'грн');

    let price = +prompt('Введіть, скільки коштує 1 літр бензину', 'грн');


    alert(`Ви можете купити ${Math.floor(balance / price)} л бензину, при цьому у Вас залишиться ${(balance % price)} грн`);
}