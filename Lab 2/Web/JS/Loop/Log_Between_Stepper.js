function logBetweenStepper(min, max, step) {
  for (i = min; i <= max; i += step) {
    console.log(i);
  }
}

logBetweenStepper(5, 9, 1);
