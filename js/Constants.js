/////////////////////////////////////////////
// Component Setting
/////////////////////////////////////////////
let canvasWidth = 500;
let canvasHeight = 500;


/////////////////////////////////////////////
// Home
/////////////////////////////////////////////
let backgroundImgUrl_Home = 'images/background_home.gif';

/////////////////////////////////////////////
// Town
/////////////////////////////////////////////
let backgroundImgUrl_Town = 'images/background_town.jpeg';
let potal = "Town";
let x_character = canvasWidth / 2;
let y_character = canvasHeight / 2; 

//////////////////////////////////////////////////////////////////////////////////////////
// LaserGame
//////////////////////////////////////////////////////////////////////////////////////////
// About Character
/////////////////////////////////////////////
let CharaterWidth = 50;
let CharaterHeight = 50;
// let x_character = 0;
// let y_character = 450;
let characterHP = 50;
let power = 5;
let Meso = 0;

/////////////////////////////////////////////
// About Monster
/////////////////////////////////////////////
let MonsterWidth = 100;
let MonsterHeight = 100;
let x_Monster = 150;
let y_Monster = 20;
let monsterHP = 100;

let myCharacterImgUrl = 'images/img_character.png';
let backgroundImgUrl_Lazer = 'images/background_laser.gif';

//////////////////////////////////////////////////////////////////////////////////////////
// Ball Game
//////////////////////////////////////////////////////////////////////////////////////////
let x = 250;
let y = 250;
let score = 0;

// let myCharacterImgUrl_ = 'images/americano.jpg';
let backgroundImgUrl_Ball = 'images/background_ball.jpg';
let backgroundImg2Url_Ball = 'images/hubble.jpeg';

/////////////////////////////////////////////
// initialize
/////////////////////////////////////////////
const canvas = document.getElementById('myCanvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.style.border = '1px solid black';
const context = canvas.getContext('2d');

let myCharacter = new Image();
myCharacter.src = myCharacterImgUrl;

let backgroundImg = new Image();
backgroundImg.src = backgroundImgUrl_Town;

backgroundImg.onload = () => {
    context.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);
    context.drawImage(myCharacter, canvasWidth / 2, canvasHeight / 2, CharaterWidth, CharaterHeight);
};