const moveCharacter = () => {

    if (x_character >= canvasWidth) {
        x_character = 0;
        y_character = canvasHeight - CharaterHeight;
    } else if (x_character <= -CharaterWidth) {
        x_character = canvasWidth - CharaterWidth;
        y_character = canvasHeight - CharaterHeight;
    } else if (y_character >= canvasHeight) {
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
    } else if (y_character <= 0) {
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
    }

};

/////////////////////////////////////////////
// Key Mapping
/////////////////////////////////////////////
let myKey;
let attackInterval;

document.addEventListener('keydown', (e) => {

    myKey = e.keyCode;

    if (myKey == 65 || myKey == 37) {
        x_character -= 10;
        // y -= 10;      
    } else if (myKey == 68 || myKey == 39) {
        x_character += 10;
        // y += 10;
    } else if (myKey == 87 || myKey == 38) {
        y_character -= 10;
    } else if (myKey == 83 || myKey == 40) {
        y_character += 10;

    } else if (myKey == 32) {
        console.log('spacebar');
        if (attacking === false) {
            attacking = true;
            laserX = x_character;
            laserY = y_character;
            dy = y_character;
            attackInterval = setInterval(attack, 10);
        } else {
            console.log('이미 공격 중')
        }
    }

    console.log('X:' + x_character);
    console.log('Y: ' + y_character);

    if (x_character <= 60 && y_character >= 400 && potal === 'Town') {
        console.log('potal is LaserGame');
        potal = "LaserGame";
        x_character = canvasWidth / 2;
        y_character = canvasHeight - CharaterHeight;
        drawLazerGame();
    } else if (x_character <= 40 && y_character <= 40 && potal === 'Town') {
        console.log('potal is BallGame');
        potal = "BallGame";
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
        drawBallGame();
    } else if (x_character >= 200 && x_character <= 290 && y_character <= 140 && potal === 'Town') {
        console.log('potal is Home');
        potal = 'Home';
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
        drawHome();
    } else if (x_character >= 150 && x_character <= 200 && y_character <= 160 && potal === 'Home') {
        let result = prompt('숫자 맞추기 시스템에 오신 것을 환영합니다\n 1 ~ 10 숫자 중에서 정답을 맞추시면 10000메소를 드립니다.\n게임 메소는 1000 메소 입니다!', '구매를 원하면 Y를 입력하세요');
        if (result = 'Y' && Meso >= 1000) {
            Meso -= 1000;
            let result2 = prompt('1 ~ 10 까지 수를 입력하시오.');
            let num = Math.random() * 10;
            let a = Math.ceil(num);

            if(a === result2) {
                alert('성공하셨습니다!!')
                Meso += 10000;
            } else {
                alert('안타깝지만 싪패하셨습니다.')
            }

        } else {
            alert('메소가 부족하거나 잘못 입력하셨습니다!!')
        }
        x_character = canvasWidth / 2;
        y_character = canvasHeight / 2;
    }

    if (potal === 'Town') {
        console.log('townnnnnnnnn')
        drawImg_Town();
    } else if (potal === 'LaserGame') {
        console.log('lasergamemmmmmmmmmm')
        drawImg_LaserGame();
    } else if (potal === 'BallGame') {
        // draw();
    } else if (potal === 'Home') {
        drawHome();
    }
    // console.log(backgroundImg.src)
    moveCharacter();

});