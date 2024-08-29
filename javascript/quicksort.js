function partition(array, low, high) {
  // type your code in here
  const pIdx = high--;
  const pVal = array[pIdx];

  while (low <= high) {
    // console.log("low: ", low, ", high: ", high);

    if (array[low] >= pVal && array[high] < pVal) {
      [array[low], array[high]] = [array[high], array[low]];
      low++; high--;
    } else if (array[low] < pVal && array[high] < pVal) {
      low++;
    } else if (array[low] >= pVal && array[high] >= pVal) {
      high--;
    } else {
      low++; high--;
    }
  }

  [array[low], array[pIdx]] = [array[pIdx], array[low]]
  // console.log('Pivoted Array: ', array, ", Pivot(low): ", low);

  return low;
}

function quicksort(array, low = 0, high = array.length - 1) {
  // type your code here
  if (low >= high)
    return array;

  const pIdx = partition(array, low, high);
  // console.log('low: ', low, ", high: ", high, ", pIdx: ", pIdx);
  quicksort(array, low, pIdx-1);
  quicksort(array, pIdx+1, high);
  return array;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  // console.log('Input: [1, 2]');
  // partition([1, 2], 0, 1);

  // console.log('Input: [2, 1]');
  // partition([2, 1], 0, 1);

  // console.log('Input: [1, 2, 3]');
  // partition([1, 2, 3], 0, 2);

  // console.log('Input: [2, 3, 1]');
  // partition([2, 3, 1], 0, 2);

  // console.log('Input: [3, 1, 2]');
  // partition([3, 1, 2], 0, 2);

  // console.log('Input: [1, 3, 2]');
  // partition([1, 3, 2], 0, 2);
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
