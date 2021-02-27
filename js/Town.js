

function drawTown() {
     backgroundImg.src = backgroundImgUrl_Town;
     context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
}

// Draw
const drawBackgroundImg_Town = () => {
    // backgroundImg.src = backgroundImgUrl_Town;
    context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
};
const drawCharacter_Town = () => {
    context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);
};

const drawImg_Town = () => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.beginPath();
    drawBackgroundImg_Town();
    drawCharacter_Town();
}

// const moveCharacter_Town = () => {

//     // drawImg_Town();

//     if (x_character >= canvasWidth) {
//         x_character = 0;
//         y_character = canvasHeight - CharaterHeight;
//     } else if (x_character <= -CharaterWidth) {
//         x_character = canvasWidth - CharaterWidth;
//         y_character = canvasHeight - CharaterHeight;
//     }

// };

