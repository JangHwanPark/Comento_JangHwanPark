const PRODUCT_DATA = [
  {
    id: 1,
    name: '콜라',
    price: 1000,
  },
  {
    id: 2,
    name: '사이다',
    price: 1200,
  },
  {
    id: 3,
    name: '환타',
    price: 800,
  },
  {
    id: 4,
    name: '포카리',
    price: 1500,
  },
  {
    id: 5,
    name: '게토레이',
    price: 1300,
  },
  {
    id: 6,
    name: '물',
    price: 500,
  },
  {
    id: 7,
    name: '커피',
    price: 1000,
  },
  {
    id: 8,
    name: '레드불',
    price: 2000,
  },
  {
    id: 9,
    name: '초코우유',
    price: 700,
  },
  {
    id: 10,
    name: '바나나우유',
    price: 800,
  },
];

const PRODUCT_LIST = document.querySelector('.product_list');
const COIN = document.querySelector('.display_price');

PRODUCT_DATA.forEach(item => {
  const PRODUCT_ITEM = document.createElement('li');
  const PRODUCT_NAME = document.createElement('p');
  const BTN_WRAPPER = document.createElement('div');
  const PRODUCT_BTN = document.createElement('button');
  const PRODUCT_PRICE = document.createElement('p');

  PRODUCT_ITEM.classList.add('product');
  PRODUCT_NAME.classList.add('product_name');
  BTN_WRAPPER.classList.add('btn_wrapper');

  PRODUCT_NAME.textContent = `${item.name}`;
  PRODUCT_PRICE.textContent = `${item.price} 원`;
  PRODUCT_BTN.dataset.price = item.price;
  PRODUCT_BTN.dataset.id = item.id;

  // 상품 구매 버튼 클릭 이벤트
  PRODUCT_BTN.addEventListener('click', (e) => {
    const coin = +COIN.textContent;
    const price = +e.target.dataset.price;
    
    if (coin >= price) {
      COIN.textContent = (coin - price).toString();
      alert(`${item.name} 구매 완료!`);
    } else if (coin <= price) {
      alert('잔액이 부족합니다.');
    }
  });

  PRODUCT_ITEM.appendChild(PRODUCT_NAME);
  PRODUCT_ITEM.appendChild(BTN_WRAPPER);
  BTN_WRAPPER.appendChild(PRODUCT_PRICE);
  BTN_WRAPPER.appendChild(PRODUCT_BTN);
  PRODUCT_LIST.appendChild(PRODUCT_ITEM);
});