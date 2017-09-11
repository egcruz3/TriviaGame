var t = 60;

$(document).ready(function(){
   
// Game Timer //
   $("#start").click(function(){
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
  }












  });