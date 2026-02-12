let adequateSleepTracker = function (calendar) {
  for (let i = 0; i < calendar.length; i++) {
    const week = calendar[i];
    let weekDays = 0;
    for (let j = 0; j < week.length; j++) {
      let day = week[j];

      if (day >= 6) {
        weekDays++;
      }
    }
    if (weekDays < 4) {
      return false;
    }
  }
  return true;
};

const calendar = [
  [7, 5, 6, 6, 0, 8, 6], // 5 days ≥6 hours ✅
  [6, 6, 0, 0, 6, 7, 6], // 5 days ≥6 hours ✅
];

console.log(adequateSleepTracker(calendar)); // → true

const calendar2 = [
  [7, 7, 7, 7, 7, 7, 7], // 7 days ≥6 ✅
  [0, 0, 0, 6, 0, 0, 0], // only 1 day ≥6 ❌
];

console.log(adequateSleepTracker(calendar2)); //false
