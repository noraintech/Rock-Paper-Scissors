const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultText = document.getElementById('start-text');
const userImg = document.getElementById('user-img');
const computerImg = document.getElementById('computer-img');

rockBtn.addEventListener('click', ()=>{
    play(ROCK);
}); 

paperBtn.addEventListener('click', ()=>{
    play(PAPER);
}); 

scissorsBtn.addEventListener('click', ()=>{
    play(SCISSORS);
}); 


function play(userOption){
    const computerOption = calcMachineOption(); 
    const result = calcResult(userOption, computerOption);

    userImg.src = "./recursos/"+userOption+".png";
    computerImg.src = "./recursos/"+computerOption+".png";

    switch(result){
        case TIE:
            resultText.innerHTML = 'You have tied!';
            break;
        case WIN:
            resultText.innerHTML = 'You have won!';
            break;
        case LOST:
            resultText.innerHTML = 'You have lost!';
            break;
    }
}


function calcMachineOption(userOption){
    const number = Math.floor(Math.random() * 3)
    switch(number){
        case 0:
            return ROCK;
            
        case 1:
            return PAPER;
            
        case 2:
            return SCISSORS;
            
    }
}


function calcResult(userOption, computerOption){
    if(userOption === computerOption){
        return TIE;

    }else if(userOption === ROCK){
        if(computerOption === PAPER) return LOST; 
        if(computerOption === SCISSORS) return WIN;  
        
    }else if(userOption === PAPER){
        if(computerOption === ROCK) return WIN; 
        if(computerOption === SCISSORS) return LOST;     

    
    }else if (userOption === SCISSORS){
        if(computerOption === ROCK) return LOST; 
        if(computerOption === PAPER) return WIN;     
    }
}