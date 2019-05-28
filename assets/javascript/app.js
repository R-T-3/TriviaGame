
// intialize a time remaining timer
// functioning of timer
// Set up trivia questions 
// set up multiple choice answers
// identify correct and incorrect answers
// set up counter for correct and incorrect answers
// var object = {
//     q1: "what the question is",
//     a1: ["answer1, answer2"],
//     a1Answer: "answer2"

// }
// loop to iterate 

window.onload = function() {
  $("#start").on("click", startGame);
  $("#done").on("click", done);
}

  var secondsLeft = 28;
  var intervalID;
  var clockRunning = false;

function startGame() {
    $("#questions").removeClass("hide");
    $("#start").addClass("hide");
}






