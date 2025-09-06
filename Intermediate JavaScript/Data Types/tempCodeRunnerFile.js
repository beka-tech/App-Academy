// Your code here

let additionMutator = function (nums1, n) {
  for (let i = 0; i < nums1.length; i++) {
    return (nums1[i] += n);
  }
};

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1); // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2); // [ 10, 8, 3 ]
