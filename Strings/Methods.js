const myString="Mathematics";
console.log(myString.length);
console.log("I lov India".length);
console.log(myString.charAt(0));
console.log(myString[0]);
console.log(myString.indexOf("mat"));
console.log(myString.lastIndexOf("at"));
{
console.log(myString.slice(5,7));//doesnt change the original string 
console.log(myString.slice(5,12));
console.log(myString.slice(5,4));
}
console.log(myString.toLowerCase());
console.log(myString.includes("math"));
console.log(myString.split("e"));
console.log(myString.split("z"));
console.log(myString.split(''));
console.log(myString.split('a'));
const myDecimal=42;
const myFloat1=42.01;
const myFloat2=42.0;
const myString1="42";//the console shows all string type returned data in white and number type in purple 
console.log(myFloat2);
console.log(myDecimal===myFloat2);
console.log(myDecimal===myString1);
console.log(myString1+3);
console.log(Number(myString1)+3);
{
console.log(Number());
console.log(Number(myString));//NaN=Not a No.
console.log(Number(true));
console.log(Number(false));
}
console.log(Number.isInteger(myFloat1));
console.log(Number.isInteger(myFloat2));
{
console.log(Number.parseFloat("GoogaBooga"));
console.log(Number.parseFloat("12g3.5"));
console.log(Number.parseFloat("123.0a5g"));
console.log(Number.parseFloat('123g'));//note the quotes
}
console.log(42.015.toFixed(2));
console.log(Number.parseInt(42.9));
console.log(Number.parseInt('12g3.5'));
console.log(myFloat1.toString());
console.log(Number.parseFloat(myFloat1).toString());//Chaining
console.log(Number.isNaN("Sahuji"));//.isNaN returns true if input is NaN AND a number
console.log(Number.isNaN(NaN));
console.log(isNaN("Dave"));// global isNaN checks only if input is NaN or not
console.log(Math.PI);
console.log(Math.trunc(3.99));
console.log(Math.round(3.5));
console.log(Math.ceil(3.01));
console.log(Math.ceil(3.0));
console.log(Math.floor(3.9));
console.log(Math.pow(2,Math.PI));
console.log(Math.min(-9,0.5,2));
console.log(Math.random());//returns any no [0,1) includes 0 but not 1
//Method to display any no from 1 to 10
console.log(Math.floor(Math.random()*10)+1);
//We can also use Math.ceil(Math.random()*10) but it can give 0 as output also