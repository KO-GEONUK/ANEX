// variables (const let)
// constant(상수)는 값이 바뀔 수 없다

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

const a = 5;
const b = 2;
let myName = "KO";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "KO-GEONUK"

console.log("your new name is " + myName);

// Boolean (true or false)

const amICat  = false;
console.log(amICat)
const amIMan  = true;
console.log(amIMan)

// null은 자연적으로 발생하지 않는다 variables 안에 어떤것이 없다는 것을 지정
// undefined는 어떤 variables이 메모리는있는데 값이없다

const A = null;
let something;
console.log(A, something);

// Arrays

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];

const array01 = [1, 2, "hello", false, null, true ,undefined, "KO"]

console.log(daysOfWeek, array01);
// get item from Array
console.log(daysOfWeek[4]);

// change Array
// add one more day to the Array
array01[7] = "cat"
array01.push("GEONUK");

console.log(array01);

// Objects 

const playerName = "KO";
const playerPoints = 333;
const playerCat = false;
const playerFrom = "korea";

const player = {
    name: "KO",
    points: 333,
    cat: false,
    from: "korea",
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.cat = true;
console.log(player);
player.lastName = "GEONUK";
console.log(player);
player.points = player.points + 3000;
console.log(player.points);

// Functions 계속 반복해서 사용할 수 있는 코드조각

function sayHi(name, age){
    console.log("hi my name is " + name + " and I'm " + age);
}

sayHi("KO" , 11);
sayHi("GEON", 22);
sayHi("UK", 33);

function plus(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}

plus(11, 22);
divide(11, 22);

const player1 = {
    name: "KO",
    sayHello: function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice too meet you");
    },
};

console.log(player1.name);
player1.sayHello("GEONUK");
player1.sayHello("nyang");

// Returns

const myAge = 26;

function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(myAge);

console.log(krAge);

const calculator = {
    add: function(a, b) {
        return a+b
    },
    min: function(a, b) {
        return a-b
    },
    mul: function(a, b) {
        return a*b
    },
    div: function(a, b) {
        return a/b
    },
    pow: function(a, b) {
        return a**b;
    }
};

const addResult = calculator.add(11, 22);
const minResult = calculator.min(addResult, 22);
const mulResult = calculator.mul(11, minResult);
const divResult = calculator.div(mulResult, addResult);
const powResult = calculator.pow(divResult, minResult);

console.log(addResult);
console.log(minResult);
console.log(mulResult);
console.log(divResult);
console.log(powResult);

// Conditionals
// typeof 타입확인, parseInt타입을 number로바꿔줌, isNaN NaN인지아닌지 Boolean로결과를 알려줌

const age = parseInt(prompt("How old are you"));

if(isNaN(age) || age < 0){
    console.log("plz write a real positive number");
} else if (age < 18) {
    console.log("your age too young");
} else if (age >= 18 && age <= 50 ) {
    console.log("your can drink");
}  else if (age > 60 && age <= 80 ) {
    console.log("you should exercise");
} else {
    console.log("your age too old");
}
