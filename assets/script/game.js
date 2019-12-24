//declare some global vars for scores random number and user score and crystal values
var winCounter=0;
var lossCounter=0;
var randomNumber=0;
var userScore=0;
var crysOneVal=0;
var crysTwoVal=0;
var crysThreeVal=0;
var crysFourVal=0;




//the game will generate a random number that will be displayed in the random number div and this will be the users goal score to reach without exceeding it
function numberGen(){
    //makes the random number
    randomNumber = (Math.floor(Math.random()*120));
    //makes values between 1 and 12 for the crystal values
    crysOneVal = (Math.floor(Math.random()*12));
    crysTwoVal = (Math.floor(Math.random()*12));
    crysThreeVal = (Math.floor(Math.random()*12));
    crysFourVal = (Math.floor(Math.random()*12));
    //console.log(randomNumber, crysOneVal, crysTwoVal, crysThreeVal, crysFourVal);
$(".randomnumber").text(randomNumber);
}
numberGen();


//write code for click events on the crystals
$(".crystalone").on("click", function(){
    userScore = userScore + crysOneVal;
    $(".score").text(userScore);
});

//each click value is added to the total score

//the total score is displayed in the score div

//if the score matches the random number then the user is victorious

//the scoreboard will update and the game will restart

//if the user score exceeds the random number then the game is lost and will restart

