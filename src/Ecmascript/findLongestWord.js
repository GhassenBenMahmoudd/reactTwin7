// src/Ecmascript/findLongestWord.js
const findLongestWord = (words) => {
    const wordsWithLength = words.map(word => ({ mot: word, longueur: word.length }));
    const longestWord = wordsWithLength.reduce((acc, curr) => curr.longueur > acc.longueur ? curr : acc);
    return { mot: longestWord.mot, longueur: longestWord.longueur };
  };
  
  export default findLongestWord;