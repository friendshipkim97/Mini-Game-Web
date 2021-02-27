var ballX = 20;
var ballY = 40;
var ballA = 30;
var ballB = 60;
var balldx = 3;
var balldy = 3;
var ballda = 3;
var balldb = 3;

function drawBallGame() {
    if (potal === 'BallGame') {
        backgroundImg.src = backgroundImgUrl_Ball;
        context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
        context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);
    }
}

function draw() {
    if (potal === 'BallGame') {
        context.clearRect(0, 0, 500, 500);
        context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
        context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);

        context.fillText("Score" + score, 20, 20);
        context.beginPath();
        context.arc(ballX, ballY, 10, 0, Math.PI * 2);
        context.arc(ballA, ballB, 10, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
        ballX += balldx;
        ballY += balldy;
        ballA += ballda;
        ballB += balldb;

        if (Math.abs(x_character - ballX) < 35 && Math.abs(y_character - ballY) < 35) {
            score -= 1;
        }
        if (Math.abs(x_character - ballA) < 35 && Math.abs(y_character - ballB) < 35) {
            score -= 1;
        }
        if (ballX + balldx > 490 || ballX + balldx < 10) {
            var randomX = Math.random() + 0.5;
            balldx = balldx * randomX;
            balldx = -balldx;
        }

        if (ballY + balldy > 490 || ballY + balldy < 10) {
            var randomY = Math.random() + 0.5;
            balldy = balldy * randomY;
            balldy = -balldy;
        }
        if (ballA + ballda > 490 || ballA + ballda < 10) {
            var randomX = Math.random() + 0.5;
            ballda = ballda * randomX;
            ballda = -ballda;
        }

        if (ballB + balldb > 490 || ballB + balldb < 10) {
            var randomY = Math.random() + 0.5;
            balldb = balldb * randomY;
            balldb = -balldb;
        }
    }
}

// function selection() {
//     if (x > 450 && y > 450) {
//         count = 2;
//         clearInterval(selection);
//         var repeat = setInterval(function () {
//             draw();
//             if (x < 50 && y > 450) {
//                 count = 1;
//                 clearInterval(repeat);
//             }
//         }, 10);
//     }
// }

// let i = score;
setInterval(() => {
    if (potal === 'BallGame') {
        if (score >= 0) {
            Meso += 500;
            document.getElementById('meso').innerText = 'Meso: ' + Meso;
        } else {
            x_character = canvasWidth / 2;
            y_character = canvasHeight / 2;
            potal = 'Town';

            backgroundImg.src = backgroundImgUrl_Town;
            score = 0;
            alert('You hit!!')
        }
    }
}, 3000);

setInterval(draw, 10);