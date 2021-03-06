// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myFunction() {
  console.log(`This is my function`)
  const firstMessage = 'this day has been tough';


    function myNextFunction() {
      console.log(`This is my Next Function and ${firstMessage}`)
      const secondMessage = 'No really it has been super tough'

        function myFinalFunction() {
          console.log(`This is the very last function but I can honestly say, ${firstMessage}, ${secondMessage}, seriously.`)

        }
        myFinalFunction();
    }
    myNextFunction();
}
myFunction();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function (){
   return ++count;
  }
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
