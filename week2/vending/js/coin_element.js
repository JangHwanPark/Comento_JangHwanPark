const COIN_DATA = [
  {
    id: 1,
    price: 10,
  },
  {
    id: 2,
    price: 50,
  },
  {
    id: 3,
    price: 100,
  },
  {
    id: 4,
    price: 500,
  }
];

const COIN_LIST = document.querySelector('.coin_list');
COIN_DATA.forEach((coin) => {
  const COIN_ITEM = document.createElement('li');
  const COIN_BTN = document.createElement('button');

  COIN_ITEM.classList.add('coin');
  COIN_BTN.textContent = `${coin.price} 원`;
  COIN_BTN.dataset.price = coin.price;
  COIN_BTN.dataset.id = coin.id;

  COIN_ITEM.appendChild(COIN_BTN);
  COIN_LIST.appendChild(COIN_ITEM);
});