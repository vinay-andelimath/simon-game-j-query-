//creating the array which hold the colors
var buttonColours=["red","blue","green","yellow"];

//create empty arrya called gamePattern
var gamePattern=[];
//create an empty with userclicked pattern
var userClickedPattern = [];
var started = false;//set it false to callout the next sequence
//create the new variable start at level 0
var level = 0;

//start the game
$(document).keypress(function(){
//if the level was not started then call out the title
if(!started){
    //call the level start heading
    $(" #level-title ").text(" LeveL " + " " +level);
nextSequence();
started = true;
}
});





//detect the if any button pressed handler function
$(".btn").click(function(){
//store the id of the button when clicked
var userChosenButton=$(this).attr("id");
//add the contents to userclicked pattern array
userClickedPattern.push(userChosenButton);

playSound(userChosenButton);
animatePress(userChosenButton);

checkAnswer(userClickedPattern.length-1);
})

//create the new function that checks the answer against user input
function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        $("#level-title").text("Remember sequence and next");

        if(userClickedPattern.length===gamePattern.length){

setTimeout(function(){
    nextSequence();
},1000);

        }
        
    }else{
        console.log("wrong,try again");
        playSound("wrong");

        //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }



}









/**creating the new function */
function nextSequence(){

    userClickedPattern=[];
//increase by level one
level ++;
//update the heading

$(" #level-title ").text(" LeveL " + " " +level);


/**generating the random sequence between 0 and 3 */
var randomNumber=Math.floor(Math.random() *4);

var randomChoosenColor=buttonColours[randomNumber];

gamePattern.push(randomChoosenColor);


//jquery to select the same id to random choosen color
$("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChoosenColor);
}

//create a new function called play sound

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  //create new function called animate and should take single parameter

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");

setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
},100);


  }
  function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }
  
