/* according to documentation the datatypes are categorized into primitive and non premitive datatypes based on how data is stored in memory and how they are acessed */

//primitive: the datatypes in which exact memory space is not allocated or known the data required is copied from memory space and we can only make changes to copied data 

// 7 types: String ,Number,Boolean,null,undefined,symbol(i.e for uniqueness of nmbr),BigInt

const score=100;
const scorevalue=100.3;

const isloggedIn=false;
const outsideTemp=null;
let useremail;

// if we pass same values such as same string or any numbers in the symbol the result will be diffrent and show false on console.used in frontend to assign unique ids.
const id= Symbol('123');
const anotherId=Symbol('123');
console.log(id=== anotherId);

const bigNumber=12233423849482330999n;



// Reference(Non primitive datatype)
// Array ,objects and Functions.Data type of all of them is object except function which has datatype said as object function.
// to master js you should master objects,browser EventSource.

const friend=["adil","ahmad","asad","ahsan","asim","rehan"]

//objects are in curly braces as key value pairs
let myobj={

    // variable can have of any datatype in objects
    name:"nabeel",
    age : 20,    
}

const myFunction =function() {
    console.log("Hello world");
}
console.log(typeof(bigNumber));
console.log(typeof outsideTemp);

// Notes of typeof all the datatypes help you in interview and you can read them from ECMA script documentation.