import {KEYPAD_OPTION, KEYPAD_NUMBERS} from "./element_data.js";
import {rendering_element} from "./cal_fn.js";

// 계산기 데이터
let calculatorNumber = [];
let calculatorOperator = [];

// DOM
const CALCULATOR_VALUE = document.querySelector('.calculator_value');

// 키패드 렌더링 & 옵션 렌더링
const BTN_KEYPAD_OPTION = document.querySelector('.btn_keypad:first-child');
const BTN_KEYPAD_OPERATION = document.querySelector('.btn_keypad:last-child');
rendering_element(KEYPAD_OPTION, CALCULATOR_VALUE, BTN_KEYPAD_OPTION, calculatorNumber);
rendering_element(KEYPAD_NUMBERS, CALCULATOR_VALUE, BTN_KEYPAD_OPERATION, calculatorNumber);

// 초기화 버튼 및 삭제 버튼 이벤트
const CLEAR_BTN = document.querySelector('.clear_btn');
const DELETE_BTN = document.querySelector('.delete_btn');

CLEAR_BTN.addEventListener('click', () => {
  CALCULATOR_VALUE.textContent = '0';
  calculatorNumber = [];
});

DELETE_BTN.addEventListener('click', () => {
  calculatorNumber.pop();
  CALCULATOR_VALUE.textContent = CALCULATOR_VALUE.textContent.slice(0, -1);
});

// 연산 기능
const EQUALS_BTN = document.querySelector('.equals_btn');
EQUALS_BTN.addEventListener('click', (e) => {
  let value = CALCULATOR_VALUE.textContent;
  if (value === '' || value === null || value === undefined) {
    alert("값을 입력해주세요");
  }

  CALCULATOR_VALUE.textContent = '';
});
