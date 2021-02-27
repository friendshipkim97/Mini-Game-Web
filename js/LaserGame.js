// let myCharacter = new Image();
// myCharacter.src = myCharacterImgUrl;
let monsterImg = new Image();
monsterImg.src = myCharacterImgUrl;


// let backgroundImg = new Image();
function drawLazerGame() {
    // backgroundImg = new Image();
    backgroundImg.src = backgroundImgUrl_Lazer;

    context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);
    context.drawImage(monsterImg, x_Monster, y_Monster, MonsterWidth, MonsterHeight);
    context.font = '20px serif';
    context.fillText('Monster HP: ' + monsterHP, 10, 25);

}

/////////////////////////////////////////////
// Draw Img method
/////////////////////////////////////////////
const drawBackgroundImg = () => {
    context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
};
const drawCharacter = () => {
    context.drawImage(myCharacter, x_character, y_character, CharaterWidth, CharaterHeight);
};
const drawMoster = () => {
    context.drawImage(monsterImg, x_Monster, y_Monster, MonsterWidth, MonsterHeight);
}
const drawMonsterHP = () => {

    context.font = '20px serif';
    context.fillText("Monster HP: " + monsterHP, 10, 25);

};

const drawCharacterHP = () => {

    context.font = '20px serif';
    context.fillText("Charater HP: " + characterHP, canvasWidth - 180, canvasHeight - 15);

};

const drawImg_LaserGame = () => {
    if (potal === 'LaserGame') {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();
        drawBackgroundImg();
        drawCharacter();
        drawMoster();
        drawMonsterHP();
        drawCharacterHP();
    }
}

/////////////////////////////////////////////
// Movement
/////////////////////////////////////////////
let dx = 5;
const moveMonster = () => {

    if (potal === 'LaserGame') {
        drawImg_LaserGame();

        if (x_Monster < 0 || x_Monster > (canvasWidth - MonsterWidth))
            dx = -dx;

        x_Monster += dx;
    }
};
// if(potal === "LaserGame") {
setInterval(moveMonster, 50);
// }

/////////////////////////////////////////////
// Attack
/////////////////////////////////////////////

let laserX;
let laserY;
let attacking = false;
let dy = y_character;

const attack = () => {

    if (potal === 'LaserGame') {
        if (laserY <= 0) {
            attacking = false;
            clearInterval(attackInterval);

        }

        if (Math.abs(laserX - x_Monster) < MonsterWidth && Math.abs(laserY - y_Monster) < MonsterWidth) {
            attacking = false;
            monsterHP -= power;
            drawMonsterHP();
            deathCheck();
            clearInterval(attackInterval);
        }
        console.log("monsterHP:" + monsterHP);

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        drawImg_LaserGame();

        context.beginPath();
        context.moveTo(laserX + 25, laserY);

        context.lineTo(laserX + 25, dy);
        context.stroke();

        laserY -= 2;
        dy -= 2.5;
    }
};

let laserX_Monster;
let laserY_Monster;
let attacking_Monster = false;
let dy_Monster = y_Monster;
let intervalMonsterAttack;

const attack_Monster = () => {

    if (potal === 'LaserGame') {
        if (laserY_Monster >= canvasHeight) {
            attacking_Monster = false;
            clearInterval(intervalMonsterAttack);

        }

        if (Math.abs(laserX_Monster - x_character) < CharaterWidth && Math.abs(laserY_Monster - y_character) < CharaterWidth) {
            attacking_Monster = false;
            characterHP -= 10;
            drawCharacterHP();
            deathCheck();
            clearInterval(intervalMonsterAttack);
        }

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        drawImg_LaserGame();

        context.beginPath();
        context.moveTo(laserX_Monster + 50, laserY_Monster + 100);

        context.lineTo(laserX_Monster + 50, dy_Monster + 100);
        context.stroke();

        laserY_Monster += 2;
        dy_Monster += 2.5;
    }

};

const attack_Monster_Check = () => {
    if (attacking_Monster === false && potal === 'LaserGame') {
        attacking_Monster = true;
        laserX_Monster = x_Monster;
        laserY_Monster = y_Monster;
        dy_Monster = y_Monster;
        intervalMonsterAttack = setInterval(attack_Monster, 10);
    }

};

// if(potal === 'LaserGame') {
setInterval(attack_Monster_Check, 50);
// }


/////////////////////////////////////////////
// Dying
/////////////////////////////////////////////

function deathCheck() {
    if (characterHP <= 0) {
        alert('you lose');
        
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
        potal = 'Town';

        backgroundImg.src = backgroundImgUrl_Town;

        characterHP = 50;
    } else if (monsterHP <= 0) {

        alert('You win');

        Meso += 100;
        document.getElementById('meso').innerText = 'Meso: ' + Meso;
        
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
        potal = 'Town';

        backgroundImg.src = backgroundImgUrl_Town;
        characterHP = 50;
    }
}