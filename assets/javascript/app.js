var secondsLeft = 28;
var intervalID;
var clockRunning = false;
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
 },
 {
   Question:"3.) True or False: A pass interference results in a 15-yard penalty.",
   Options: ["True", "False"],
   Answer: "True"
 },
 {
   Question:"4.) In the MLB, what is it called when a player hits a home run with the bases loaded?",
   Options: ["loaded home run", "pickle", "grand slam", "clearing the bases"],
   Answer: "grand slam"
 },
 {
   Question:"5.) How man PGA Tour events has Tiger Woods won??",
   Options: [81, 73, 8, 11],
   Answer: 81
 },
 {
   Question:"6.) Which of the following NFL teams is the newest?",
   Options: ["Cincinnati Bengals", "Seattle Seahawks", "Carolina Panthers", "New Oreans Saints"],
   Answer: "Carolina Panthers"
 },
 {
   Question:"7.) What is the most popular sport in the world?",
   Options: ["Cricket", "Tennis", "Baseball", "Soccer"],
   Answer: "Soccer"
 },
 {
   Question:"8.) Which sport is not featured in the Olympics?",
   Options: ["Badminton", "Judo", "Tug of War", "Lacrosse"],
   Answer: "Lacrosse"
 }
];

var answerOptions;
var singleOption;
var theAnswer;
var triviaQ;
var rightAnswer = 0;
var wrongAnswer = 0;

window.onload = function() {
  $("#start").on("click", startGame);
  $("#done").on("click", done);
}

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
  $("#content").addClass("hide");
  $("#gradeAnswers").removeClass("hide");
  answerMatch();
}

function gameQuestions() {
  for (var i = 0; i < triviaQuestions.length; i++) {
     triviaQ = $("#questions").append("<h2>" + triviaQuestions[i].Question + "</h2>");
     theAnswer = triviaQuestions[i].Answer;
    
      for (var j = 0; j < triviaQuestions[i].Options.length; j++){
      answerOptions = triviaQuestions[i].Options;
      singleOption = answerOptions[j];
      triviaQ.append("<input id='radio-btn' type='radio' value='" + singleOption + "' name='Question-" + i + "'>" + '<strong style="color:#2B3856;">'+ singleOption +'</strong>');    
  }
}
};

function answerMatch(){
  var chosen = $("#questions").children("input:checked");
  
  for (var i = 0; i < chosen.length; i++){
    console.log(chosen);
    if ($(chosen[i]).val() === theAnswer){
      rightAnswer++;
    }
    else {
      wrongAnswer++;
    }
  }
  $("#gradeAnswers").html("Correct Answers: " + rightAnswer + "<br />" + 'Incorrect Answers: ' + wrongAnswer);
}







