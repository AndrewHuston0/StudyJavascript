/*
// variable & type 
const a = 5; // const는 안의 값을 수정할 수 없는 변수, let은 안의 값을 수정할 수 있는 변수 다만 둘 다 재선언(const, let을 다시 써서 같은 변수를)은 불가능하며, let의 경우 선언한 이후에는 let을
붙일 필요 없이 그냥 변수 이름 = ... 해서 값을 업데이트 할 수 있음, 추가로 둘 모두 같은 코드블럭 내에서만 쓸 수 있음, ex.함수 안에서 썼던 변수를 전역변수로 사용 못함. Var의 문제점은 전역변수룰 함수
내에서 재정의 할 경우 전역변수에 영향을 미칠 수 있기 때문에 많은 오류를 불러일으킬 수 있음
const b = 2;
let myName = "hojun";
// let과 const, var의 차이점 https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/ 참조
console.log(5+2);
console.log(5*2);
console.log(5/2);

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName); // JS에서는 +를 String에 사용하면 연결되어 출력됨. int에 사용하면 연산함.

myName = "Kimhojun";
console.log("your new name is " + myName);
// a = 8;


// type & value
const amIFat = false; // boolean type : true, false(keyword like python)
const amINull = null; // 안에 값이 없다는 것을(비어있다) 명시 - 의도적
let something;
console.log(amIFat); // false 출력
console.log(amINull); // null 출력
console.log(something); // undefined 출력(선언은 했지만 값을 넣어주지 않았기 때문에)
// null은 절대 자연적으로 발생하지 않는 다는 것을 확실히 하기 위해 쓰는 것, 여기엔 값이 "없다"라고 알려줄 때 쓰는 것
// undefined는, 어떤 variable이 메모리에는 있는데 값(value)이 주어지지 않은 것. (비의도적일 가능성이 높음)


// array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

let daysOfWeek = mon + tue + wed + thu + fri + sat + sun; // 그냥 string
console.log(daysOfWeek); 

daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; // array
const nonsen = [1, 2, "hello", false, null, true, undefined, "hojun"];
console.log(daysOfWeek,nonsen);

daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sund"];
console.log(daysOfWeek);
// 5번째 일 검색?
console.log(daysOfWeek[5]); //이러면 다섯번째가 아니라 6번째 날이 나옴
// 컴퓨터는 0부터 시작. 따라서 
// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun"); //push를 사용해서 마지막 부분에 삽입

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
//이는 console 또한 object라는 의미이며, 그 안의 어딘가에 log라는 것이 있다는 것.
//list는 모든 값이 같은 의미를 갖음

//표현하는 다른 방법으로 이것도 있음
console.log(player["name"]);

// 업데이트도 가능함
console.log(player);
player.name = "Kim";
console.log(player);
// 의문점 : const는 변경할 수 없는데 왜 변경?
// 그러나 우리가 하는 건 const를 수정하는 게 아니라 constant 안에 내용을 바꾸는 것, object 자체를 수정하려고 하면 에러 발생

// player = false; // 이렇게 되면 에러 발생

// other case
player.lastName = "Kim"; //이렇게 되면 property를 새로 추가할 수 있다.

console.log(player.points);
player.points = player.points + 15;
console.log(player.points);

// If function is not exist. //계속해서 반복되는 코드를 실행하려면 같은 코드를 써줘야 해서 비효율적
console.log("Hello my name is Hojun");
console.log("Hello my name is EK");
console.log("Hello my name is King");
console.log("Hello my name is Jonhson");
console.log("Hello my name is Fynn"); 

// function 같은 코드를 캡슐화해서 몇 번이고 재사용이 가능하게 만들어 주는 것
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("hojun", 10);
sayHello("df", 50);
sayHello("kim", 21);
sayHello();

// be careful! 
// sayHello; <- nothing happen => sayHello();
// function의 argument가 한정적인 경우 많은 argumet를 보내도 앞에 순서로 자른다.(문제가 되지 않는다.) 다만 parameter가 부족할 때는 문제가 된다(default값을 지정해 주지 않았다면)
// function내의 argument는 함수 내에서만 작동하고 함수 밖에서는 동작하지 않는다.

// empty arguments
// alert();
// console.log();


// receive data in function
-----------------------------------------------------------------------------------------------7월 22일 토요일 여기까지 복습

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
/*

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
-----------------------------------------
HTML - JS

// <h1>의 id를 가져오는 방법
// document.getElementById("title"); //이 함수는 string을 받는 함수
/* const tilte = document.getElementById("title"); //title이 null인데 null의 innerText를 변경하려고 했다는 말
tilte.innerText = "Got you!"
console.log(tilte.className);
*/

