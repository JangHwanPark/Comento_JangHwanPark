import { FORM } from '../data/dom.js';

export const submit_alarm = () => {
  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    const hour = event.target[0].value;
    const minute = event.target[1].value;
    const alarm = `${hour}:${minute}`;
    alert(`알람이 ${alarm}으로 설정되었습니다.`);
  });
}