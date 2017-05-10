'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some()
// is at least one person 19?
const isAdult = people.some( person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

console.log('some(): ', { isAdult }); // true

// Array.prototype.every()
// is at least one person 19?
const allAdults = people.every( person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});

console.log('every(): ', { allAdults }); // false

/////////////////////////////////////////////////////////////////////////

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// `ID 823423`을 가지고 있는 객체 반환
const comment = comments.find( comment => {
    return comment.id === 823423;
});

console.log('find(): ', comment); // {text: "Super good", id: 823423}

// Array.prototype.findIndex()
// Find the comment with this ID 823423 and delete it
// `ID 823423`을 가지고 있는 객체 삭제
const index = comments.findIndex( comment => {
    return comment.id === 823423;
});

console.log('findIndex(): ', index); // 1

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newComments);
