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