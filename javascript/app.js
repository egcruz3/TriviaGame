var t = 5;
var total = 10;
var correct = 0;
var incorrect =0;

$(document).ready(function(){
   $("#triviaGame").hide();
  
    
    $("#startButton").click(function(){
        $("#firstScreen").hide();
        $("#triviaGame").show();
        $("#startButton").hide();

       
      var sTime = setInterval(function(){
           if(t != 0){
           document.getElementById('timer').innerHTML = t + "";
           t = t-1;
           } else {
           t= 5;
           document.getElementById('timer').innerHTML = t + "";
           
	       clearInterval(sTime);
       }
      }, 1000);
    });
  
  
    
    function submitAnswers(){

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
        correct++;
      }
    }
      
      //   Display Results
      
      var results = document.getElementById('gameResults');
//      gameResults.innerHTML = '<h3>You got <span>'+score+'</span> correct out of <span>'+total+'</span></h3>';
        
        
//        End of Game
      if(time === 1){
          alert("Time Up!")
//          $("#triviaGame").hide();
//          $("#gameResults").show();
//          document.getElementById('gameResults').innerHTML = '<h3>You got <span>' +score+ '</span> correct out of <span>' +total+ '</span></h3>';
         
      }
           
    
      return false;
             
  };
    
    

  });