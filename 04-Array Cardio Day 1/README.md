###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## 04 - Array Cardio Day 1

```js
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

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
```

### [Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
: `filter()` 메소드는 제공된 함수로 구현된 테스트를 통과하는 모든 요소가 있는 새로운 배열을 만듭니다. <br>

```js
var new_array = arr.filter(callback[, thisArg]);
```
- `callback` : 배열의 각 요소를 테스트하는 함수. 인수 (element, index, array) 와 함께 호출됨. 요소를 (새 배열에) 계속 두기 위해 true를 반환, 그렇지 않으면 false.
- `thisArg` : 선택 사항. callback을 실행할 때 this로 사용하는 값.
- `반환값` : 새로운 배열 반환 (true를 반환, 그렇지 않으면 false)

#### Filter the list of inventors for those who were born in the 1500's

```js
const inventors_from_1500s = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
```

---

### [Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
: `map() 메소드` 는 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서, 새로운 배열을 반환합니다. <br>

```js
arr.map(callback[, thisArg]);
```

- `callback` : 새로운 배열 요소를 생성하는 함수로 다음 세 가지 인수를 가집니다.
- `thisArg` : 선택항목. callback을 실행할 때 this로 사용되는 값. 기본값은 Window 객체.
- `반환값` : 새로운 배열을 반환

#### Give us an array of the inventors first and last names

```js
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

---

### [Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
: `sort() 메소드` 배열의 요소를 적절한 위치에 정렬하고 배열을 반환합니다. 종류가 반드시 안정적 일 필요는 없습니다. 기본 정렬 순서는 문자열 유니 코드 코드 포인트에 따릅니다.<br>

```js
arr.sort()
arr.sort(compareFunction)
```

- `compareFunction` (Optional) : 정렬 순서를 정의하는 함수를 지정합니다. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.
- `반환값` : 소트 된 배열.

```js
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
```

---

### [reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
: `reduce() 메소드` 누산기(accumulator) 및 배열의 각 값(좌에서 우로)에 대해 (누산된) 한 값으로 줄도록 함수를 적용합니다. <br>

```js
arr.reduce(callback[, initialValue])
```

- `callback` : 배열의 각 (요소) 값에 실행할 함수, 아래의 인수(argument) 4개
    - `previousValue` : 이전 마지막 콜백 호출에서 반환된 값 또는 공급된 경우 initialValue. (아래 참조.)
    - `currentValue` : 배열 내 현재 처리되고 있는 요소(element).
    - `currentIndex` : 배열 내 현재 처리되고 있는 요소의 인덱스.
    - `array` : reduce에 호출되는 배열. <br>
- `initialValue` : 선택사항. callback의 첫 호출에 첫 번째 인수로 사용하는 값.

#### Sum up the instances of each of these

```js
const transportaion = data.reduce(function (obj, item) {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportaion); // {car: 5, truck: 3, bike: 2, walk: 2, van: 2}
```

---

### [Array.from()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
: `Array.from() 메소드`는 유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.<br>

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

- `arrayLike` : 배열로 변환할 유사 배열 혹은 반복 가능한 객체.
- `mapFn` : 선택 사항. 배열 모든 요소에 호출 할 Map 함수.
- `thisArg` : 선택 사항. mapFn 실행 시에 this로 사용할 값.

```js
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
                .map( link => link.textContent )
                .filter( streetName => streetName.includes('de') );
```
