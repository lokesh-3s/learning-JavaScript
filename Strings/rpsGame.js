//general rps game
/*let permit=confirm("Should we start the game!!");
if(permit)
    {
    let player=prompt("Enter Rock,Paper or Scissor!!(Note:Check for spellings)");
    let ans;
    if(player===null)
        {
            alert("You have clicked cancel");
        }
    else
    {
        player=player.trim().toLowerCase();
        let computer;
        if(player!=="rock"&&player!=="paper"&&player!=="scissor")
        {
            alert("Invalid choice entered");
        }
        else
        {
            let ran=Math.floor(Math.random()*3+1);
            if(ran===1)
                computer="rock";
            else if(ran===2)
                computer="paper";
            else
                computer="scissor";
            alert("Computer takes "+computer);
            if(player===computer)
            ans=`tie`;
            else if(player==="rock")
            {
                if(computer==="scissor")
                    ans="player wins";
                else
                    ans="computer wins";
            }
            else if(player==="scissor")
            {
                if(computer==="rock")
                    ans="computer wins";
                else
                    ans="player wins";
            }
            else
            {
                if(computer==="rock")
                    ans="player wins";
                else
                    ans="Computer wins";
            }
            alert(`Your Choice= ${player} \nComputer Choice= `+computer+`\n`+ans);
        }
    }
    let replay=confirm("Do you want to play again?");
    replay?location.reload():alert("OKay !Thanks for playing!");
}    
else{
    alert("Lets play some time later.");
}*/

//rps game using while and arrays
/*let permit=confirm("Should we start the game!!");
while(permit)
    {
    let player=prompt("Enter Rock,Paper or Scissor!!(Note:Check for spellings)");
    let ans;
    if(player===null)
        {
            alert("You have clicked cancel");
        }
    else
    {
        player=player.trim().toLowerCase();
        if(player!=="rock"&&player!=="paper"&&player!=="scissor")
        {
            alert("Invalid choice entered");
        }
        else
        {
            const ran=Math.floor(Math.random()*3);
            const computer=["rock", "paper", "scissor"][ran];
            alert("Computer takes "+computer);
            if(player===computer)
            ans=`tie`;
            else if(player==="rock")
            {
                if(computer==="scissor")
                    ans="player wins";
                else
                    ans="computer wins";
            }
            else if(player==="scissor")
            {
                if(computer==="rock")
                    ans="computer wins";
                else
                    ans="player wins";
            }
            else
            {
                if(computer==="rock")
                    ans="player wins";
                else
                    ans="Computer wins";
            }
            alert(`Your Choice= ${player} \nComputer Choice= `+computer+`\n`+ans);
        }
    }
    const replay=confirm("Do you want to play again?");
    replay?location.reload():permit=false;
}    
if(!permit){
    alert("Lets play some time later.");
}*/

//rps game using function
const start=()=>{
    const ready=playNow();
    ready?letsPlay():oKNp();
};
const playNow=()=>{
    const permit=confirm("Should we start the game?");
    return permit;
};
const oKNp=()=>{
    alert("Do come later to play!");
};
const letsPlay=()=>{
    while(true)
    {
        let player=inputChoice();
        if(!player)
        {
            clickCancel();
        }
        else
        {
            player=player.trim().toLowerCase();
            if(player!=="rock"&&player!=="paper"&&player!=="scissor")
                {
                    
                    invalidInput();
                }
                else
                {
                    player=player.trim().toLowerCase();
                    const winner=decide(player,compChoice());
                    declare(winner);
                }
        }
        
        if(askToPlayAgain())
            continue;
        else
            break;
    }
};
const inputChoice=()=>{
    const take=prompt("Enter Rock,Paper or Scissor!!(Note:Check for spellings)");
    return take;
};
const clickCancel=()=>{
    alert("You've clicked cancel");
};
const invalidInput=()=>{
    alert("Invalid Input");
};
const compChoice=()=>{
    const computer=["rock", "paper", "scissor"][Math.floor(Math.random()*3)];
    alert("Computer takes "+computer); 
    return computer;
};
const decide=(player,computer)=>{
    let ans;
    if(player===computer)
        ans=`tie`;
        else if(player==="rock")
        {
            if(computer==="scissor")
                ans="player wins";
            else
                ans="computer wins";
        }
        else if(player==="scissor")
        {
            if(computer==="rock")
                ans="computer wins";
            else
                ans="player wins";
        }
        else
        {
            if(computer==="rock")
                ans="player wins";
            else
                ans="Computer wins";
        }
        return ans;  
};
const declare=(xyz)=>{
    alert(xyz);
};
const askToPlayAgain=()=>{
    const replay=confirm("Would u like to play again?");
    return replay;
};
start();