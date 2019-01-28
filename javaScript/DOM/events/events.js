// start displaying all events on the document object
// monitorEvents(document); 
// turn off the displaying of all events on the document object.
// unmonitorEvents(document);

const title = document.querySelector('.card-title')
const fn = function () { console.log('check') }

// === .addEventListener() ===
// target.addEventListener(<type>, <listener[options]>, <eventPhase>);
// 3 event phases: capturing -> at target > bubbling 
title.addEventListener('click', function () { console.log(this); });
// document would be first in console because of third parameter true which stands for capturing phase
document.addEventListener('click', function () { console.log('The document was clicked'); }, true);
document.body.addEventListener('click', function () { console.log('The document body was clicked'); });

// === .removeEventListener() ===
// <target>.removeEventListener(<type>, <listener>); // <listener> mustbe the same function which was usef fir addEventListener
// adds a listener for clicks, to run the `fn` function
document.addEventListener('click', fn);
// immediately removes the click listener that should run the `fn` function
document.removeEventListener('click', fn);

// === The Event Object ===
document.addEventListener('click', function (event) {
    console.log(event);
    event.preventDefault(); //console.log("Look, ma! We didn't navigate to a new page!");
}, true);

// === Event Delegation ===
// event.target gives direct access to the span element that was clicked.
// Also event.target triggers when <li> or <ul> was clicked
// to triiger only desired span, its needed to ensure that it was actually clicked a <span> tag before running message
const customUl = document.createElement('ul');
function respondToTheClick(event) {
    // solution of a span probliem: verify tag by Checking the Node Type in Event Delegation
    if (event.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('== A span was clicked with text ' + event.target.textContent);
    }
}
for (let i = 1; i <= 50; i++) {
    const newElement = document.createElement('li');
    const span = document.createElement('span')
    newElement.classList.add('collection-item')
    newElement.appendChild(span).textContent = 'This is paragraph number ' + i;
    customUl.appendChild(newElement)
}
customUl.addEventListener('click', respondToTheClick);
document.querySelector('.collection').appendChild(customUl);

// === .createDocumentFragment() === (optimization reflow and repaint)
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // reflow and repaint here - once