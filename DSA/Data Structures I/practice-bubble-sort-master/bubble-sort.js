function bubbleSort(arr) {
  // Iterate through the array
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let j = 0; j < arr.length; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapping = true;
      }
    }
  }

  // If the current value is greater than its neighbor to the right
  // Swap those values

  // Do not move this console.log
  console.log(arr.join(","));

  // If you get to the end of the array and no swaps have occurred, return

  // Otherwise, repeat from the beginning
}

module.exports = bubbleSort;
