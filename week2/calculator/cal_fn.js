// 키패드 렌더링 함수
export const rendering_element = (keypadData, value, element, calculatorNumber) => {
  keypadData.forEach(item => {
    const KEYPAD_LIST = document.createElement('li');
    const KEYPAD_BTN = document.createElement('button');

    KEYPAD_LIST.classList.add(item.itemClass);
    KEYPAD_BTN.classList.add(item.btnClass);

    KEYPAD_BTN.textContent = item.value;

    // 키패드 이벤트
    if (KEYPAD_BTN.textContent !== '=' && KEYPAD_BTN.textContent !== 'DELETE') {
      KEYPAD_BTN.addEventListener('click', () => {
        if (value.textContent === '0') {
          value.textContent = KEYPAD_BTN.textContent;
          calculatorNumber = [KEYPAD_BTN.textContent];
        } else {
          value.textContent += KEYPAD_BTN.textContent;
          calculatorNumber.push(KEYPAD_BTN.textContent);
        }
      });
    }

    KEYPAD_LIST.appendChild(KEYPAD_BTN);
    element.appendChild(KEYPAD_LIST);
})};