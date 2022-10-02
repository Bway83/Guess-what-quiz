var questions = [
    {
        questionText:
            "How many championships did Jordan win?",
        choices: ["3", "4", "5", "6"],
        answer: "6"
    },
    {
        questionText:
            "What year did Jordan retire?",
        choices: ["1992", "1995", "1997", "2001"],
        answer: "2001"
    },
    {
        questionText:
            "What year was Jordan drafted?",
        choices: ["19833", "1984", "1985", "1986"],
        answer: "1983"

    },
    {
        questionText:
            "The first AllStar teamate for Jordan was ____________?",
        choices: ["Kerr", "Pippen ", "Kukoc", "Rodman"],
        answer: "Pippen"
    },

]

var index = 0
var questionsArea = document.querySelector("#questions")
var timerEl = document.querySelector('.timer');
var starQuiz = document.querySelector("#begin");
var score = 0
var timeLeft = 60
var scoreList = document.querySelector("#score-list");

function storeScore() {
    localStorage.setItem("stored score", score);
}


function playgame() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = 'Time: ' + timeLeft;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};


starQuiz.addEventListener("click", function () {
    playgame()
    starQuiz.classList.add("hide")
    displayQuestion()
});

function displayQuestion() {
    questionsArea.innerHTML = ""
    var text = document.createElement("h2")
    text.innerText = questions[index].questionText
    questionsArea.appendChild(text)
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button")
        button.innerText = questions[index].choices[i]
        button.addEventListener("click", checkAnswer)
        questionsArea.appendChild(button)
    }
};

function checkAnswer(event) {
    var ansText = event.target.textContent;
    console.log(ansText);
    if (ansText === questions[index].answer) {
        score = score + 100;
        console.log(score);
        index++;
        if (questions[index]) {
            displayQuestion()
        } else {
            alert("Game Over! Score: " + score);
            storeScore();
        }

    } else {
        timeLeft -= 10;
        score = score - 100;
        index++;
        console.log(score);
        displayQuestion()
    }
    function gameOver() {
        timerEl.textContent = 0
        gameOverCard.style.display = "block";
        questionCard.style.display = "none";
        gameOverCard.children[1].children[0].textContent = questionCount - 1;
        gameOverCard.children[1].children[1].textContent = questions.length;
        for (j = 0; j < 4; j++) {
            questionCard.children[2].children[0].remove();
        }
        gameOverCard.children[2].addEventListener("click", init);

    }
    function storeScores() {
        localStorage.setItem("storedScores", JSON.stringify(scores))
}
}