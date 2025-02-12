var buttonColours=["red","blue","green","yellow"];

    function nextSequence(){
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColour=buttonColours[randomNumber];
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100);
    }


/*switch(name){
            case "red":
                var red=new Audio("sounds/red.mp3");
                red.play();
                break;
            case "blue":
                    var blue=new Audio("sounds/red.mp3");
                    blue.play();
                    break;
            case "green":
                var green=new Audio("sounds/red.mp3");
                green.play();
                break;
            case "yellow":
                var yellow=new Audio("sounds/red.mp3");
                yellow.play();
                break;
        
        
        }
                  

        }
        );
    */
