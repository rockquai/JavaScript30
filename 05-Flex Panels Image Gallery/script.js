'use strict';

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log(e.propertyName); // CSS 속성 : flex-grow, font-size
    // `flex`단어가 포함되면 '.open-active' 클래스 토글
    if ( e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach( panel => panel.addEventListener('click', toggleOpen));
panels.forEach( panel => panel.addEventListener('transitionend', toggleActive));
