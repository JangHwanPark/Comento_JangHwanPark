import {CONTENT, GAUGE, MAIN, NAVIGATION} from '../data/dom.js';

// 배터리 감소
export const reduce_percentage = (percentage) => {
  if (percentage > 0) {
    percentage -= 1;
    GAUGE.textContent = percentage.toString();
  }

  return percentage;
}

// 배터리 방전
export const died_battery = (percentage) => {
  if (percentage <= 0) {
    CONTENT.classList.add('died');
    MAIN.style.display = 'none';
    NAVIGATION.style.display = 'none';
  } else {
    CONTENT.classList.remove('died');
    MAIN.style.display = 'block';
    NAVIGATION.style.display = 'flex';
  }
}