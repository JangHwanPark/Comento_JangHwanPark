import { FORM, ALARM_LIST } from '../data/dom.js';

export const submit_alarm = (event) => {
  event.preventDefault();
  const type = event.target[0].value;
  const hour = event.target[1].value;
  const minute = event.target[2].value;
  const alarm = `${type} ${hour}시 ${minute}분`;
  alert(`알람이 ${alarm}으로 설정되었습니다.`);

  const ALARM = document.createElement('li');
  ALARM.textContent = alarm;
  ALARM.classList.add('item');
  ALARM_LIST.appendChild(ALARM);
}

