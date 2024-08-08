const myArray=[];//reassigning i.e. myArray=[.....]not allowed but changing elements myArray[1]=.... allowed
myArray[0]="Lokesh";
myArray[1]=29;
myArray[2]=true;
console.log(myArray);//declaring array is same as declaring any int,string,boolean data in js unlike java thus variable name of array is never followed by []
console.log(myArray.length);
myArray.push("Engineer");
console.log(myArray);
const lastItem=myArray.pop();
console.log(lastItem);
console.log(myArray);
const newLength=myArray.unshift("Lovely");
console.log(newLength);//whenever we add new element from start or end by unshift or push ,and store it in a variable it stores new length while when we delete by shift or pop it stores the deleted element 
console.log(myArray);
myArray.shift();//index position of elements decreases by 1
console.log(myArray);//asking for an element at position >= length will give undefined
delete myArray[1];
console.log(myArray);
console.log(myArray[1]);
myArray[1]=29;
myArray.splice(1,1);
console.log(myArray);
console.log(myArray[1]);
myArray.splice(1,1,92);
console.log(myArray);
myArray.splice(1,0,29);
console.log(myArray);
const newArray=myArray.slice(1,2);
console.log(newArray);
myArray.reverse();
console.log(myArray);
const newString=myArray.join();
console.log(newString);
const nayaArray=newString.split(',');
console.log(nayaArray);
const Arey=["Engineer",true,"best"];
const navinArray=Arey.concat(myArray);
console.log(navinArray);
const oneMore=[...Arey,...myArray];//spread operator
console.log(oneMore);
const arrayOfArrays=[Arey,myArray];
console.log(arrayOfArrays);
const sportShelfA=["basketball","football","volleyball"];//to hardcode input in array we use [] in js unlike {} as in java
const sportShelfB=["cricket","baseball","soccer"];
const clothesShelfA=["tank top","sweat top","shoes"];
const clothesShelfB=["track pants","sweat pants","socks"];
const sportShelf=[sportShelfA,sportShelfB];
const clothesShelf=[clothesShelfA,clothesShelfB];
console.log(sportShelf);
console.log(clothesShelf[0][1]);
const Shelf=[sportShelf,clothesShelf];
console.log(Shelf);
console.log(Shelf[0][1][2]);
const shelf=[sportShelfA,sportShelfB,clothesShelfA,clothesShelfB];
console.log(shelf===Shelf);
