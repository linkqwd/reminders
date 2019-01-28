import FriendCostructor from './FriendCostructor.js';

let friendsData = []

async function buildFriendsList() {
    const response = await fetch(`https://randomuser.me/api/?results=50`);
    const responseData = await response.json();
    const friendsList = responseData.results.map(FriendCostructor.buildFriend);

    friendsData = friendsList;

    return friendsList;
};

export {friendsData as friendsArray, buildFriendsList}