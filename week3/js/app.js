import {died_battery, initCharger, reduce_percentage} from './battery.js';
import {show_time, create_time} from "./clock.js";
import {submit_alarm} from "./alarm.js";
import {FORM, GAUGE} from '../data/dom.js';

// 배터리 초기 값
let percentage = parseInt(GAUGE.textContent);

// 충전기 기능 활성화
initCharger();

// 배터리 감소 및 방전
setInterval(() => {
  percentage = reduce_percentage(percentage);
  died_battery(percentage);
}, 1000);

// 시계 화면
show_time();

// 알람
create_time(12, 'hour');
create_time(60, 'minute');
FORM.addEventListener('submit', submit_alarm);
