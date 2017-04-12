###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## 02 - clock
### [new Date()][https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date]
- 생성자는 Date 객체가 로컬 시간에 따른 현재 날짜와 시간값을 가지도록 합니다. 만약 전달값 중 일부만 있다면, 나머지 빠진 전달값들은 모두 0이 됩니다.
- 모든 전달값을 제공하려면 최소한 연도, 월, 일은 포함해야 하며, 시, 분, 초 그리고 밀리초는 생략할 수 있습니다.

### [Date.prototype.getSeconds()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
- `getSeconds()` 메서드는 현지 시간에 따라 지정된 날짜의 초를 반환합니다.
- 현지 시간에 따라 지정된 날짜의 `초`를 나타내는 0에서 59 사이의 정수입니다.

### [Date.prototype.getMinutes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
- `getMinutes()` 메서드는 현지 시간에 따라 지정된 날짜의 분을 반환합니다.
- 현지 시간에 따라 지정된 날짜의 `분`을 나타내는 0에서 59 사이의 정수입니다.


```js
const now = new Date();

// 초 시계 각도
const seconds = now.getSeconds();
const secondHandDegrees = ((seconds / 60) * 360) + 90;

// 분 시계 각도
const minutes = now.getMinutes();
const minuteHandDegrees = ((minutes / 60) * 360) + 90;

// 시 시계 각도
const hourHandDegrees = ((minutes / 12) * 360) + 90;
```
