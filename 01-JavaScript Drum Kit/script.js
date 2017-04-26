'use strict';

function playSond(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // data-key값이 없으면 함수 종료
    audio.currentTime = 0;
    audio.play(); // `audio` 오디오 파일을 재생
    key.classList.add('playing'); // `.playing` 추가
}

function removeTransition(e) {
    if ( e.propertyName !== 'transform' ) return;
    // console.log(e.propertyName);
    this.classList.remove('playing'); // css의 'transition: all 0.07s;' 속도에 맞춰서 `.playing` 삭제
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition) );
window.addEventListener('keydown', playSond);