// hello class
/* const hellos = document.getElementsByClassName("hello");
console.log(hellos); //console에서 출력되는 걸 보다시피 array */

// 여기서 HTML 수업의 효율성을 위해 위의 모든 것을 주석처리 하겠음
// const title = document.getElementsByTagName("h1"); //노마드 코더 기준에서 element를 가져오는 가장 멋진 방법은 querySelector와 querySelectorAll 
// querySelector는 element를 CSS방식으로 검색 할 수 있음

/*
// console.log(title); // title 자체는 object가 아니고 array이기 때문에 뭘 할 수 없음
// 위 코드와 비교
const tilte = document.querySelector(".hello h1"); // classname으로 get element할 때는 class name을 넘겨준다는 것을 JS가 알지만, querySelector에선 hello가 class name이라는 것과 그 안의
// h1을 명시해줘야함.

console.log(tilte);

// query selector를 쓸 때 여러가지 h1이 있더라도 첫 번째 것만 출력된다.
// 3개 모두 가져오고 싶다면 querySeclectorAll 해주면됨
const tilteAll = document.querySelectorAll(".hello h1");

console.log(tilteAll);

/*
const title = document.querySecelector("#hello");
const title = document.getElementById("hello");
위 두개는 같은 의미로 ID를 찾을 수 있음, 다만 쿼리셀렉터의 좋은 점은 id하위의 form을 가져온다던지 ("#hello form") 할 수 있음
*/
/*
tilte.innerText = "Hello"; // 이렇게 수정할 수 있는 이유는 HTML 파일 내에 script.js파일이 import되어 있기 때문에 가능
// 내부를 보고 싶다면 console.log 대신 console.dir 를 사용할 것(object로 표현된 element를 보여줌)
// 안에 있는 property들을 변경할 수도 있고, 변경하지 못할 수도 있는데 좋은 것은 style임
// style또한 object이고 안에 여러가지 파일이 있는데 예를 들오 color를 바꿔보자

tilte.style.color = "blue"; //여기서  HTML의 h1의 style을 JS를 사용해서 변경할 수 있다는 점이 매우 멋지다.
// 따라서 JS가 browser에서 얼마나 강력한지 알아야 함. 하지만 대부분 작업할 일은,  event를 listen하는 것
// event란 : 마우스가 해당 line위로 올라가거나, click을 한다거나, 입력을 끝낸다거나, 이름을 적거나, enter를 누르거나... 등등등
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  h1.style.color = "blue";
}

// h1.addEventListener("click", handleTitleClick);// 어떤 event를 listen할 지 정해주는 것
// 이 문장의 의미는 여기서 click 이벤트를 listen하고, click event가 발생하면, handleTitleClick일 동작함. 여기서 중요한 것은 fucntion에 괄호를 넣지 않아야 된다는 것 
// 괄호를 넣어줄 경우 click에 관계없이 그냥 실행됨 _ 설명을 들어보면 JS에 function만 넘겨주고 JS가 실행시켜주는 것이라고 함
// handleTitleClick() 그냥 이것만 써서 실행시킬 때와 차이

// recap : event를 listen하기 위해서는(예를들면 click event) HTML element를 가져와서, addEventListener function을 실행시켜 주면 되는데, 어떤 event를 listen하고 싶은 지 명시해 줘야함.
// 그리고 event를 했을 때 어떤 함수를 실행시킬지도 정해야 함.

// 내가 listen하고 싶은 event를 찾는 가장 좋은 방법은 Mozilla Developer Network인 MDN에 검색을 해보는 것
// web API가 포함된 파일이 좋은데 왜냐하면 이것이, JavaScript관점의 HTML heading Element란 의미이기 때문
// 또는 console.dir로 찾을 수도 있고, on이 붙어있는 것이 사용할 수 있는 event(사용할 때는 on을 떼고 써야함)

function handleMouseEnter(){
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// JS로도 style을 변경시킬 수 있지만, 대부분의 경우에 style은 css를 통해서 변경되어야 함.
// addEventListener를 통해서 event를 할당할 수도 있고, oneventname property에 event listener를 할당함으로써 event를 listen할 수 있음
// 예를 들어 위의 click event할당문장을
h1.onclick = handleTitleClick; // 이렇게 바꿀 수도 있음.
// 이중 노마드 코더가 addEventListener를 더 선호하는 이유는 나중에 .removeEventListener를 통해서 이벤트를 삭제할 수 있기 때문에

// 이번엔 title말고 window에 대해 알아보자
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);

// document.body / head / title같은 것은 중요하니까 존재하지만, 나머지는 querySecelector나 getElementById로 찾아와야 함

function handleWindowCopy(){
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

// wifi의 연결여부
function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOD");
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");
/*
function handleTitleClick(){
  if(h1.style.color === "blue"){
    h1.style.color = "tomato";
  } else { //필수적이진 않지만 사용해야 함.
    h1.style.color = "blue";
  }
}
*/
/*
// code를 더 간결하게 하는 법 : 현재의 color 상태를 저장함으로써
function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor; // 새로 바뀌는 상태(변환할 수 있는 변수 설정)
  if(currentColor === "blue"){
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; // 이 라인을 안 쓰면 아무것도 변경이 안됨
}
h1.addEventListener("click", handleTitleClick);

// 다만 style 파일을 css에서 다루는 걸 더 선호함
/*
요약
step 1. element를 찾아라
step 2. event를 listen하라
step 3. 그 event에 반응해라
*/

