function sumOfDistinctElements(set1, set2) {
  let sum = 0;
  let uniqueElements = new Set();

  set1.forEach(element => {
    if (!uniqueElements.has(element)) {
      sum += element;
      uniqueElements.add(element);
    }
  });

  set2.forEach(element => {
    if (!uniqueElements.has(element)) {
      sum += element;
      uniqueElements.add(element);
    }
  });

  return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); // 13


//Problem 1 solution 2

function sumOfDistinctElements(set1, set2) {
  let sum = 0;
  let elementCounts = {};

  set1.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  set2.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  for (let element in elementCounts) {
    if (elementCounts[element] === 1) {
      sum += parseInt(element);
    }
  }

  return sum;
}

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); // 13

