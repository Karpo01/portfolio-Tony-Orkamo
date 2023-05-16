const ansioluetteloLinkki = document.getElementById('kortti1');
const card = document.querySelector('.kortti1');
let cardMoved = false;
const originalTransform = window.getComputedStyle(card).getPropertyValue('transform');

ansioluetteloLinkki.addEventListener('click', (event) => {
  event.preventDefault();
  if (window.innerWidth >= 1600) {
  if (cardMoved) {
    card.style.transform = originalTransform;
    cardMoved = false;
  } else {
    // Siirretään kortti oikealle ja keskitetään se
    card.style.transform = 'translatey(7%) translatex(30%) translate(130%) scale(1.2)';
    cardMoved = true;
  }}
});



const ansioluettelo1Linkki = document.getElementById('kortti3');
const card3 = document.querySelector('.kortti3');
let card3Moved = false;
const originaTransform = window.getComputedStyle(card3).getPropertyValue('transform');

ansioluettelo1Linkki.addEventListener('click', (event) => {
  event.preventDefault();
  if (window.innerWidth >= 1680) {
  if (card3Moved) {
    card3.style.transform = originaTransform;
    card3Moved = false;
  } else {
    // Siirretään kortti vasemmalle keskelle sivua
    card3.style.transform = 'translatey(7%) translatex(-30%) translate(-110%) scale(1.2)';
    card3Moved = true;
  }  }
});



