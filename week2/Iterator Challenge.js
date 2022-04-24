
const  arr = [11,13,14,66,67,69,234,456,2,1,22,222,222]
const myObject = {

}
myObject[Symbol.iterator] = function() {
    let numindex = 0;
    done = false;
    return {
      next() {
          while (numindex <= arr.length) {
              if (arr[numindex] % 2 == 0) 
                return {value:arr[numindex++], done:done};
              else
                numindex++
          }
            return {done : true} 
        }
         
    }
}
    
for (let x of myObject) {
    console.log(x)
}