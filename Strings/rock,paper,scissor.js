const player=`paper`,computer='rock';//const must have a value initialised
let ans;
/*if(player===computer)
ans=`tie`;
else if(computer==="rock")
{
    if(player==="paper")
        ans="player wins";
    else
        ans="computer wins";
}
else if(computer==="scissor")
{
    if(player==="paper")
        ans="computer wins";
    else
        ans="player wins";
}
else
{
    if(player==="scissor")
        ans="player wins";
    else
        ans="Computer wins";
}
console.log(ans);*/

/*switch(computer)
{
    case player:
        ans="Tie";
        break;
    case "rock":
        if(player==="paper")
            ans="player wins";
        else
            ans="computer wins";
        break;//if a break statement is missing following case blocks are evaluated irrespective the choice matches case expression or not
    case "paper":
        if(player==="scissor")
            ans="player wins";
        else
            ans="Computer wins";
        break;
    default:
        if(player==="paper")
            ans="computer wins";
        else
            ans="player wins";
}
console.log(ans);*/

ans=(player===computer)?"Tie"
:(player==="rock")
?(computer==="scissor")
?"player wins"
:"computer wins"
:(player==="paper")
?(computer==="rock")
?"player wins"
:"computer wins"
:(computer==="rock")
?"computer wins"
:"player wins";
console.log(ans);
