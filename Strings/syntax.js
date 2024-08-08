let soup='noodles soup';
let reply;
/*if(soup)//if the condition is anything than false ,0,undefined then only else gets executed 
{
    reply=`Your order of ${soup} is available`;
}
else
{
    reply=`Your Order of ${soup} is not available`;
}
console.log(reply);*/

const Ban=false,crackers=false;
reply=Ban?"No soup for u!"
:crackers
?"Here is your soup and crackers!"
:soup
?"Your soup is available!"
:"Shop wrapped!"
console.log(reply);