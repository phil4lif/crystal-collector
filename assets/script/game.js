//declare some global vars for scores random number and user score and crystal values
var wins = 0;
var losses = 0;
var randomNumber = 0;
var userScore = 0;
var crysOneVal = 0;
var crysTwoVal = 0;
var crysThreeVal = 0;
var crysFourVal = 0;


//the game will generate a random number that will be displayed in the random number div and this will be the users goal score to reach without exceeding it
function numberGen() {
    //resets the user score
    userScore = 0;
    $(".score").text(userScore);
    //makes the random number
    randomNumber = (Math.ceil(Math.random() * 102)) + 18;
    //makes values between 1 and 12 for the crystal values
    crysOneVal = (Math.ceil(Math.random() * 12));
    crysTwoVal = (Math.ceil(Math.random() * 12));
    crysThreeVal = (Math.ceil(Math.random() * 12));
    crysFourVal = (Math.ceil(Math.random() * 12));
    //console.log(randomNumber, crysOneVal, crysTwoVal, crysThreeVal, crysFourVal);
    //Displays the random number inside of the div
    $(".randomnumber").text(randomNumber);
    
}

numberGen();

// if (userScore < randomNumber){
//write code for click events on the crystals
$(".crystal").on("click", function () {
    //each click value is added to the total score
    var crystal = $(this).attr("data-crystal")
    $(".windiv").text("");
    if (crystal === "crystalone") {
        userScore = userScore + crysOneVal;
    }
    else if (crystal === "crystaltwo") {
        userScore = userScore + crysTwoVal;
    }
    else if (crystal === "crystalthree") {
        userScore = userScore + crysThreeVal;
    }
    else {
        userScore = userScore + crysFourVal;
    }

    
    $(".score").text(userScore);
    if (userScore === randomNumber) {
        wins++;
        $(".windiv").text("You Win!");
        $(".wins").text(wins);
        numberGen()
    } if (userScore > randomNumber) {
        losses++;
        $(".windiv").text("You Lose");
        console.log("you lose")
        $(".losses").text(losses);
        numberGen()
    }
});

//THIS IS A BUNCH OF OLD CODE THAT I HAD ORIGINIALLY WRITTEN: I HAD MADE FOUR DIFFERENT ONCLICK FUNCTIONS BECAUSE I WAS NOT USING THE THIS ON THE DATA LIKE I AM NOW


// $(".crystaltwo").on("click", function(){
//     //each click value is added to the total score
//     userScore = userScore + crysTwoVal;
//     //the new score is displayed
//     $(".score").text(userScore);
//     if (userScore === randomNumber){
//         wins++;
//         $(".wins").text(wins);
//         numberGen()
//     }if (userScore > randomNumber){
//         losses++;
//         $(".losses").text(losses);
//         numberGen()
//     }
// });

// $(".crystalthree").on("click", function(){
//     //each click value is added to the total score
//     userScore = userScore + crysThreeVal;
//     //the new score is displayed
//     $(".score").text(userScore);
//     if (userScore === randomNumber){
//         wins++;
//         $(".wins").text(wins);
//         numberGen()
//     }if (userScore > randomNumber){
//         losses++;
//         $(".losses").text(losses);
//         numberGen()
//     }
// });

// $(".crystalfour").on("click", function(){
//     //each click value is added to the total score
//     userScore = userScore + crysFourVal;
//     // the new score is displayed
//     $(".score").text(userScore);
//     if (userScore === randomNumber){
//         wins++;
//         $(".wins").text(wins);
//         numberGen()
//     }if (userScore > randomNumber){
//         losses++;
//         $(".losses").text(losses);
//         numberGen()
//     }
// });
// }

//if the score matches the random number then the user is victorious
// if (userScore === randomNumber){
//     wins++;
//     $(".wins").text(wins);
//     numberGen()
// }

// if (userScore > randomNumber){
//     losses++;
//     $(".losses").text(losses);
//     numberGen()
// }


//if the user score exceeds the random number then the game is lost and will restart

