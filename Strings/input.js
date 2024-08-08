alert("hello world");
const myboolean=confirm("lessssssssssssssssssssssss gooooooooooo!!!!!!!!!!!!!"); //const can have expression after = rather than fixed value
console.log(myboolean);
const name1=prompt("Enter ur name");
if(name1===null||name1.trim()===name1||name1.trim().length!==0)
{
    if(name1==="")
        console.log("u didnt enter any name and pressed ok");
    else
        console.log(name1??"u pressed cancel")
}
else
console.log("You have just put spaces");