var questionList = [
    question1 = {
        question : "Which of the following cannot kill a white walker?",
        answerList : ["Valerian Steel", "Andel Silver", "Fire", "Dragon Glass"],
        realAnswer : "Andel Silver",
        winScreen : "You beat the Night King!",
        loseScreen : "you woudld've died to the white walkers!",
        timeScreen: "Cersei Suprised Face"
    },
    question2 = {
        question : "How many titles does Daenerys have?",
        answerList : [9,15,11,13],
        realAnswer : 11,
        winScreen : "Bow to Queen Daenerys Stormborn of the House Targaryen, the First of Her Name, Queen of the Andals, the Rhoynar and the First Men, Lady of the Seven Kingdoms and Protector of the Realm, Lady of Dragonstone, Queen of Meereen, Khaleesi of the Great Grass Sea, the Unburnt, Breaker of Chains and Mother of Dragons.",
        loseScreen : "Dracarys",
        timeScreen: "You're Reek the penisless"
    },
    question3 = {
        question : "Who knows nothing?",
        answerList : ["Jon Snow", "Samwell Tarly", "Jaime Lannister", "Petyr Baelish"],
        realAnswer : "Jon Snow",
        winScreen : "At least you know something",
        loseScreen : "You know nothing!",
        timeScreen: ". . ."
    }
]

var answerHold, giveScreen;
var corAns = 0, incAns = 0, unAns = 0;
var timeLeft, timeSet, intervalId;
var index = 0;


//sets time for answering
function chooseDifficulty(difficulty) {
    timeSet = difficulty;
    getQuestion(index);
    $('.set-difficulty').attr('class', 'hide-me');
}

function getQuestion(index) {
    //hold correct answer
    $('#theScreen').empty();
    if (index >= questionList.length) {
        $('#time-area').html("<h2>Questions answered correctly: " + corAns + "</h2>")
        $("#question-area").html("<h2>Questions answered incorrectly: " + incAns + "</h2>")
        $("#answer0").html("<h2>Questions unanswered: " + unAns + "</h2>")
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
    }
    answerHold = questionList[index].realAnswer;
    questionPrint(index);
    timer();
}

//show question and answers avaliable in html
function questionPrint(index) {
    $('#question-area').html("<h2>" + questionList[index].question + "</h2>");

    for (var i = 0; i < questionList[index].answerList.length; i++) {
    $('#answer'+i).empty();
    $('#answer'+i).append("<h2>" + questionList[index].answerList[i] + "</h2>");
    }
}

//show time left
function timer() {
    //restart from 10 seconds
    timeLeft = timeSet;
    $("#time-area").html("<h2>Time Remaining: " + timeLeft + "</h2>");
    intervalId = setInterval(decrement, 1000);
    if (timeLeft < 0) {
        endScreen("timeScreen");
    }
}

//decrease counter
function decrement() {
    timeLeft--;

    $("#time-area").html("<h2>Time Remaining: " + timeLeft + "</h2>");
    if (timeLeft === 0) {

        stopTimer();
        unAns++;
        endScreen("timeScreen");
    }
}

//stop counter
function stopTimer() {
    clearInterval(intervalId);
}

//click on answers
$('.answers').on('click', function(ans) {
    stopTimer();
    //console.log(ans.target.innerHTML + "=?" + answerHold);
    if (ans.target.innerHTML == answerHold) {
        corAns++;
        endScreen("winScreen");
        //alert("Ding! Winner!");
    } else {
        incAns++;
        endScreen("loseScreen");
        //alert("EH! WRONGGGG!");
    }
});

function endScreen(whatScreen) {
    //console.log(questionList[index]);
    //console.log(whatScreen);
    $('#theScreen').html("<h2>" + questionList[index][whatScreen] + "</h2>");
    index++;
    setTimeout(function(){ getQuestion(index); }, 3000);
} 

