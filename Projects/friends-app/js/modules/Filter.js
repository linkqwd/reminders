import DOM from './DOM.js';
import Render from './Render.js';
import { friendsArray } from './Data.js';

function filteringByName() {
    friendsArray.forEach((friend) => friend.fullName.search(new RegExp(this.value.toLowerCase())) != -1 ? friend.showInList() : friend.removeFromList());
}

function sortingOptions(e) {
    let clickTarget = e.target.closest(DOM.radioBtns);
    if (clickTarget) {
        switch (clickTarget.value) {
            case 'all':
                friendsArray.forEach((friend) => friend.showInList());
                break;
            case 'male':
                friendsArray.forEach((friend) => friend.gender === 'male' ? friend.showInList() : friend.removeFromList());
                break;
            case 'female':
                friendsArray.forEach((friend) => friend.gender === 'female' ? friend.showInList() : friend.removeFromList());
                break;
            case 'nameAsc':
                Render(friendsArray.sort((b, a) => b.name < a.name ? -1 : 1));
                break;
            case 'nameDesc':
                Render(friendsArray.sort((a, b) => b.name < a.name ? -1 : 1));
                break;
            case 'ageAsc':
                Render(friendsArray.sort((a, b) => a.age - b.age));
                break;
            case 'ageDesc':
                Render(friendsArray.sort((b, a) => a.age - b.age));
                break;
        }
    }
}

document.getElementById(DOM.inputNameSearchId).addEventListener("keyup", filteringByName);
document.querySelector(DOM.filtersBlock).addEventListener('click', sortingOptions);

export default null