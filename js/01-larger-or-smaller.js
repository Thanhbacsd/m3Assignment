
//define a variable for thre coin flip game
let choice = ""
//Larger or Smaller?
// Usage: Use simple conditional statements

function largerOrSmaller() {
    let n1 = prompt("In put first number: n1 = ")
    let n2 = prompt("In put second number: n2 = ")
    if(n1 === n2){
        window.alert("Please input different two numbers")
        return
    }
   
    if (n1 > n2) {
        document.write("n1 = " + n1 + " is a larger number")
    } else{
        document.write("n2 = " + n2 + " is a larger number")
    }
}

//The Word Translator
// Usage: Use simple conditional statements

function wordTranslator(){
    let languageCode = prompt("Please enter the language code(\"es\", \"de\", and \"fr\", default is \"en\"): ")
    if(languageCode == "es"){
        console.log("Hola Mundo")
    }
    else if(languageCode == "de"){
        console.log("Hallo Welt")
     }
    else if(languageCode == "fr"){
        console.log("Bonjour le Monde")
    }
    else{
        console.log("Hello World translated in French is: Bonjour le Monde")
    } 
}

//The “Coin Flip” Game

function coinFlipGame() {
    let coinFlip = Math.round(Math.random()*10)
    //console.log(coinFlip)
    //let choice = prompt("Please enter h for \"Heads\" or t for \"Tails\": ")
    if(coinFlip < 5) {
        if(choice === "h"){
            window.alert("The flip was heads and you chose heads...you win!")
        }
        else if(choice === "t"){
            window.alert("The flip was heads but you chose tails...you lose!")
        }      
    }    
    else if(coinFlip > 5){
        if(choice === "h"){
            window.alert("The flip was tails but you chose heads...you lose!")
        }
        else if(choice === "t"){
            window.alert("The flip was tails and you chose tails...you win!")
        }
    }
    
}

function heads() {
    choice = "h"
    coinFlipGame()
}
function tails() {
    choice = "t"
    coinFlipGame()
}

//The “Grade Assigner” Application

function theGAA(){
    let userNumber = prompt("Please enter a number between 1 and 100: ")
    if(userNumber < 1 || userNumber > 100){
        window.alert("You enter a wrong number")
    } else if(userNumber >= 90){
        console.log("You received an A")
    } else if(userNumber >= 80){
        console.log("You received a B")
    } else if(userNumber >= 70){
        console.log("You received a C")
    } else if(userNumber >= 60){
        console.log("You received a D")
    }  else{
        console.log("You received an F")
    }
}
