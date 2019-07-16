// Importing an export default is almost the same as importing a normal export; you just don’t need the curly braces to define the name of what you’re importing from the file!
import subtract from "math_functions";
subtract(7,4);

// function capitalizeStrings(),  comes from the file "string-functions".
import { capitalizeString } from "some_file";
capitalizeString("hello!");

// If you want to import everything possible from a file, then you use the import * as _ from syntax, provided by ES6.
import * as str from "some_file";
str = str;

// Default export
export default someDataType

// Multiple data export, exported with keyword 'as' makes it reachable by it's new name
export {friendsData as friendsArray, buildFriendsList}

// Multiple variable export from file
export const foo = "bar";
export const bar = "foo";
