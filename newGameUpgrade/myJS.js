'use strict';

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const dicePic = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
};

init();

const switchPlayer = function () {
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   player0El.classList.toggle("player--active");    
   player1El.classList.toggle("player--active");
};

btnRoll.addEventListener('click', function(){
     if (playing) {
        //Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        alert('hello joey, dice rolled!!!' + dice);
        //display dice roll
        dicePic.classList.remove('hidden');
        dicePic.src = `dice-${dice}.png`;

        if (dice !==1) {
            //add dice to current score
            currentScore += dice;

            //display new score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            //switch player
            switchPlayer();
        }
        }
     });

     btnHold.addEventListener('click', function () {
        if (playing) {
            // add the current scores to the active player
            scores[activePlayer] += currentScore;
            console.log(currentScore);

            document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
            // check if the score > 20

            if(scores[activePlayer] >= 20){
                playing = false;
                dicePic.classList.add('hidden');
                // finish the game
                document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winnder');
                document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            } else {
                //switch to the next player
                switchPlayer();
            }
          } 
      });

      btnNew.addEventListener('click', init);



