let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess);
    })
}

function validateGuess(guess){
    // validation
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess > 100) {
        alert('Please enter a valid number')
    }else if (guess < 1 ){
        alert('Please enter a valid number')
    }else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessege(`Game over. Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess) 
        }
    }
}
function checkGuess(guess){
    // check - compare
    if (guess === randomNumber) {
        displayMessege(`You guessed it right, IT'S <h2>${guess}</h2>`)
        endGame()
    } else if( guess < randomNumber){
        displayMessege(`Number is Too Low`)
    } else if( guess > randomNumber){
        displayMessege(`Number is Too High`)
    }
}
function displayGuess(guess){
   // update value with enputy string
   userInput.value = ''
   guessSlot.innerHTML += `${guess}, ` 
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`
}
function displayMessege(message){
    // Will interact with DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame"> Start new Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')  
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}


