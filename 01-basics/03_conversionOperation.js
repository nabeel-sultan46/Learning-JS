// let score="33";
// let score="33abc"; // it shows value NaN(not a number) after conversion which is also a datatype).
// let score=null; // it converts null to the zero when we convert it to number.
// let score=undefined;// it shows value NaN(not a number) after conversion which is also a datatype).
// let score=true; // it is coverted to 1 and false is coverted to 0.
let score="Nabeel"; // it also shows NaN after conversion.

// console.log(typeof score);
// console.log(typeof(score));
// console.log(score);

// for conversion
let valuetoNumber= Number(score)
// console.log(typeof valuetoNumber);
// console.log(valuetoNumber);


/*  Notes
 "33" => 33
 "33abc" => NaN but its datatype is a number
 true => 1;  false=> 0
*/


let isloggedIn="nabeel";

let booleanisloggedIn=Boolean(isloggedIn);
// console.log(typeof booleanisloggedIn);
// console.log(booleanisloggedIn);

/*  Notes
 1=> true, 0=> false
 "" => false
 "nabeel"=> true
*/

let somenumber = 33;

let stringNumber =String(somenumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);





//   ******************** Operators*********************

let value= 3;
let negvalue= -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

// str1="Hello "
// str2= "Nabeel"
// str3=str1+str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");//js work with that the starting datatype should considered as data types of all values

// console.log((3+4)*5%3); //we should work with code simlicity apply bracket b/w operations

console.log(+true); //this is also a method to conversion boolean to a number.
console.log(+"");  // //this is also a method to conversion of empty space to number as it shows false value on conversion.

let num1,num2,num3;
num1=num2=num3=2+2; // this type of assigning is not recomended.

let gameCounter=100;
++gameCounter; //study prefix and postfix counter from mdn website
console.log(gameCounter);

// to study topic of conversion use website which was bookmarked with mdn