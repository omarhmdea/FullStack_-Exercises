const splice = function(arr, start, deleteCount, item1, item2){

    let deletedArry = []

    if(deleteCount){
        for (let index = start; index < deleteCount; index++) {
            deletedArry.push(arr[index])
        }
        return arr.filter(x => !deletedArry.includes(x))
    } else if(item1){
        
    }
}

// remove 1 element
// let arr = [1,2,3]
// console.log(splice(arr, 0,1)); //should be [2,3]

// add 1 element
arr = [1,2,3]
console.log(splice(arr, 0,0,0)); //should be [0,1,2,3]

// // add 2 elements
// arr = [1,2,3]
// splice(arr,0,0,-1,0); 
// console.log(arr); //should be [-1,0,1,2,3]

// // replace 1 element
// arr = [1,2,3]
// splice(arr,1,1,55); 
// console.log(arr); //should be [1,55,3] 

// // delete all elements from index to end
// arr = [1,2,3,4,5]
// splice(arr,1); 
// console.log(arr); //should be [1] 

// // returns array of deleted elements
// arr = [1,2,3]
// let deleted = splice(arr,1); 
// console.log(deleted); //should be [2,3] 

// // returns an array of the deleted element (1 element)
// arr = [1,2,3]
// deleted = splice(arr,1,1); 
// console.log(deleted); //should be [2] 

// // returns an empty array when no elements are deleted
// arr = [1,2,3]
// deleted = splice(arr,1,0,5); 
// console.log(deleted); //should be [] 