const cardTitle = document.querySelector('.card-title')
const taskTitle = document.querySelector('#task-title')

// === createElement ===
const h5 = document.createElement('h5') // It won't work if add .textContent to node element on this stage

// === .appendChild() ===
cardTitle.appendChild(h5).innerText = 'I\'m inner text of appended child'; // Needs An HTML Element to put in. Can tup only node 
taskTitle.appendChild(h5).innerText = 'I\'m inner text of appended child'; // moves created element FROM cardTitle to taskTitle, not duplicating it

// === .createTextNode() === can be replacable by .innerHTML or innerText or textContent
const textNode = document.createTextNode('I am the text for the span!')
const span = document.createElement('span');
span.appendChild(textNode)
cardTitle.appendChild(span) // now it is possible to append node element with a text content

// === .insertAdjacentHTML() ===
// Two arguments: - the location of the HTML ( beforebegin , afterbegin , beforeend , afterend ) - the HTML text
// <!-- beforebegin -->
// <p>
//     <!-- afterbegin -->
//     Existing text/HTML content
//     <!-- beforeend -->
// </p>
// <!-- afterend -->
cardTitle.insertAdjacentHTML('beforeend', '<h1>Hi</h1>');

// === .createDocumentFragment() === (optimization reflow and repaint)
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // reflow and repaint here -- once!