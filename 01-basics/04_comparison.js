/* comparison b/w same datatypes using comparison operator is efficient way.we should always use them for simpler and easy code.*/
/* the answer of all comparisons in whole js will be in boolean i.e. true or false.*/
// console.log(2>1); // 
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

/* the comparison we write below are not good for use and are not simple so we should not use them but should always be aware of their functionality.*/

//console.log("2">1); // in this line it converts string to number for comparison.
//console.log("02">1); // same as above notes.

console.log(null>0); // it cant convert null to 0.
console.log(null==0); // it cant convert null to 0.
console.log(null>=0); // it has problem of value conversion.it converts the null to the 0 so,it is showing true but it is a problem.so use simple comparison b/w same datatypes.
/* the reson behind above conversion of null to 0 is that an equality check == and > < >= <= work diffrently.Comparison convert null to a number,treating it as 0.thats why (3)null>=0 is true and (1)null>0 is false. */


/* === is also called strict check as it check values as well as datatypes strictly.but == only check values only. */
console.log("2"=== 2);