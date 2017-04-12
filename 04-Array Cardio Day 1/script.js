'use strict';

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 방법1.
const fifteen = inventors.filter(function(inventor) {
    if ( inventor.year >= 1500 && inventor.year <= 1600 ) {
        return true; // keep it;
    }
});
console.table(fifteen);

// [방법2. Refactoring] arrow function expression
const inventors_from_1500s = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.table(inventors_from_1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 방법1.
// const ordered = inventors.sort(function(a, b) {
//     if ( a.year > b.year ) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// [방법2. Refactoring] arrow function + conditional ternary operator(삼항식)

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// 방법1.
// var totalYears = 0 ;
// for (var i = 0; i < inventors.length; i++ ) {
//     totalYears += inventors[i].year;
// }

// 방법2. reduce()
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    // if ( lastGuy > nextGuy ) {
    //     retur -1;
    // } else {
    //     reutnr 1;
    // }

    return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris <= 여기 주소로 접속후 콘솔에서 확인
// 전개 연산자(spread operator)는 식(expression)이 여러 인수(함수 호출 용)나 여러 요소(배열 리터럴 용) 또는 여러 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 합니다.
// Array.from() 메소드는 유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.
const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];
const links = Array.from(category.querySelectorAll('a'));
const de = links
                .map( link => link.textContent )
                .filter( streetName => streetName.includes('de') );

// 7. sort Exercise
// Sort the people alphabetically by last name
// 방법1.
// const alpha = people.sort(function (lastOne, nextOne) {
//     const [aLast, aFirst] = lastOne.split(', ');
//     const [bLast, bFirst] = nextOne.split(', ');
//     return aLast > bLast ? 1 : -1;
// });

// 방법2.
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportaion = data.reduce(function (obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportaion); // {car: 5, truck: 3, bike: 2, walk: 2, van: 2}
