
// ========== Function Composition ========== //
// 01__
// -- We could keep track eith global variables -- //

// const multiplyBy2 = x => x * 2;
// const add3 = x => x + 3;
// const divideBy5 = x => x / 5;

// const initialResult = multiplyBy2(11);
// const nextStep = add3(initialResult);
// const finalStep = divideBy5(nextStep);

// console.log("initialResult", initialResult);
// console.log("nextStep", nextStep);
// console.log("finalStep", finalStep);

// -- But that's risky, people can overwrite 





// -------------------------------------------------------------
// 02__
/* -- Or we can use the fact that javaScript evaluates every
      function call before it moves on -- */

// const multiplyBy2 = x => x * 2;
// const add3 = x => x + 3;
// const divideBy5 = x => x / 5;

// const result = divideBy5(add3(multiplyBy2(11)));
// console.log(result)

// -- Now this is pretty unreadable though 



// -------------------------------------------------------------
// 03__
// -- Reduce as the most versatile function in programming

// const multiplyBy2 = x => x * 2;
// const add3 = x => x + 3;
// const divideBy5 = x => x / 5;

// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i = 0; i < array.length; i++){
//         buildingUp = howToCombine(buildingUp, array[i]);
//     }
//     console.log(buildingUp)
//     return buildingUp;
// }

// const runFunctionOnInput = (input, fn) => {
//     return fn(input);
// }

// const output = reduce([multiplyBy2, add3, divideBy5],runFunctionOnInput, 11);

// const output = reduce([
//     multiplyBy2, 
//     add3, 
//     divideBy5
// ],
// runFunctionOnInput, 11
// );




// ========== Function Composition with Reduce ========== //

/* -- And we can 'chain' these higher order functions - pass the
      output of one as the input of the next -- */

// const array = [1, 2, 3, 4, 5, 6];
// const gretherThan2 = num => num > 2;
// const add = (a, b) => a + b

// const sumOfGreaterThen2 = array.filter(gretherThan2).reduce(add, 0);

// console.log(sumOfGreaterThen2)





// ========== Function Composition Review ========== //

/* -- Listing out our 'lines of code'(functions) by name with each one's consequence
      limited to only affect the next 'line' (function call/ invocation) -- */

const multiplyBy2 = x => x * 2;
const add3 = x => x + 3;
const divideBy5 = x => x / 5;
const subtract4 = x => x - 4;

const reduce = (array, howToCombine, buildingUp) => {
    for (let i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i]);
    }
    console.log(buildingUp)
    return buildingUp;
}

const runFunctionOnInput = (input, fn) => { return fn(input) }

const output = reduce([
    multiplyBy2,
    add3,
    divideBy5,
    subtract4
],
    runFunctionOnInput, 11
);




