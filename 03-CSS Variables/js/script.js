'use strict';

// Declare & define variable reference to all inputs inside the 'control' class
const inputs = document.querySelectorAll('.controls input');

// Event Handler function
function handleUpdate() {
    // Get the data-sizing property value if one exists, or set as empty string
     const suffix = this.dataset.sizing || '';
     // Target the entire document and update the value of the CSS variable which corresponds
     // with the 'name' property of the HTML element that triggered this function.
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// Attach event listeners to each input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
