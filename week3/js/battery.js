import { GAUGE } from '../data/dom.js';

// 배터리 감소
export const reduce_percentage = () => {
  let percentage = parseInt(GAUGE.textContent);

  if (percentage > 0) {
    const result = percentage - 1;
    GAUGE.textContent = result.toString();
  }
}