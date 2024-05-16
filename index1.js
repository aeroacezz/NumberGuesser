// Number Guesser

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

let myAttempts = 0;
let myInput;
let guess;

console.log(typeof answer, answer);

myText.textContent = `Guess the number between ${minNum} to ${maxNum}!`;

myButton.onclick = function(){

    guess = document.getElementById("myInput").value;
    guess = Number(guess);
    console.log(typeof guess, guess);
    
    if(isNaN(guess)){
        myText.textContent = `Please enter a valid number`;
    }
    else if(guess < minNum || guess > maxNum){
        myText.textContent = `Please enter a valid number`;
    }
    else{
        myAttempts++;
        if(guess > answer){
            myText.textContent =`Your guess is too high! Try again!`;
        }
        else if(guess< answer){
            myText.textContent =`Your guess is too low! Try again!`;
        }
        else{
            myText.textContent =`Your answer is correct, the answer is ${answer} and you took ${myAttempts} attempts`;
        }
    }

    document.getElementById("myAttempts").textContent = `Attempts : ${myAttempts}`;
   
}

myReset.onclick = function(){
console.log(typeof answer, answer);
myText.textContent = "Resetting ... Please wait.";
    function reload(){
        location.reload();
    }
    setTimeout(reload, 3000);
}

