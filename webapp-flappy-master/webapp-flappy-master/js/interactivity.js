jQuery("#scoresbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
  "<p>"+registerScore+"</p>"
  )
})
jQuery("#helpbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
  "<p>"+"idk what you want me to do"+"</p>"
  )
})
jQuery("#creditsbtn").on("click", function(){
  jQuery("#content").empty();
  jQuery("#content").append(
  "<p>"+"idk what you want me to do"+"</p>"
  )
})

function registerScore(score){
  var playerName = prompt("What's your name?");
  var scoreEntry = "<li>" + playerName + ":" + score.toString() + "</li>";
jQuery("#content").empty();
jQuery("#content").append(scoreEntry);
}
