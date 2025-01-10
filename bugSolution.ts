function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both parameters must be numbers.");
    return 0; // Or handle the error in a more appropriate way
  }
}

const result1 = addSafe(1, 2); // Works correctly
console.log(result1); // Output: 3

const result2 = addSafe("1", 2); // Type safety, error handling
console.log(result2); // Output: Error message and 0

const result3 = addSafe(1, "2"); // Type safety, error handling
console.log(result3); //Output: Error message and 0

//Type assertion (Use with caution!)
const result4 = add(parseInt("1"), 2); //Using Type Assertion
console.log(result4); //Output: 3