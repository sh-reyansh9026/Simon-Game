var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var start=false;
var level=0;
 $(document).keydown(function(){
         if(start==false)
          {
            $("h1").text("level "+level);
            nextSequence();
            start=true;
          }
      
      
        })


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
});



function playSound(name){
    
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

 }


 function animatePress(currentColour)
 {
     $("#"+currentColour).addClass("pressed");
     setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
     },100);
     }
 


 function nextSequence(){
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColour=buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);

        level++;
        $("h1").text("level "+ level);
          
    }


function checkAnswer(currentLevel)
{
      if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
        {
           
            if(userClickedPattern.length==gamePattern.length)
            {
                setTimeout(function(){
                    nextSequence();
                    userClickedPattern=[];
                },1000);
                
            }
        }
        else{
            var audio=new Audio('sounds/wrong.mp3');
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function()
            {
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
            
        }
}

function startOver()
{
    level=0;
    gamePattern=[];
    start=false;
}
  
        