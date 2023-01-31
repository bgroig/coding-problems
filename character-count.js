let x = "AAAJLLCCA";
let y = "YYYYYWW";
let z = "zkjdkijifaddDdASGSSSSKKKBBEKDEEEE";

const letterCount = str => {
  //Guard clause
  if(str && typeof(str) === 'string') {
    //Two empty string variables.  finalCount is the string that will have letters and the amount of letter next to it. letter is how we gather each letter or sets of letters.
    let finalCount = "" ;
    let letter = "";
    //loop over the given input string
    for(let i = 0; i < str.length; i++) {
      //add each identical letter that is next to each other to letter
      letter += str[i];
      //conditional to stop when letter is no longer the same as previous letter
     if(str[i] !== str[i + 1]) {
       //add letter to finalCount
      finalCount += letter + letter.length;
       //reset letter to an empty string
      letter = "";
      } 
      //return finalCount
     } return finalCount;
  }
}

letterCount(y);