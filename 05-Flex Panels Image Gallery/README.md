###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## [05 - Flex Panels Image Gallery](https://rockquai.github.io/JavaScript30/05-Flex%20Panels%20Image%20Gallery/)

### [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- flexbox의 콘텐츠는 어떤 방향에든 위치할 수 있으며, 동적으로 변경가능한 순서를 지정할 수도 있고, 가용한 공간 내에서 크기와 위치를 자동으로 조정

### [includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- 하나의 문자열이 다른 문자열에 포함되어 있는지를 결정하고 대소문자를 구별하며, 그 결과를 true 또는 false 로 반환.

```js
function toggleActive(e) {
    // console.log(e.propertyName); // CSS 속성 : flex-grow, font-size
    // `flex`단어가 포함되면 '.open-active' 클래스 토글
    if ( e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
```
