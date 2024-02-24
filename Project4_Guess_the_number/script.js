// console.log("hello");

// select all fields

const userNumberEle = document.querySelector('#guessNumber');
const guessClick = document.querySelector('input[type="submit"]')
const remainingAttempt = document.querySelector('#remainCount')
const prevGuesses = document.querySelector('#prevGuessArray')
const guessStatus = document.querySelector('#status')
const newGame = document.querySelector('.newGame')
// console.log(newGame);
// console.log(remainingAttempt.innerHTML);

// generate a random number btwn 1 to 100
let generatedNumber = Math.floor(Math.random() * (100 + 1) + 1)

//  console.log(generatedNumber);

// make a array to store all number you guess earlier
let storePrevNum = new Array();
let attemptsCount;

guessClick.addEventListener('click', (e)=>{
    e.preventDefault();
    let numberFromUser = parseInt(userNumberEle.value)
    attemptsCount = 10 - storePrevNum.length - 1;
    if(storePrevNum.length != 10 && attemptsCount > 0){
        // console.log(attemptsCount);

        if(numberFromUser > 0 && numberFromUser <= 100){

            storePrevNum.push(numberFromUser)

            if(generatedNumber === numberFromUser){
                // console.log(attemptsCount, generatedNumber, numberFromUser, "sucess", storePrevNum);
                // remainingAttempt.innerHTML = attemptsCount;

                guessStatus.innerHTML = `Congratulations!! You won the game by ${attemptsCount+1} attempts`
                
                newGame.style.display = "inline-block"
                guessClick.style.display = "none"
            }
            else if(numberFromUser < generatedNumber){
                guessStatus.innerHTML = `The Number is greater than ${numberFromUser}`
                remainingAttempt.innerHTML = attemptsCount;
                prevGuesses.innerHTML = storePrevNum

                // clear the input field
                userNumberEle.value = '';

                // console.log(attemptsCount, generatedNumber, numberFromUser, "failed", storePrevNum);
            }
            else if(numberFromUser > generatedNumber){
                guessStatus.innerHTML = `The Number is smaller than ${numberFromUser}`
                remainingAttempt.innerHTML = attemptsCount;
                prevGuesses.innerHTML = storePrevNum

                // clear the input field
                userNumberEle.value = '';

                // console.log(attemptsCount, generatedNumber, numberFromUser, "failed", storePrevNum);
            }
        }
        else{
            alert("Please fill legitimate Number between 1 to 100!!")
            userNumberEle.value = ''
            // window.location.reload();
        }

       
       
    }
    else{
        alert('Oops, Your attempts are over!!')
        remainingAttempt.innerHTML = attemptsCount;
        guessStatus.innerHTML = `Random number is ${generatedNumber}, Bad Luck!!`
        newGame.style.display = "inline-block"
        guessClick.style.display = "none"
    }
})

newGame.addEventListener('click', (e)=>{
    e.preventDefault()
    generatedNumber = Math.floor(Math.random() * (100 + 1) + 1)
    attemptsCount = 1;
    storePrevNum = [];
    userNumberEle.value = '';
    prevGuesses.innerHTML = ''
    guessStatus.innerHTML = `Random Value is ready guess your number`
    remainingAttempt.innerHTML = 10
    newGame.style.display = "none"
    guessClick.style.display = "inline-block"
})

