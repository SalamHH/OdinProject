const container=document.querySelector('#container');
let finalresult=document.createElement('h1');
finalresult.textContent='computer score: 0\rplayer score: 0';

container.appendChild(finalresult);

let choices=["rock", "paper", "scissors"];

console.log("Hello World");
function computerPlay(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}
let playerScore=0;
let ComputerScore=0;





function playRound(pSelection, cSelection){
    console.log("player selection: " + pSelection+ "\ncomputer selection: "+ cSelection);

    if (cSelection==="rock" && pSelection==="paper") {
        playerScore++;
        return "player won, paper beats rock";
        
    }
    else if (cSelection==="rock" && pSelection==="scissors") {
        ComputerScore++;
        return "Computer won, rock beats scissors";
       
    }
    else if (cSelection==="rock" && pSelection==="rock") {
        return "nobody won, rock vs rock";
    }


    if (cSelection==="scissors" && pSelection==="paper") {
        ComputerScore++;
        return "computer won, scissors beats paper";
       

    }
    else if (cSelection==="scissors" && pSelection==="rock") {
        playerScore++;
        return "player won, rock beats scissors";
      

    }
    else if (cSelection==="scissors" && pSelection==="scissors") {
        return "nobody won, scissors vs scissors";
    }


    if (cSelection==="paper" && pSelection==="rock") {
        ComputerScore++;
        return "computer won, paper beats rock";


    }
    else if (cSelection==="paper" && pSelection==="scissors") {
        playerScore++;
        return "player won, scissor beats paper";
        

    }
    else if (cSelection==="paper" && pSelection==="paper") {
        return "nobody won, paper vs paper";
    }

    
    

}

//console.log(playRound("rock",computerPlay(choices)) ); 

/*
function game(){
    for(let i=0; i<5;i++){
        console.log("round: " + i);
        let valg=prompt("what do u choose?");
        console.log(playRound(valg,computerPlay(choices)) ); 
        console.log("computer score: " + ComputerScore + "\nplayer score: " +playerScore);
    } 

    if (playerScore>ComputerScore) {
        console.log("player won")
    }
    else if(playerScore<ComputerScore){
        console.log("computer won");
    }
    else{
        console.log("tie");
    }
   

}

game();
*/




const btn = document.querySelector('#rock');
btn.addEventListener('click', () => {

     playRound("rock",computerPlay(choices));
    finalresult.textContent='computer score: ' + ComputerScore+ ' player score:'+ playerScore;
    if(playerScore===5 || ComputerScore===5){
        finalresult.innerHTML='game over';
        playerScore=0;
        ComputerScore=0;
    }

});


const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
    
     playRound("paper",computerPlay(choices));
    finalresult.textContent='computer score: ' + ComputerScore+ ' player score:'+ playerScore;

    if(playerScore===5 || ComputerScore===5){
        finalresult.innerHTML='game over';
        playerScore=0;
        ComputerScore=0;
    }
    

});


const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {
    
     playRound("scissors",computerPlay(choices));
    finalresult.textContent='computer score: ' + ComputerScore+ ' player score:'+ playerScore;

    if(playerScore===5 || ComputerScore===5){
        finalresult.innerHTML='game over';
        playerScore=0;
        ComputerScore=0;
    }

});

