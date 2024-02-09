
// ========== Function Decoration introduction =========== //

/* -- To add a permanent memory to an existing function we have to create a new 
      function that will run the existing function inside of itself -- */

// const oncify = (converrMe) => {
//   let counter = 0;
//   const inner = (input) => {
//       if (counter === 0 ){
//           const output = converrMe(input);
//           counter++;
//           return output;
//       }
//       return "Sorry"
//   }
//   return inner;
// }
// const multiplyBy2 = num => num*2;

// const oncifiedMultiplyBy2 = oncify(multiplyBy2);

// console.log(oncifiedMultiplyBy2(10)); // 20
// console.log(oncifiedMultiplyBy2(7)); // Sorry





// ========== Partial Application Example ========== //

// -- Is's known as 'Partial application'

const multiply = (a, b) => a * b;
function prefillFunction(fn, prefilledValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefilledValue)
    console.log(output)
    return output;
  }
  return inner;
}
const multiplyBy2 = prefillFunction(multiply, 2);

const result = multiplyBy2(5)

// console.log(result)








// --- === New File Code === --- //

// ========== Wrapping Up ========== // 

// -- Readable, debuggable and easy to add features 

pipe(
  getPlayerName,
  getFirstName,
  properCase,
  addUserLabel,
  createUserTemplate
)([{ name: 'will sentance', score: 3 }]);

/* -- But our code is now a set of independent, self contained
      sets we can wield to solve any problem and become
      true composers of our code. -- */

