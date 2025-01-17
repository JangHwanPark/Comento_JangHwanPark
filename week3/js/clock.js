// dom
import { CLOCK, HOUR, MINUTE } from '../data/dom.js';

export const show_time = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  CLOCK.textContent = `${hours}:${minutes}:${seconds}`;
}

export const create_time = (maxValue, type) => {
  for (let i = 1; i <= maxValue; i++) {
    const OPTIONS = document.createElement('option');
    OPTIONS.textContent = i.toString();
    type === 'hour' ? HOUR.appendChild(OPTIONS) : MINUTE.appendChild(OPTIONS);
  }
}