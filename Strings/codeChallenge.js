const n="Lokesh";
console.log(n.charAt(Math.floor(Math.random()*n.length)));

function sum(a,b)//JS doesnt have data type before input parameters and return type before function name unlike java 
{
    if(b===undefined)
    {
        return a+a;//after a return statement of a function rest statements of functions are ignored
    }
    return a+b;
}
 
console.log(sum(2));
console.log(sum("TA","SK"));

//Anonymous Function (Remember ;)
const getUserName=function (email)
{
    return email.slice(0,email.indexOf("@"));
};
console.log(getUserName("lokesh@gmail.com"));

//Arrow Function 
let toProperCase=(nam)=>{
    return nam.charAt(0).toUpperCase()+nam.slice(1).toLowerCase();
};
console.log(toProperCase("lOkEsH"));

/*                redeclaration    reassignment                       
var                ✅                  ✅
let                  ❌                  ✅
const                 ❌                 ❌(const a=5;a=6;not allowed but a++;allowed)   
*/

let y=1;
function myFun()
{
    if(true)
    {
        y=2;
        console.log(y);
    }
    console.log(y);
}
myFun();