const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceth = document.querySelector(".dice");
const btnew = document.querySelector(".btn--new");
const btroll = document.querySelector(".btn--roll");
const bthold = document.querySelector(".btn--hold");

let score,curretnscore,activeplayer,playing;

const init = function () {
   scores = [0, 0];
  curretnscore = 0;
   activeplayer = 0;
   playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.add("player--active");

};
init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

diceth.classList.add("hidden");

btroll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceth.classList.remove("hidden");
    diceth.src = `dice-${dice}.png`;

    if (dice !== 1) {
      curretnscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        curretnscore;
    } else {
      switchplayer();
    }
  }
});

bthold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += curretnscore;

    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 10) {
      playing = false;
      diceth.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      switchplayer();
    }
  }
});

btnew.addEventListener("click", function () {init();});
