function adoptSmallerDog(weight1, weight2) {
  return weight1 < weight2
    ? `I adopted a dog that weighs ${weight1} pounds.`
    : `I adopted a dog that weighs ${weight2} pounds.`;
}

console.log(adoptSmallerDog(40, 60));
