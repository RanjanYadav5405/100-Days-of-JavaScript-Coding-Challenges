//* Programming Challenge: Number of Days Between Two Dates
//
//? Write a function calculateDaysBetweenDates that calculates the number of days
//between two dates. The dates will be provided in the format "yyYY-MM-DD".

// Hint
// Days= 24*60*60*1000

const calculateDaysBetweenDates = (a, b) => {
  let date1 = new Date(a);
  console.log(date1)

  let date2 = new Date(b)
  console.log(date2)
  
  let timediff = Math.abs(date1.getTime() - date2.getTime()) // If you don't want to give getTime().. don't do it still works(dat2 - dat1)
  console.log(timediff)

  let days = Math.ceil(timediff/(24 * 60 * 60 * 1000))
//   console.log(days)

  return days
}

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31")); // Output: 30

