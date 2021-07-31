import cardMenu from '../templates/gallery-pics.hbs';
import menuArrey from '../js/menu.json'; // пути?????

const cardsMarkup = createMenuCards(menuArrey);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArrey) {
  return cardMenu(menuArrey);
}
menuEl.insertAdjacentHTML('beforeend', cardsMarkup);
