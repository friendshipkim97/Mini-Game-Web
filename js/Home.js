function drawHome() {
    let backgroundImg2 = new Image();
    if (potal === 'Home') {
        backgroundImg2.src = backgroundImgUrl_Home;

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();
        context.drawImage(backgroundImg2, 0, 0, canvasWidth, canvasHeight);
        context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);
    }
}

setInterval(drawHome, 100);