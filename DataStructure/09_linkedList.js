// create a LinkedList

// 10-->16-->20-->null

// let LinkedList = {   
//     head:{
//         value:10,
//         next:{
//             value:16,
//             next:{
//                 value:20,
//             }
//         }
//     }
// }

class LinkedList{
    constructor(data){
        this.head = {
            value:data,
            next:null
        }
        this.trail = this.head
        this.length = 1;
    }
}

const newList = new LinkedList(10)
console.log(newList)