const potatoCount = str => {
    if(str && typeof(str) === "string") {
    // testing to see if correct input
    str = str.trim().toLowerCase().replaceAll(" ", "").split("ato").filter(x => x === 'pot').length; 
    // starting with 3 string methods to take away space and make lowercase.  Then splitting potato in half
    // and filtering 'pot' into its own array then counting the length of the array to give us how many times
    // 'pot' shows up in the string.
    return str;
    }
  }
     
  potatoCount("potatotomatoPotato");