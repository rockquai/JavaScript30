###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## [03 - Scoped CSS Variables and JS](https://rockquai.github.io/JavaScript30/03-CSS%20Variables/)
### [CSS variables](https://github.com/nhnent/fe.javascript/wiki/February-29,-2016-:-%EC%98%AC%ED%95%B4%EC%97%94-%EC%88%9C%EC%88%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%8D%A8%EB%B3%B4%EB%8A%94-%EA%B1%B4-%EC%96%B4%EB%96%A8%EA%B9%8C%EC%9A%94%3F#css-variables)
- `:root` 요소에 대해 새 스타일을 선언하고 스타일 정의 내에 두개의 하이픈 `--`을 붙여서 변수를 선언.
- `img` 요소에 새로운 스타일을 선언하고 배경, 필터 및 패딩 속성을 루트 요소에서 정의한 변수로 설정.

```css
:root {
  --base: goldenrod;
  --blur: 10px;
  --padding: 10px;
}

img {
  background: var(--base);
  filter: blur(var(--blur));
  padding: var(--padding);
}
```

---

### [Array.prototype.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- `forEach()` 메소드는 배열 요소마다 한 번씩 제공한 함수를 실행합니다.

```js
arr.forEach(callback[, thisArg])
```

- `callback` : 각 요소에 대해 실행할 함수, 인수 셋을 취하는:
    - `currentValue` : 배열에서 현재 처리 중인 요소.
    - `index` : 배열에서 현재 처리 중인 요소의 인덱스.
    - `array` : forEach()가 적용되고 있는 배열.
- `thisArg` : 선택 사항. callback을 실행할 때 this로서 사용하는 값.
-  `반환값` : undefined.

```js
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```
