import { CONTENT, GAUGE, MAIN, NAVIGATION } from '../data/dom.js';

const charger = document.querySelector(".charger");
const tablet = document.querySelector(".content");

let percentage = parseInt(GAUGE.textContent);
let charging = false;
let chargeInterval;

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

// 충전 상태 확인
const checkCharging = () => {
  const chargerRect = charger.getBoundingClientRect();
  const tabletRect = tablet.getBoundingClientRect();

  if (
      chargerRect.right > tabletRect.left - 10 &&
      chargerRect.left < tabletRect.right + 10 &&
      chargerRect.bottom > tabletRect.top - 10 &&
      chargerRect.top < tabletRect.bottom + 10
  ) {
    console.log("🔋 충전 시작!");
    startCharging();
  } else {
    console.log("⚠️ 충전 중지");
    stopCharging();
  }
}

// 충전 시작
const startCharging = (percentage) => {
  if (!charging) {
    charging = true;
    tablet.classList.add("charging");
    console.log("✅ 충전기 연결됨!");

    chargeInterval = setInterval(() => {
      console.log(`🔋 충전 중: ${percentage}%`);
      if (percentage < 100) {
        percentage += 2;
        console.log(`🔋 충전 중: ${percentage}%`);
        GAUGE.textContent = percentage.toString();
      } else {
        console.log("⚡ 배터리 가득 참!");
        stopCharging();
      }
    }, 1000);
  }
}

// 충전 중지
const stopCharging = () => {
  if (charging) {
    charging = false;
    tablet.classList.remove("charging");
    clearInterval(chargeInterval);
  }
}

// 충전기 드래그 이벤트
export const initCharger = () => {
  let isDragging = false;
  let offsetX, offsetY;

  charger.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = charger.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    charger.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // 뷰포트 기준으로 충전기 위치 설정
    charger.style.position = "absolute";
    charger.style.left = `${e.clientX - offsetX}px`;
    charger.style.top = `${e.clientY - offsetY}px`;

    checkCharging();  // ✅ 매개변수 없이 호출
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    charger.style.cursor = "grab";
  });
}
