const distances = { run1: 3.2, run2: 4.5, run3: 2.8 };

const total = Object.entries(distances).reduce((acc, [k, v]) => acc + v, 0);

console.log("Total Distance run " + total);
