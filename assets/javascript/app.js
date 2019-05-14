var questionList = [
    question1 = {
        question : "Which of the following cannot kill a white walker?",
        answerList : ["Valerian Steel", "Andel Iron", "Fire", "Dragon Glass"],
        winScreen : "You beat the Night King!",
        loseScreen : "you woudld've died to the white walkers!"
    },
    question2 = {
        question : "How many titles does Daenerys have?",
        answerList : [9,11,15,13],
        realAnswer : 11,
        winScreen : "Bow to Queen Daenerys Stormborn of the House Targaryen, the First of Her Name, Queen of the Andals, the Rhoynar and the First Men, Lady of the Seven Kingdoms and Protector of the Realm, Lady of Dragonstone, Queen of Meereen, Khaleesi of the Great Grass Sea, the Unburnt, Breaker of Chains and Mother of Dragons.",
        loseScreen : "Draconis"
    }
]

var answerHold, giveScreen;
var corAns = 0, incAns = 0, unAns = 0;
var timeLeft, intervalId;


function cycleQuestions() {
    for (var index = 0; index < questionList.length; index++) {
        getQuestion(index);
        giveScreen = answer();
        console.log(questionList[index].giveScreen);
    }
    //printStats
}

function getQuestion(index) {
    //hold correct answer
    console.log(questionList[index].realAnswer);
    answerHold = questionList[index].realAnswer;
    questionPrint(index);
    timer();
}

//show question and answers avaliable in html
function questionPrint(index) {
    $('#question-area').html("<h2>" + questionList[index].question + "</h2>");

    for (var i = 0; i < questionList[index].answerList.length; i++) {
    //$('#answer'+i).empty();
    $('#answer'+i).append("<h2>" + questionList[index].answerList[i] + "</h2>");
    }
}

//show time left
function timer() {
    //restart from 10 seconds
    timeLeft=10;
    $("#time-area").html("<h2>Time Remaining: " + timeLeft + "</h2>");
    intervalId = setInterval(decrement, 1000);
}

//decrease counter
function decrement() {
    timeLeft--;

    $("#time-area").html("<h2>Time Remaining: " + timeLeft + "</h2>");
    if (timeLeft === 0) {

        stop();
        unAns++;
        alert("Time Up!");
    }
}

//stop counter
function stop() {
    clearInterval(intervalId);
}

//click on answers
function answer() {
    $('.answers').on('click', function(ans) {
        console.log(ans.target.innerHTML);
        if (ans.target.innerHTML === answerHold) {
            corAns++;
            return("winScreen");
            //alert("Ding! Winner!");
        } else {
            incAns++;
            return("loseScreen");
            //alert("EH! WRONGGGG!");
        }
    });
}

//sets time for answering
function chooseDifficulty() {

}
