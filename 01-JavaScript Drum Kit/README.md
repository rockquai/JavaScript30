###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## 01 - JavaScript Drun Kit
### [HTML data-* attributes](http://blog.saltfactory.net/using-html5-custom-data-attributes/)
- HTML5의 `Custom Data Attributes` 데이터 표현이 가능
- 태그에 대한 추가적인 정보를 제공하는 일종의 메타데이터(Metadata)
- `data-*` 속성은 HTML 엘리먼트내에서 별다른 역할을 하지 않는 단순한 데이터

```html
<div data-key="65" class="key">
  <kbd>A</kbd>
  <span class="sound">clap</span>
</div>

<audio data-key="65" src="sounds/clap.wav"></audio>
```

### [KeyboardEvent](https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent)
- 키보드에 대한 사용자의 동작을 나타내는 개체
- 입력받은 키는 개별 이벤트로 표시되고 동작의 종류는 이벤트의 종류 ( `keydown` / `keypress`/ `keyup` )로 표시

### [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)
- `add` : 요소의 클래스 목록에 `클래스 추가`
- `remove` : 요소의 클래스 목록에서 `클래스 삭제`
- `toggle` : 요소의 클래스 목록 중 특정 `클래스 전환`
- `contains` : 요소의 클래스 목록이 특정 `클래스를 포함 여부 확인`

### [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
- CSS3의 `transition`가 완료된 이후에 발생하는 이벤트

```js
function removeTransition(e) {
    if ( e.propertyName !== 'transform' ) return;
    // console.log(e.propertyName);
    this.classList.remove('playing'); // css의 'transition: all 0.07s;' 속도에 맞춰서 `.playing` 삭제
}

keys.forEach( key => key.addEventListener('transitionend', removeTransition) );
```
