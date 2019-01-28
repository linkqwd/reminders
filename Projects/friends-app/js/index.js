import { buildFriendsList } from './modules/Data.js';
import Render from './modules/Render.js';
import Filter from './modules/Filter.js';

buildFriendsList().
    then((friends) => Render(friends));