const accountId=16167 // it is used where value is not changed
let accountEmail= "nabeel123@gmail.com"; // same as var but better than it.
var accountPassword= "nabeel123"; // it is not recomended to use in JS.
accountCity= 'jaipur' // js has property that it is secure bcs we dont need the const or var to declare variable.but it is not good practice.
let accountState; // it has no value so it is shown undefined.

// accountId=2; // assignment of const variable again is not allowed.

accountEmail= 'ns@gmail.com';
accountPassword='ns321';
accountCity = "burewala";

console.log(accountId);

/* Prefer not to use var in declare of variable
    because of issue in block scope("{}") and functional scope("{}").
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);