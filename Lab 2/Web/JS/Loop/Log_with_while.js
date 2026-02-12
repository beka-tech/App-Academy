function logBetweenStepper2(min, max, step) {
  i = min;
  while (i <= max) {
    if (i % 5 == 0) {
      console.log(i);
    }
    i++;
  }
}

logBetweenStepper2(-10, 15, 5);
