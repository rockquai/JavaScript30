'use strict';

// Create references to the HTML elements that we want to transform
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); // Create new Date object

  // Get current seconds, calculate the degree shift, and apply the styling
  const seconds = now.getSeconds();
  const secondHandDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;

  // Get current minutes, calculate the degree shift, and apply the styling
  const minutes = now.getMinutes();
  const minuteHandDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;

  // Hour hand transformation can utilize the data gathered for the minute
  // hand, with a minor alteration in how the degree shift is calculated.
  const hourHandDegrees = ((minutes / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}
// Call function once every second
setInterval(setDate, 1000);
