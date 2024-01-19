let points = 0;
let timer = 30;
let timerId;
let button = document.getElementById("movingButton");
let intervalId = setInterval(moveClown, 2000);

document.getElementById("startButtonEasy").addEventListener("click", function () {
    document.getElementById("startMenu").style.display = 'none';
    document.getElementById("gameArea").style.display = 'block';
    document.getElementById("currentScore").style.display = 'flex';
    easyGame();

});
document.getElementById("startButtonMedium").addEventListener("click", function () {
    document.getElementById("startMenu").style.display = 'none';
    document.getElementById("gameArea").style.display = 'block';
    document.getElementById("currentScore").style.display = 'flex';
    mediumGame();
});
document.getElementById("startButtonHard").addEventListener("click", function () {
    document.getElementById("startMenu").style.display = 'none';
    document.getElementById("gameArea").style.display = 'block';
    document.getElementById("currentScore").style.display = 'flex';
    hardGame();
});

document.getElementById("restart").addEventListener("click", function () {
    restartGame();
})

button.addEventListener("click", function () {
    followScore();
    moveClown();
    boingSound.currentTime = 0;
    boingSound.play();
});

function followScore() {
    points++
    document.getElementById("cScore").textContent = points
}

function moveClown() {
    let gameArea = document.getElementById("gameArea");
    let gameAreaLimit = gameArea.getBoundingClientRect();
    let xCoord = Math.floor(Math.random() * (gameAreaLimit.width - button.offsetWidth));
    let yCoord = Math.floor(Math.random() * (gameAreaLimit.height - button.offsetHeight));
    button.style.left = xCoord + "px";
    button.style.top = yCoord + "px";
}

function resetInterval(difficulty) {
    clearInterval(intervalId);
    let interval;
    switch (difficulty) {
        case 'easy':
            interval = 1500;
            break;
        case 'medium':
            interval = 1000;
            break;
        case 'hard':
            interval = 750;
            break;
        default:
            interval = 1500;
    }
    intervalId = setInterval(moveClown, interval);
}

function easyGame() {
    button.addEventListener("click", function () {
        resetInterval('easy');
    });
    document.getElementById("startMenu").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
    timer = 30;
    timerId = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(timerId);
            document.getElementById("gameArea").style.display = "none";
            document.getElementById("currentScore").style.display = "none";
            document.getElementById("FinalScore").style.display = "flex";
            document.getElementById("score").textContent = points;
        }
    }, 1000);
};

function mediumGame() {
    button.addEventListener("click", function () {
        resetInterval('medium');
    });
    document.getElementById("startMenu").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
    timer = 30;
    clearInterval(intervalId);
    intervalId = setInterval(moveClown, 1500);
    timerId = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(timerId);
            document.getElementById("gameArea").style.display = "none";
            document.getElementById("currentScore").style.display = "none";
            document.getElementById("FinalScore").style.display = "flex";
            document.getElementById("score").textContent = points;
        }
    }, 1000);
};

function hardGame() {
    button.addEventListener("click", function () {
        resetInterval('hard');
    });
    points = 0;
    document.getElementById("startMenu").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
    timer = 30;
    clearInterval(intervalId);
    intervalId = setInterval(moveClown, 1000);
    timerId = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(timerId);
            document.getElementById("gameArea").style.display = "none";
            document.getElementById("currentScore").style.display = "none";
            document.getElementById("FinalScore").style.display = "flex";
            document.getElementById("score").textContent = points;
        }
    }, 1000);
};

function restartGame() {
    timer = 30;
    points = 0;

    document.getElementById("FinalScore").style.display = "none";
    document.getElementById("gameArea").style.display = "flex";
    document.getElementById("currentScore").style.display = "flex";
    document.getElementById("score").textContent = points;
    document.getElementById("cScore").textContent = points;

    timerId = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(timerId);
            document.getElementById("gameArea").style.display = "none";
            document.getElementById("currentScore").style.display = "none";
            document.getElementById("FinalScore").style.display = "flex";
            document.getElementById("score").textContent = points;
        }
    }, 1000);
}


