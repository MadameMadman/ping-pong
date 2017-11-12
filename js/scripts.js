var pingpong = function(numberFromUser) {
  var results = [];
  for (i = 1; i <= numberFromUser; i++) {
    if (i % 15 === 0) {
      results.push("PINGPONG");
    } else if (i % 5 === 0) {
      results.push("PONG");
    } else if (i % 3 === 0) {
      results.push("PING");
    } else {
      results.push(i);
    }
  }
  return results;
};
// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#result").empty().hide();
    var userInput = parseInt($("input#numberInput").val());
    if ((userInput < 0) || (userInput === 0)) {
      alert("Don't screw with us here! Our monsters can only eat real numbers, no zeros or negatives please.");
    } else {
    var resultsArray = pingpong(userInput);
    }
    var listitem = resultsArray.forEach(function(pingPongInput){
      $("#result").append("<li>" + pingPongInput + "</li>")
    });
    $("#result").show();
  });
});
