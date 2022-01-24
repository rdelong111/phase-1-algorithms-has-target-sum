function hasTargetSum(array, target) {
  const numI = {};
  let diff;

  for (let i = 0; i < array.length; i++) {
    diff = target - array[i];

    if (diff in numI) {
      return true;
    }
    else {
      numI[array[i]] = i;
    }
  }

  return false;
}

/* 
  O(n)
*/

/* 
  Initialize an empty object called numI.
  Initialize diff.

  Iterate over each item in the input array.
    Set the difference between target and current value of array and put in diff.

    If the value diff is in the object numI;
      return true.
    Else;
      current value in array will be put into the object numI.

  return false.
*/

/*
  Initialize an empty object called numI to store the current value in array if the difference hasn't been iterated through yet.
  Initialize diff for use when finding the difference between the target and current array value.

  Sets a for loop to iterate through the length of array.
    Find the difference between target and current value of array and put in diff.

    If the value diff is in the object numI;
      then it returns true.
    If the IF statement is false;
      then the current value in array will be put into the object numI with the current count in the for loop.

    If the for loop runs all the way through, then the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
