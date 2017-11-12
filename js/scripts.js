//BUSINESS LOGIC

var pingpong = function(number) {
  var results = [];
  for (i = 1; i <= number; i++) {
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

//UI LOGIC

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#result").empty().hide();
    var userInput = parseInt($("input#numberInput").val());
    if ((userInput < 0) || (userInput === 0)) {
      alert("REAL NUMBERS ONLY!");
    } else if (userInput === 420) {
      alert("BLAZE IT");
    } else if (userInput === 69) {
      alert("😏");
    }else {
    var resultsArray = pingpong(userInput);
    }
    var lineItem = resultsArray.forEach(function(pingPongInput){
      $("#result").append("<li>" + pingPongInput + "</li>")
    });
    $("#result").show();
  });
});
