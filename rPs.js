//user setup 
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();  
  if (userInput === 'rock' || 
      userInput === 'paper' || 
      userInput === 'scissors'){
    return userInput;
  } else{
    console.log('Error!');
  }
};

//computer setup
const getComputerChoice = () => {
 const randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return 'rock'; 
    case 1:
      return 'paper';
    case 2:    
      return 'scissors';
  }
};

//winner setup
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'The game was a Tie!!!'
  }
  if(userChoice === 'rock'){
  if(computerChoice === 'paper'){
      return "Sorry the computer won";
    }else{
      return "Congratulations, you won!!";
    }  
  }
  if(userChoice === 'paper'){
  if(computerChoice === 'scissors'){
      return "Sorry the computer won";
    }else{
      return "Congratulations, you won!!";
    }  
  }
  if(userChoice === 'scissors'){
  if(computerChoice === 'rock'){
      return "Sorry the computer won";
    }else{
      return "Congratulations, you won!!";
    }  
  }
};

//game setup
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The Computer threw: ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()