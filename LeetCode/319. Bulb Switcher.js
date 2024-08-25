// 319. Bulb Switcher

// There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

// On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

// Return the number of bulbs that are on after n rounds.

 
// Example 1:

// Input: n = 3
// Output: 1
// Explanation: At first, the three bulbs are [off, off, off].
// After the first round, the three bulbs are [on, on, on].
// After the second round, the three bulbs are [on, off, on].
// After the third round, the three bulbs are [on, off, off]. 
// So you should return 1 because there is only one bulb is on.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 1
 
//==========================================================================================================
var bulbSwitch = function(n) {

  return Math.floor(Math.sqrt(n))
  
  };  
  console.log(bulbSwitch(3)) // output 1
  console.log(bulbSwitch(0))// output 0
  console.log(bulbSwitch(1)) // output 1





//========================================================================================


// another method without using in built function

// var bulbSwitch = function(n) {
//     let onBulb =0
  
//       for(let i =0; i<n; i++){
//           if( i*i <=n){
//             onBulb++
//           }
//       }
//       return onBulb 
//   };  
//   console.log(bulbSwitch(3)) // output 1
//   console.log(bulbSwitch(0))// output 0
//   console.log(bulbSwitch(1)) // output 1