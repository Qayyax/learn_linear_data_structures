function sumOfOverlappingElements(set1, set2) {
  let sum = 0;
  let uniqueElements = new Set();

  set1.forEach(element => {
    if (set2.includes(element) && !uniqueElements.has(element)) {
      sum += element;
      uniqueElements.add(element);
    }
  });

  return sum;
}

let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
console.log(sumOfOverlappingElements(set1, set2)); // 46

//Solution 2

function sumOfOverlappingElements(set1, set2) {
  let sum = 0;
  let elementCounts = {};

  set1.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  set2.forEach(element => {
    if (elementCounts[element] > 0) {
      sum += element;
      elementCounts[element]--;
    }
  });

  return sum;
}

let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
console.log(sum)


