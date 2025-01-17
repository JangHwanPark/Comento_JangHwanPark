import {died_battery, reduce_percentage} from './battery.js';
import {show_time, create_time} from "./clock.js";
import {submit_alarm} from "./alarm.js";
import {FORM, GAUGE} from '../data/dom.js';

// 배터리 감소 및 방전
let percentage = parseInt(GAUGE.textContent);
console.log("percentage app: ", percentage);
setInterval(() => {
  percentage = reduce_percentage(percentage);
  died_battery(percentage);
}, 10);

// 시계 화면
show_time();

// 알람
create_time(12, 'hour');
create_time(60, 'minute');
FORM.addEventListener('submit', submit_alarm);
