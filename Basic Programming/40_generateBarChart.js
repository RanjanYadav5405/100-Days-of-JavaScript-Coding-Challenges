// Generate Bar chat 
// 1: *****
// 2: **
// 3: ***
// 4: ******
// 5: ********
//=============================================================================================
// const generateBarChart = (arr) => {


//     return arr.map((curElem, index) => {

//         let star = "";
//         for (let i = 1; i <= curElem; i++) {
//             star += "*"
//         }

//         return `${index + 1}: ${star}`

//     }).join("\n")

// }

//=================================================================================================
// 2nd alternative way
const generateBarChart = (arr) => {
      
    return arr.map((curElem, index) => {
        return `${index + 1}: ${"*".repeat(curElem)}`
    }).join("\n")

}

console.log(generateBarChart([5, 2, 3, 6, 8]))