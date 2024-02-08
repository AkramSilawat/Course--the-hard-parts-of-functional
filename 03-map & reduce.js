
// ========== Map ========== //

//  // -- Devlopers tend to callArrayAndManipulate, Map

//  const map = (array, instructions) => {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }

// const multiplyBy2 = input => input * 2;

// const result = map([1,2,3], multiplyBy2);

// - Let's diagram it in a different way and talk about the purpose of diagramming - //





// ========== Reduce Example ========== //

/* -- This function is known as reduce - it can handle a 
remarkable rang of tasks -- */

// const reduce = (array, howToCombine, buildingUp) => {
//     for (let i = 0; i < array.lenght; i++) {
//         buildingUp = howToCombine(buildingUp, array[i]);
//     }
//     console.log(buildingUp);
//     return buildingUp;
// }

// const add = (a, b) => a + b;

// const summed = reduce([1, 2, 3], add, 0);

// -- Should be called 'reduce from 2 things to 1 repeatedly, inside'




// ========== Built-in Array Methdes ========== //

// -- interlude- arrays, objects and functions have access to 'methodes'

// ~~ 'methods' are functions that they can use on themselves 

// const array = [1,2,3];
// array.push(); // Where's this push method come from?

/* ~~ The 'methods' that array get are stored in an object that
      every array has access to when you refer to the array, followed
      by a 'dat' and the method name (See OOP JS Hard Parts)

   ~~ The link to this object full of shared methods is on the
      __proto__property  */



// --------------------------------------------------------------------------------

// JavaScript has a built-in version of reduce available to all arrays

// -- Reminder of our version of reduce

// const add = (a, b) => a + b;

// const summed = reduce([1,2,3], add, 0); // summed is 6


/* - With the built-in version, the array is inserted into the reduce funtion
     automatically as the first input/argument.But they produce the same result - */

// const add = (a, b) => a + b;

// const summed = [1, 2, 3].reduce(add, 0); // 

// console.log(summed); 



// -----------------------------------------------------------------------------------

/* -- in fact we get a number of built-in higher order functions in javaScript - */

// ~~ map, forEach, filter, flatMap, reduce, reduceRight
// ~~ All 'iterate' through each element of the array and run a function on each
// ~~ But behave differently- MDN guides us

// const array = [1, 2, 3, 4, 5, 6];

// const greaterThen2 = num => num > 2;

// const filteredArray = array.filter(greaterThen2); // [ 3,4,5,6 ]

// console.log(filteredArray)



// --------------------------------------------------------------------------
/* -- And we can 'chain' these higher order function - pass the
output of one as the onput of the next  -- */

// const array = [1, 2, 3, 4, 5, 6];
// const greaterThen2 = num => num > 2;
// const add = (a, b) => a + b;

// const sumOfGreaterThen2 = array.filter(greaterThen2).reduce(add, 0);

// console.log(sumOfGreaterThen2)