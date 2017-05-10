###### JavaScript30 : 30 Day Vanilla JS Coding Challenge

##### [출처: javascript30.com](https://javascript30.com/)

## [06 - Ajax Type Ahead](https://rockquai.github.io/JavaScript30/06-Ajax%20Type%20Ahead/)

### [Fetch API](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)
- Fetch API 의 가장 유용하고, 핵심적인 함수는 `fetch()` 함수
- 가장 간단한 형태의 `fetch()` 함수는 URL 을 인자로 받고 응답을 처리하기 위한 `promise`를 반환.
- 응답을 처리할 때 `Response` 객체를 이용 할 수 있다

```js
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
```
