// 1. do everything directly with event directly 

/*
<button onclick="document.body.style.backgroundColor='yellow'">Click me: yellow</button>
*/





// 2. Call a function in event handler. link in with js file. and write the function behind the secene

/* <button onclick="makemeRed()">click me: Red</button> */

function makemeRed() {
    document.body.style.backgroundColor = 'red'
}







// 3. handle by setting an ID in element, Get that id with getElementById in JS in a constant. Add event to the id holder const. Just write the function name in event (makeBlue).  Do not call it here   XX (makeBlue) XX    .     write the function after 

/*   <button id="make-blue">click me: blue</button>  */

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}







// 4. Handle event by setting up an id in element. in id.event write an annonymous function.

/*  <button id="make-green">click me: green</button> */

const greenButton = document.getElementById('make-green');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}








// 5. Handle by adding addEventListener on Id...... set event type,  and a function name. without calling it.  write function.

/*   <button id="make-chocolate">click me: chocolate</button>   */

const chocolateButton = document.getElementById('make-chocolate');
chocolateButton.addEventListener('click', makeChocolate)

function makeChocolate() {
    document.body.style.backgroundColor = 'chocolate'
}








// 6. Handle by adding addEventListener on Id...... set event type,  and write an annonymous function in addEventListener. 

/*<button id="make-hotpink">click me: hotpink</button>*/

const hotpinkButton = document.getElementById('make-hotpink')
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
})







// 7. Handle by setting addEventListener directly on id.... without setting the id in a const. directly calling the id and addEventListener in the same line. add an annonymous function on addEventListener.

/*<button id="make-cyan">click me: cyan</button>*/

document.getElementById('make-cyan').addEventListener('click', function () {
    document.body.style.backgroundColor = 'cyan'
})

