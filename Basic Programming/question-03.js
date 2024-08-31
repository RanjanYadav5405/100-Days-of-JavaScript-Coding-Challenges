// Analyze the below code. Do you see any issue? If yes, what is that issue?

// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//       console.log(this.a + this.b);
//     },
//   };
//   const func = object1.c;
//   func(); // This will throw an error because this is undefined in the global scope

//   In this case, this would not be an issue since arrow functions do not have their own this and would instead close over the object1

//============================================================================

const object1 ={
    a: 10,
    b: 20,
    c: () =>{
        console.log(object1.a + object1.b);
    }
}
const func = object1.c
func() 