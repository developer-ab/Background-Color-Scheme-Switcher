// java script code for the scheme changer

// selecting the buttons and the body
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// iterating the Buttons Nodelist. 
buttons.forEach((button) => {

    // listening to the click event on the each element buttons.
    button.addEventListener('click', (event) => {
        // changing the color of background with the help of button id.
        body.style.backgroundColor = event.target.id;
    });
});





