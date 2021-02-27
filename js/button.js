let btnGoToTown = document.getElementById('gotoTown');
btnGoToTown.addEventListener('click', () => {
    console.log('btn Click');
    x_character = canvasWidth / 2;
    y_character = canvasHeight / 2;
    potal = 'Town';

    backgroundImg.src = backgroundImgUrl_Town;


    // drawImg_Town();
    // moveCharacter();
    // drawImg_Town();


});

document.getElementById('meso').innerText = 'Meso: ' + Meso;
document.getElementById('power').innerText = 'Power: ' + power;

let btnWeapon1Buy = document.getElementById('weapon1');
btnWeapon1Buy.addEventListener('click', () => {
    console.log('buy click');
    if (Meso >= 1000) {
        Meso -= 1000;
        power += 1;
        document.getElementById('meso').innerText = 'Meso: ' + Meso;
        document.getElementById('power').innerText = 'Power: ' + power;
    } else {
        alert('메소가 부족합니다!')
    }
});