// Find the issue in the below code snippet.

let counter = 0;
for (let i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
// console.log(i); // Uncommenting this will result in an error since `i` is not accessible here.
