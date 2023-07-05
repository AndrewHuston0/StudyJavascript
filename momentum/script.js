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
