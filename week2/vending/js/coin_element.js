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
const DISPLAY_PRICE = document.querySelector('.display_price')

COIN_DATA.forEach((coin) => {
  const COIN_ITEM = document.createElement('li');
  const COIN_BTN = document.createElement('button');

  COIN_ITEM.classList.add('coin');
  COIN_BTN.classList.add('coin_btn');

  COIN_BTN.textContent = `${coin.price} 원`;
  COIN_BTN.dataset.price = coin.price;
  COIN_BTN.dataset.id = coin.id;

  // 동전 추가 버튼 클릭 이벤트
  COIN_BTN.addEventListener('click', (e) => {
    const price = e.target.dataset.price;
    const displayPrice = DISPLAY_PRICE.textContent;
    let totalPrice = +displayPrice + +price;
    DISPLAY_PRICE.textContent = totalPrice.toString();
  })

  COIN_ITEM.appendChild(COIN_BTN);
  COIN_LIST.appendChild(COIN_ITEM);
});

// 반환 버튼 클릭 이벤트
const RETURN_BTN = document.querySelector('.return_btn');
const RETURN_COIN = document.querySelector('.return_coin');
RETURN_BTN.addEventListener('click', () => {
  RETURN_COIN.textContent = `${DISPLAY_PRICE.textContent} 원`;
  DISPLAY_PRICE.textContent = '0';
  setTimeout(() => RETURN_COIN.textContent = '', 2000);
});