// 노마드 코더는 일을 할 때 그 일에 적합한 도구를 사용하길 원하고, style을 작업할 때 적합한 도구는 css, 그리고 animation에 적합한 도구는 JavaScript 따라서 그는 JS안에서 CSS작업을 하는 것을 원치 않음

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  const clickedClass = "active sexy-font" //이걸 방지하는 방법이 여기에 sexy-font를 추가시키는 것/ 그러나 이것은 좋은 방법이 아님. 왜냐하면 HTML에서 className을 바꾸면 JS,CSS파일 모두 고쳐줘야 하므로
  // 따라서 정말로 해줘야 될 것은 JS로 모든 className을 변경하지 않는 것. 우리가 원하는 것은 sexy-font를 삭제하지 않고 active class를 바꾸는 것
  // h1.className = "active"; // className을 정확히 적어줘야함 / css 클래스와 연동시키는 것
  // 이 h1.className은 getter이면서 setter임 : 여러분이 console.log로 h1.className을 출력한다면 => class를 바꿀 수 있다는 것
  if(h1.className === clickedClass){
    h1.className = "";
  } else {
    h1.className = clickedClass; //다만 여기 이렇게 className을 string으로 중복 사용하게 될 경우 오류(철자 틀림으로 인한 미실행)를 일으킬 수 있기 때문에 function내에 변수를 지정해 주는 것이 안전
  } // "active" -> clickedClass로 변경 이렇게 되면 변수에 className을 한 번만 복사 붙여넣기 하면 되고, 변수 이름이 틀릴 경우 console에서 변수가 정의되지 않았다고 알려줄 것임
}// sexy-font와 연결하여... 처음에 sexy-font를 갖고 시작하지만 해당 clas를 대체해버림

h1.addEventListener("click", handleTitleClick);

// 이 방법이 위의 방법보다 더 JS코드가 적고, 덜 헷갈리며(직관적이며), 간단함
