let zip = function (array1, array2) {
  let newzip = [];

  for (let i = 0; i < array1.length; i++) {
    let el1 = array1[i];
    let el2 = array2[i];
    newzip.push(el1, el2);
  }
  return newzip;
};

console.log(zip([1, 2, 3, 4, 5], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
