/* Start Guessing Game */

//First we generate a random number 
const numberGenerated = Math.floor(Math.random() * 22 + 1);
//alert(numberGenerated);
// counting the number of guesses 
// made for correct Guess 
var numberOffGuess = 0;



document.getElementById("submitguess").onclick = function() {

    // number guessed by user      
    let numberGuessed = document.getElementById("guessField").value;

    if (numberGuessed == numberGenerated) {
        var myWin = new Audio('think.wav'); {
            myWin.play();
        }
        alert("Congratz!!! You destroyed the cube in  " +
            numberOffGuess + " geusses ");
    } else if (numberGuessed > numberGenerated)
    /* if guessed number is greater 
                           than actual number*/
    {
        numberOffGuess++;
        alert("To High , Try a smaller number ");
    } else {
        numberOffGuess++;
        alert("To low , Try a higher number ");
    }

    if (numberOffGuess == 1) {
        var myAudio = new Audio('redalert.wav');
        myAudio.play();
    } else if (numberOffGuess == 3) {
        var myRadio = new Audio('assimilate.wav'); {
            myRadio.play();
        }
    } else if (numberOffGuess == 5) {
        var mySound = new Audio('borg.wav'); {
            mySound.play();
        }
    }

};