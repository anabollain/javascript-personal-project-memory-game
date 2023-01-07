'use strict';

//QUERY SELECTORS
//Gameboard
const grid = document.querySelector('.js-memo-grid');
//Result
const resultDisplay = document.querySelector('.js-memo-result');
//Movements
const numMoves = document.querySelector('.js-memo-moves')
//Restart button
//const restartBtn = document.querySelector('.js-re-btn');

//VARIABLES
//Chosen cards array
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let userMoves = 0;

//Cards
const cardArray = [
    {
        name: '1',
        img: './images/image01.jpg',
    },
    {
        name: '2',
        img: './images/image02.jpg',
    },
    {
        name: '3',
        img: './images/image03.jpg',
    },
    {
        name: '4',
        img: './images/image04.jpg',
    },
    {
        name: '5',
        img: './images/image05.jpg',
    },
    {
        name: '6',
        img: './images/image06.jpg',
    },
    {
        name: '1',
        img: './images/image01.jpg',
    },
    {
        name: '2',
        img: './images/image02.jpg',
    },
    {
        name: '3',
        img: './images/image03.jpg',
    },
    {
        name: '4',
        img: './images/image04.jpg',
    },
    {
        name: '5',
        img: './images/image05.jpg',
    },
    {
        name: '6',
        img: './images/image06.jpg',
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
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/back.jpg');
        cards[optionTwoId].setAttribute('src', './images/back.jpg');
        //alert('You have clicked the same image');
        userMoves++;
    } else if (cardsChosen[0] === cardsChosen[1]) {
        //alert('You found a match')
        cards[optionOneId].setAttribute('src', './images/blank.jpg');
        cards[optionTwoId].setAttribute('src', './images/blank.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        userMoves++;
    } else {
        cards[optionOneId].setAttribute('src', './images/back.jpg');
        cards[optionTwoId].setAttribute('src', './images/back.jpg');
        //alert('Sorry, try again');
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
    //Add chosen card name to the array, using the index = cardId
    cardsChosen.push(cardArray[cardId].name);
    //Add chosen card id to the array
    cardsChosenId.push(cardId);
    //Add image responding to the chosen card
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300);
    }
}
