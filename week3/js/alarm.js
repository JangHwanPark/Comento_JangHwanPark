import { FORM, ALARM_LIST } from '../data/dom.js';

export const submit_alarm = (event) => {
  event.preventDefault();
  const hour = event.target[0].value;
  const minute = event.target[1].value;
  const alarm = `${hour}:${minute}`;
  alert(`알람이 ${alarm}으로 설정되었습니다.`);

  const ALARM = document.createElement('li');
  ALARM.textContent = alarm;
  ALARM.classList.add('alarm');
  ALARM_LIST.appendChild(ALARM);
}

