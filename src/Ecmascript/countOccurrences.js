// src/Ecmascript/countOccurrences.js
const countOccurrences = (input) => {
    const flattenedArray = input.flat();
    return flattenedArray.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };
  
  export default countOccurrences;