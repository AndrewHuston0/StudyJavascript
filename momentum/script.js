// variable & type
const a = 5;
const b = 2;
let myName = "hojun";

console.log(5+2);
console.log(5*2);
console.log(5/2);

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName);

myName = "Kimhojun";
console.log("your new name is " + myName);
// a = 8;


// type & value
const amIFat = false;
const amINull = null;
let something;
console.log(amIFat);
console.log(amINull);
console.log(something);
// null은 절대 자연적으로 발생하지 않는 다는 것을 확실히 하기 위해 쓰는 것, 여기엔 값이 "없다"라고 알려줄 때 쓰는 것
// undefined는, 어떤 variable이 메모리에는 있는데 값(value)이 주어지지 않은 것.


// array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

let daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek);

daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const nonsen = [1, 2, "hello", false, null, true, undefined, "hojun"];
console.log(daysOfWeek,nonsen);

daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sund"];
console.log(daysOfWeek);
// 5번째 일 검색?
console.log(daysOfWeek[5]);
// 컴퓨터는 0부터 시작. 따라서 
// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// 변수의 효율적인 관리를 위해 array가 필요

// Object

const playerName = "hojun";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "not at all";
// 위와 같은 경우 중복되는 player의 속성들이다. 결국 player.name, player.points 같은 경우가 더 직관적이고 잘 정돈되어 보일 것이다.

// array의 경우 따로 아래처럼 표시해 주지 않는 이상 의미를 갖지 않는다
// or PlayerList[0] == name .... 그리고 이는 매우 비효율적이다.
const playerList = ["hojun", 121212, true, "not at all"];

// 따라서 object를 사용하는데 이는 객체(entity)에서 다양한 하위 속성/특성(property)들을 가질 수 있다.
const player = {
    // object 안에서는 =를 사용하지 않는다. :를 사용한다.
    name: "hojun",
    points: 10,
    fat: false,
};
console.log(player);
console.log(player.name);
player.name
//console 또한 object라는 의미이며, 그 안의 어딘가에 log라는 것이 있다는 것.
//list는 모든 값이 같은 의미를 갖음

//표현하는 다른 방법으로 이것도 있음
console.log(player["name"]);

// 업데이트도 가능함
console.log(player);
player.name = "Kim";
console.log(player);
// 의문점 : const는 변경할 수 없는데 왜 변경?
// 그러나 우리가 하는 건 const를 수정하는 게 아니라 constant 안에 내용을 바꾸는 것, object 자체를 수정하려고 하면 에러 발생

// player = false;

// other case
player.lastName = "Kim";

console.log(player.points);
player.points = player.points + 15;
console.log(player.points);

// If function is not exist.
console.log("Hello my name is Hojun");
console.log("Hello my name is EK");
console.log("Hello my name is King");
console.log("Hello my name is Jonhson");
console.log("Hello my name is Fynn");

// function
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("hojun", 10);
sayHello("df", 50);
sayHello("kim", 21);
sayHello();

// be careful! 
// sayHello; <- nothing happen => sayHello();
// function의 argument가 한정적인 경우 많은 argumet를 보내도 앞에 순서로 자른다.(문제가 되지 않는다.)
// function내의 argument는 함수 내에서만 작동하고 함수 밖에서는 동작하지 않는다.

// empty arguments
// alert();
// console.log();


// receive data in function


// object function활용

const newplayer =  { 
  name: "hojun",
  sayHellow: function(otherPersonsName){
    console.log("hellow " + otherPersonsName + "nice to meet you!");
  }
};

console.log(newplayer.name);
newplayer.sayHellow("hojun");

// console is object

console.log(console)

// calculater
// console.log, alert, return

const calculater = {
  add: function(a, b){
   return a + b;
   console.log("hello")
  },
  minus: function(a, b){
   return a - b;
  },
  divide: function(a, b){
   return a / b;
  },
  powerof: function(a, b){
   return a ** b;
  }
};

calculater.add(1,1);
calculater.divide(1,1);
calculater.minus(1,1);
calculater.powerof(1,1);

console.log(calculater.add(1, 1));
// alert 시 result is undefined, 보다시피 결과값이 저장되지 않음

const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

// return을 제거하면 undefined임

const bigyo = 96;
function calculatebigyo(ageOfForeigner){
  ageOfForeigner + 2;
  return "hello"
}

const krbigyo = calculatebigyo(bigyo);

console.log(krbigyo);

// retuen 된 값만 반환됨

const addResult = calculater.add(1, 1);
const minusResult = calculater.minus(addResult, 10);
const divideResult = calculater.divide(10, minusResult);
const powerofResut = calculater.powerof(divideResult, minusResult);


console.log(addResult);

// ps. 아주 중요한 개념 : function에서 return을 하면 function은 작동을 끝내고 그 값을 return해버림 (console.log"hello" 참조)


// const yourage = prompt("How old are you?");
// console.log(typeof yourage, typeof parseInt(yourage));
// prompt는 사용자에게  창을 띄울 수 있게 해줌, prompt는 2개의 arguments를 받는데, 하나는 message, 다른 하나는 default/ message는 string(마우스를 갖다 대 보면 나옴)
// prompt라인에서 뭔가를 입력하지 않으면 다음 코드는 실행되지 않고 prompt에서 멈춰있는다. 이것이 더 이상 prompt function을 사용하지 않는 이유, 또 메세지가 안이쁘고 어떤 종류의 css도 적용시킬 수 없음
// 어떤 브라우저는 팝업을 제한하기도 함. 매우매우 오래된 방법
// variable의 type을 보는 방법 : typeof
// parseInt()는 string을 number로 바꿔주는데 이것이 유용한 점은 수의 크기를 비교할 수 있음

//응용

const checkAge = parseInt(prompt("How old are you?"));

// console.log(checkAge); NaN이 나오나 number이 나오나 체크

// console.log(isNaN(checkAge));

// isNaN NaN인지 아닌지 boolean으로 알려줌
// conditional(keyword is 'if')

/* 
if(condition){
  /// condition === true
} else {
  /// condtion === false
} 
condition은 true거나 false거나 두 가지 뿐임(boolean)
*/ 

if(isNaN(checkAge) || checkAge < 0){
  console.log("Please write a real positive number");
} else if(checkAge < 18){
  console.log("You are too young.");
} else if(checkAge>=18 && checkAge <= 50){
  console.log("You can drink");
} else if(checkAge > 50 && checkAge <=80){
  console.log("you should exercise");
} else if(checkAge === 100){
  console.log("wow you are wise");
} else if(checkAge >80){
  console.log("You can do anything you want.")
}

// else if else랑 비슷한데 if를 더한 개념
// = 한 개는 value를 할당하는 것 ===는 양쪽이 같은지 확인한는 것, !== 양쪽이 다른지 확인하는 것(아닌지)

// 두 가지 조건을 동시에 확인 and operator && 둘 모두 true여야 true, or operator || 하나만 true 여도 true

/* 
true || true === true
true || false === true
false || true === true
false || false === fasle

true && true === true
true && false === false
false && true === false
false && false === false
*/

