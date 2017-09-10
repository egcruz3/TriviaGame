var t = 60;

$(document).ready(function(){
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
   });