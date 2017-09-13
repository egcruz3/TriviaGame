var t = 60;

$(document).ready(function(){
   
// Game Timer //
   $("#startButton").click(function(){
        
        $("#firstScreen").hide();
        $("#triviaGame").show();            

       
      var sTime = setInterval(function(){
           if(t != 0){
           document.getElementById('timer').innerHTML = t + "";
           t = t-1;
           } else {
           t= 60;
           document.getElementById('timer').innerHTML = t + "";
           alert("Game Over");

	       clearInterval(sTime);
       }
      }, 1000);
    });
  

  
    
    function submitAnswers(){
  	var total = 10;
  	var score = 0;

// Get User Input
  	var q1 = document.forms["triviaForm"]["q1"].value;
  	var q2 = document.forms["triviaForm"]["q2"].value;
    var q3 = document.forms["triviaForm"]["q3"].value;
    var q4 = document.forms["triviaForm"]["q4"].value;
    var q5 = document.forms["triviaForm"]["q5"].value;
    var q6 = document.forms["triviaForm"]["q6"].value;
    var q7 = document.forms["triviaForm"]["q7"].value;
    var q8 = document.forms["triviaForm"]["q8"].value;
    var q9 = document.forms["triviaForm"]["q9"].value;
    var q10 = document.forms["triviaForm"]["q10"].value;
      
 
//     Set Correct Answers 
    var answers = ["a", "c", "c", "d", "b", "a", "d", "b", "a", "c"];
    

//    Check Answers
    for(i =1; i <= total; i++){
     if(eval("q"+i) == answers[i - 1]){
        score++;
      }
    }
      
      //   Display Results
      
      var results = document.getElementById("gameResults");
      gameResults.innerHTML = '<h3>You got <span>'+score+'</span> correct out of <span>'+total+'</span></h3>';
        
     if("")
           
    
      return false;
             
  };
    
    

  });