import DOM from './DOM.js';

let capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function renderHTMLFriendsCards(friendsArray) {
    let friendsHTMLCards = friendsArray.map(buildHTMLCard);

    function buildHTMLCard(friend) {
        return `
        <li class="${DOM.friendCard} ${!friend.isPresentInList ? 'hidden' : ''}" id="${friend.id}">
            <div class="b-friends-list__friend-item-wrapper">
                <div class="b-friends-list__img-wrapper">
                    <img class="b-friends-list__image" src="${friend.photo}" alt="test">
                </div>
                <div class="b-friends-list__info-wrapper">
                    <div class="b-friends-list__friend-name b-friends-list__info-row">
                        <span>${capitalizeFirstLetter(friend.name)} ${capitalizeFirstLetter(friend.lastName)}</span>
                    </div>
                    <div class="b-friends-list__friend-age b-friends-list__info-row">
                        <span>Age: ${friend.age}</span>
                    </div>
                    <div class="b-friends-list__friend-gender b-friends-list__info-row">
                        <span>Gender: ${friend.gender}</span>
                        </div>
                    <div class="b-friends-list__friend-phone b-friends-list__info-row">
                        <span>Phone: ${friend.cell}</span>
                    </div>
                </div>
            </div>
        </li>`;
    }

    DOM.friendHolderSelector.innerHTML = friendsHTMLCards.join('');
}
