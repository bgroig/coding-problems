const findLongestWord = sentence => {
    if(sentence && typeof(sentence) === "string") {
      sentence = sentence.replace(/[,?.!]/g ,"");
      sentence = sentence.trim().split(" ").sort((a, b) => a.length - b.length);
      
      console.log(sentence.pop());
      return;
    }  
}

findLongestWord("Hello, how are you, Benjamin");

// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex