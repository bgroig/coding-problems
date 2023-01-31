let x = [1,2,3,4,6,7,8];
let y = [1,2,3,5,6,7,8];

const findMissingNumber = arr => {
  //guard clause
  if(Array.isArray(arr)) {
    //loop over array
    for(let i = 0; i < arr.length; i++) {
      //conditional to check for a missing number
      if(arr[i + 1] !== arr[i] + 1) {
        //printing missing nymber to the console
        console.log(arr[i] + 1  + " is missing");
        return;
      }
    } 
  } 
}
    
findMissingNumber(x);