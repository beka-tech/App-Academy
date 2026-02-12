const tempsC = { morning: 10, noon: 18, night: 6 };
// TODO: convert to Fahrenheit and store in a new object
// result like: { morning: 50, noon: 64, night: 42 }
const tempsF = {};

for (const [k, v] of Object.entries(tempsC)) {
  tempsF[k] = (v * 9) / 5 + 32;
}

console.log(tempsF);
