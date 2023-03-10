'use strict';

//QUERY SELECTORS
//Gameboard
const grid = document.querySelector('.js-memo-grid');
//Result
const resultDisplay = document.querySelector('.js-memo-result');
//Movements
const numMoves = document.querySelector('.js-memo-moves')
//Nav icon
const navIcon = document.querySelector('.js-nav-icon');
//Nav menu
const navMenu = document.querySelector('.js-nav-menu');

//VARIABLES
//Chosen cards array
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let userMoves = 0;

//Cards
const cardArray = [
    {
        name: 'harri',
        img: './images/01.jpg',
    },
    {
        name: 'aizkora',
        img: './images/02.jpg',
    },
    {
        name: 'zesta',
        img: './images/03.jpg',
    },
    {
        name: 'pilota',
        img: './images/04.jpg',
    },
    {
        name: 'txinga',
        img: './images/05.jpg',
    },
    {
        name: 'soka',
        img: './images/06.jpg',
    },
    {
        name: 'harri',
        img: './images/01.jpg',
    },
    {
        name: 'aizkora',
        img: './images/02.jpg',
    },
    {
        name: 'zesta',
        img: './images/03.jpg',
    },
    {
        name: 'pilota',
        img: './images/04.jpg',
    },
    {
        name: 'txinga',
        img: './images/05.jpg',
    },
    {
        name: 'soka',
        img: './images/06.jpg',
    },
];

//Randomize the array to change card position each time
cardArray.sort(() => 0.5 - Math.random());

//Create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/back.jpg');
        card.setAttribute('data-id', i);
        card.setAttribute('class', 'card')
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

createBoard();

//Check for matches
function checkForMatch() {
    //Select all img tags created for each card
    const cards = document.querySelectorAll('.card');
    //First value in the array
    const optionOneId = cardsChosenId[0];
    //Second value in the array
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        //alert('You found a match')
        cards[optionOneId].setAttribute('src', './images/blank.jpg');
        cards[optionTwoId].setAttribute('src', './images/blank.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        userMoves++;
    } else {
        //alert('Sorry, try again');
        cards[optionOneId].setAttribute('src', './images/back.jpg');
        cards[optionTwoId].setAttribute('src', './images/back.jpg');
        userMoves++;
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = cardsWon.length;
    numMoves.innerHTML = userMoves;
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congratulations! You found them all.';
    }
}

//Flip your card
function flipCard() {
    //Get id from clicked card, it matches its index
    let cardId = this.getAttribute('data-id');
    if(cardsChosenId.indexOf(cardId) === -1 && cardsChosenId.length < 2){
        //Add image responding to the chosen card
        this.setAttribute('src', cardArray[cardId].img);
        //Add chosen card id to the array
        cardsChosenId.push(cardId);
        //Add chosen card name to the array, using the index = cardId
        cardsChosen.push(cardArray[cardId].name);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400);
        }
    }else if(cardsChosenId.indexOf(cardId) !== -1){
        //alert('You've clicked the same card');
    }else{
        //alert('Wait until the match has been checked');
    }
}

//EVENT HANDLERS
function handleNavIconClick() {
    navMenu.classList.toggle('js-hidden');
}

//EVENT LISTENERS
navIcon.addEventListener('click', handleNavIconClick);