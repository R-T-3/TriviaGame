window.onload = function() {
  $("#start").on("click", startGame);
  $("#done").on("click", done);
}

  var secondsLeft = 28;
  var intervalID;
  var clockRunning = false;

function startGame() {
    $("#content").removeClass("hide");
    $("#start").addClass("hide");
    gameQuestions();
    run();
}

function run() {
  clearInterval(intervalID);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  secondsLeft--;
  $("#timeRemaining").html("<h2>" + 'Time Remaining: ' + secondsLeft + "</h2>");

  if (secondsLeft === 0) {
    done();
    alert("Time's Up!");
  }
}

function done(){
  clearInterval(intervalID);
}

var triviaQuestions = [
   {
     Question:"1.) Who holds the all-time record for most points scored in the NBA?",
     Options: ["Kobe Bryant", "Lebron James", "Kareem Abdul Jabbar", "Michael Jordan"],
     Answer: "Kareem Abdul Jabbar"
   },
   {
    Question:"2.) What NFL team has won the most Superbowl's?",
    Options: ["Dallas Cowboys", "Pittsburgh Steelers", "San Francisco 49ers", "Greenbay Packers"],
    Answer: "Pittsburgh Steelers"
  }
]

function gameQuestions() {
  for (var i = 0; i < triviaQuestions.length; i++) {
    var triviaQ = $("#questions").append("<h2>" + triviaQuestions[i].Question + "</h2>");
      
    for (var j = 0; j < triviaQuestions[i].Options.length; j++){
      var optionEle = triviaQuestions[i].Options;
      var eachOption = optionEle[j];
        
      triviaQ.append("<input type='radio' name='radio_btn'>" + eachOption + "</input>");   
      }
  }
}






